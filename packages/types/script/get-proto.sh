#!/usr/bin/env bash

# Force stop the execution at the first error
set -e

# Absolute path of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
# Temporary directory where will be extracted the proto files
TMP_DIR="$SCRIPT_DIR/../tmp"
# Directory where will be placed the proto files
PROTO_DIR="$SCRIPT_DIR/../proto-files"

# Desmos config
DESMOS_VERSION="5.2.0"
DESMOS_SRC_URL="https://github.com/desmos-labs/desmos/archive/refs/tags/v$DESMOS_VERSION.zip"
DESMOS_ZIP_FILE="$SCRIPT_DIR/../desmos-source.zip"

# Cosmos config
COSMOS_VERSION="0.47.3"
COSMOS_SRC_URL="https://github.com/cosmos/cosmos-sdk/archive/refs/tags/v$COSMOS_VERSION.zip"
COSMOS_ZIP_FILE="$SCRIPT_DIR/../cosmos-source.zip"

# IBC config
IBC_VERSION="7.2.0"
IBC_SRC_URL="https://github.com/cosmos/ibc-go/archive/refs/tags/v$IBC_VERSION.zip"
IBC_ZIP_FILE="$SCRIPT_DIR/../ibc-source.zip"

# ICS config
ICS_VERSION="0.10.0"
ICS_URL="https://github.com/cosmos/ics23/archive/refs/tags/go/v$ICS_VERSION.zip"
ICS_ZIP_FILE="$SCRIPT_DIR/../ics-source.zip"


# Download Desmos proto files
wget -q  --show-progress $DESMOS_SRC_URL -O "$DESMOS_ZIP_FILE"
# Download Cosmos proto files
# We download the source to be sure to have the correct version instead of what provides telescope.
wget -q  --show-progress $COSMOS_SRC_URL -O "$COSMOS_ZIP_FILE"
# Download IBC proto files
# We download the source to be sure to have the correct version instead of what provides telescope.
wget -q  --show-progress $IBC_SRC_URL -O "$IBC_ZIP_FILE"
# Download ICS proto files
# We download the source to be sure to have the correct version instead of what provides telescope.
wget -q  --show-progress $ICS_URL -O "$ICS_ZIP_FILE"


# Create a temp dir where will be extracted the proto files
mkdir -p "$TMP_DIR"

# Get proto files from the Desmos zip
unzip -qq "$DESMOS_ZIP_FILE" "**.proto" -d "$TMP_DIR"
rm "$DESMOS_ZIP_FILE"

# Get proto files from the Cosmos zip
unzip -qq "$COSMOS_ZIP_FILE" "**.proto" -d "$TMP_DIR"
rm "$COSMOS_ZIP_FILE"

# Get proto files from the ibc zip
unzip -qq "$IBC_ZIP_FILE" "**.proto" -d "$TMP_DIR"
rm "$IBC_ZIP_FILE"

# Get proto files from the ics zip
unzip -qq "$ICS_ZIP_FILE" "**.proto" -d "$TMP_DIR"
rm "$ICS_ZIP_FILE"


# Clear the directory where will be extracted the proto files
if [ -d "$PROTO_DIR" ]; then
  rm -R "$PROTO_DIR"
fi
mkdir "$PROTO_DIR"

# Move the Desmos proto files into the proto dir
mv "$TMP_DIR/desmos-$DESMOS_VERSION/proto/desmos" "$PROTO_DIR"

# Create the Cosmos proto dir
COSMOS_PROTO_DIR="$PROTO_DIR/cosmos"
mkdir -p "$COSMOS_PROTO_DIR"

# Move the modules proto files
modules=("app" "auth" "authz" "bank" "base" "capability" "crisis" "crypto" "distribution" "evidence" "feegrant"
"genutil" "gov" "group" "mint" "msg" "nft" "orm" "params" "query" "slashing" "staking" "tx" "upgrade" "vesting")
for i in "${modules[@]}"
do
   mv "$TMP_DIR/cosmos-sdk-$COSMOS_VERSION/proto/cosmos/$i" "$COSMOS_PROTO_DIR"
done

# Move the amino proto files
mv "$TMP_DIR/cosmos-sdk-$COSMOS_VERSION/proto/amino" "$PROTO_DIR"

# Move tendermint proto files
mv "$TMP_DIR/cosmos-sdk-$COSMOS_VERSION/proto/tendermint" "$PROTO_DIR"

# Move IBC proto files
mv "$TMP_DIR/ibc-go-$IBC_VERSION/proto/ibc" "$PROTO_DIR"

# Move ICS proto files
mv "$TMP_DIR/ics23-go-v$ICS_VERSION/proto/cosmos/ics23" "$PROTO_DIR/cosmos"

# Install needed third party proto files by telescope
yarn telescope install @protobufs/cosmos_proto @protobufs/confio @protobufs/google @protobufs/gogoproto

# Mv the proto files downloaded by telescope into the proto dir
find "proto" -mindepth 1 -maxdepth 1 -type d ! -name "desmjs" -exec mv -t "$PROTO_DIR" {} +

rm -Rf "$TMP_DIR"
echo "Proto files obtained successfully!"
