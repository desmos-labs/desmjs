#!/usr/bin/env bash

# Force stop the execution at the first error
set -e

# Absolute path of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
BIN_DIR="$SCRIPT_DIR/../../../bin"

# Directory where the Desmos Proto files are defined
PROTO_FILES_DIR="$SCRIPT_DIR/../proto-files"

# Directory where will be placed the file generated from ts-proto
SRC_DIR="$SCRIPT_DIR/../src"

# Directory where Proto files are put
PROTO_DIR="$PROTO_FILES_DIR/proto"
THIRD_PARTY_DIR="$PROTO_FILES_DIR/third_party/proto"

# Directory where custom DesmJS Proto files are defined
CUSTOM_PROTO_FILES_DIR="$SCRIPT_DIR/../proto"
cp -R "$CUSTOM_PROTO_FILES_DIR" "$PROTO_FILES_DIR"

# Path of the Typescript Proto compiler plugin
PLUGIN_PATH="$(realpath "$BIN_DIR")/protoc-gen-ts_proto_yarn_2"

# Protoc command complete of plugins and other things to be used in order to generate the Proto definitions
PROTOC="protoc
  --plugin=$PLUGIN_PATH
  -I$THIRD_PARTY_DIR
  --ts_proto_out=$SRC_DIR
  --ts_proto_opt=esModuleInterop=true,forceLong=long,useOptionals=messages,exportCommonSymbols=false"

# Generate the third party Proto files
echo "Generating third party Proto files..."
proto_dirs=$(find "$THIRD_PARTY_DIR" -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  $PROTOC -I"$THIRD_PARTY_DIR" $(find "${dir}" -maxdepth 1 -name '*.proto')
done

# Generate the Desmos Proto files
echo "Generating Desmos Proto files ..."
proto_dirs=$(find "$PROTO_DIR" -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  $PROTOC -I"$PROTO_DIR" $(find "${dir}" -maxdepth 1 -name '*.proto')
done
