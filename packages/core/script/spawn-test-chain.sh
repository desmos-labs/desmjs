#!/usr/bin/env bash

# Force stop the execution at the first error
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

DESMOS_USER=desmos
PASSWORD=keyringpassword
TEST_ACCOUNT_1=desmos1nm6kh6jwqmsezwtnmgdd4w4tzyk9f8gvqu5en0
TEST_ACCOUNT_2=desmos1cywv6k7d94nyka74q7cr59yauzs690ky2ew6qx
TEST_ACCOUNT_3=desmos1c7ms9zhtgwmv5jy6ztj2vq0jj67zenw3gdl2gr
TEST_ACCOUNT_4=desmos1f88f8sdnt4qznzj5drnqtn279uelat402xx5yv
DESMOS_VERSION="4.7.0"
DESMOS_URL="https://github.com/desmos-labs/desmos/releases/download/v$DESMOS_VERSION/desmos-$DESMOS_VERSION-linux-amd64"
DESMOS_BIN="$SCRIPT_DIR/desmos"

if [ -f $DESMOS_BIN ]; then
  BIN_VERSION=$($DESMOS_BIN version)
  if [ "$BIN_VERSION" != "$DESMOS_VERSION" ]; then
    echo "Current binary version is != from the expected"
    echo "BIN_VERSION = $BIN_VERSION"
    echo "DESMOS_VERSION = $DESMOS_VERSION"
    echo "Download desmos version: $DESMOS_VERSION"
    wget -q --show-progress  $DESMOS_URL -O "$DESMOS_BIN"
    chmod +x $DESMOS_BIN
  fi
else
  # Download desmos bin
  echo "Desmos bin not found, download desmos version: $DESMOS_VERSION"
  wget -q --show-progress $DESMOS_URL -O "$DESMOS_BIN"
  chmod +x $DESMOS_BIN
fi

# Clean start the desmos chain.
rm -r -f $HOME/.desmos
$DESMOS_BIN tendermint unsafe-reset-all
$DESMOS_BIN init testchain --chain-id=testchain

# Prepare the chain
(echo $PASSWORD; echo $PASSWORD) | $DESMOS_BIN keys add $DESMOS_USER --keyring-backend=file
echo $PASSWORD | $DESMOS_BIN add-genesis-account $DESMOS_USER 100000000000000stake --keyring-backend=file
# Add some test users
echo $PASSWORD | $DESMOS_BIN add-genesis-account $TEST_ACCOUNT_1 100000000000000stake --keyring-backend=file
echo $PASSWORD | $DESMOS_BIN add-genesis-account $TEST_ACCOUNT_2 100000000000000stake --keyring-backend=file
echo $PASSWORD | $DESMOS_BIN add-genesis-account $TEST_ACCOUNT_3 100000000000000stake --keyring-backend=file
echo $PASSWORD | $DESMOS_BIN add-genesis-account $TEST_ACCOUNT_4 100000000000000stake --keyring-backend=file

echo $PASSWORD | $DESMOS_BIN gentx $DESMOS_USER 100000000000stake --amount 100000000000stake --chain-id=testchain --keyring-backend=file
$DESMOS_BIN collect-gentxs
$DESMOS_BIN start
