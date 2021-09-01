#!/bin/bash

# Force stop the execution at the first error
set -e

# Absolute path of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Temporary directory where will be extracted the proto files
TMP_DIR="$SCRIPT_DIR/../tmp"
# Path where will be downloaded the desmos sources
ZIP_FILE="$SCRIPT_DIR/../desmos-source.zip"
# Directory where will be placed the proto files
PROTO_DIR="$SCRIPT_DIR/../proto-files"
# Directory where will be placed the file generated from ts-proto
SRC_DIR="$SCRIPT_DIR/../src"


# Download the proto files
wget https://github.com/desmos-labs/desmos/archive/refs/heads/master.zip -O "$ZIP_FILE"
# Create a temp dir where will be extracted the proto files
mkdir -p "$TMP_DIR"
# Get the proto from the zip
unzip "$ZIP_FILE" "**.proto" -d "$TMP_DIR"
rm $ZIP_FILE

# Clear the directory where will be extracted the proto files
if [ -d $PROTO_DIR ]; then
  rm -R $PROTO_DIR
fi
mkdir $PROTO_DIR

# Mv the proto file into the proto dir
mv "$TMP_DIR/desmos-master/proto" $PROTO_DIR
mv "$TMP_DIR/desmos-master/third_party" $PROTO_DIR

# Clean up tmp dir
rm -Rf $TMP_DIR

echo "Proto file obtained successfully!"
