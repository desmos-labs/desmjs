#!/usr/bin/env bash

# Force stop the execution at the first error
set -e

DESMOS_USER=desmos
PASSWORD=keyringpassword
TEST_ACCOUNT_1=desmos1nm6kh6jwqmsezwtnmgdd4w4tzyk9f8gvqu5en0
TEST_ACCOUNT_2=desmos1cywv6k7d94nyka74q7cr59yauzs690ky2ew6qx
TEST_ACCOUNT_3=desmos1c7ms9zhtgwmv5jy6ztj2vq0jj67zenw3gdl2gr
TEST_ACCOUNT_4=desmos1f88f8sdnt4qznzj5drnqtn279uelat402xx5yv

# Clean start the desmos chain.
rm -r -f $HOME/.desmos
desmos unsafe-reset-all
desmos init testchain --chain-id=testchain

# Prepare the chain
(echo $PASSWORD; echo $PASSWORD) | desmos keys add $DESMOS_USER --keyring-backend=file
echo $PASSWORD | desmos add-genesis-account $DESMOS_USER 100000000000000stake --keyring-backend=file
# Add some test users
echo $PASSWORD | desmos add-genesis-account $TEST_ACCOUNT_1 100000000000000stake --keyring-backend=file
echo $PASSWORD | desmos add-genesis-account $TEST_ACCOUNT_2 100000000000000stake --keyring-backend=file
echo $PASSWORD | desmos add-genesis-account $TEST_ACCOUNT_3 100000000000000stake --keyring-backend=file
echo $PASSWORD | desmos add-genesis-account $TEST_ACCOUNT_4 100000000000000stake --keyring-backend=file

echo $PASSWORD | desmos gentx $DESMOS_USER 100000000000stake --amount 100000000000stake --chain-id=testchain --keyring-backend=file
desmos collect-gentxs
desmos start
