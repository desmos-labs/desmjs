#!/usr/bin/env bash

# Force stop the execution at the first error
set -e

# Absolute path of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
BIN_DIR="$SCRIPT_DIR/../../../bin"

# Directory where the Desmos Proto files are defined
PROTO_FILES_DIR="$SCRIPT_DIR/../proto-files"

# Directory where custom DesmJS Proto files are defined
CUSTOM_PROTO_FILES_DIR="$SCRIPT_DIR/../proto"

# Directory where will be placed the file generated from ts-proto
SRC_DIR="$SCRIPT_DIR/../src"
[ -d "$SRC_DIR" ] || mkdir "$SRC_DIR"

PROTO_DIR="$PROTO_FILES_DIR/proto"
THIRD_PARTY_DIR="$PROTO_FILES_DIR/third_party/proto"

PLUGIN_PATH="$(realpath $BIN_DIR)/protoc-gen-ts_proto_yarn_2"

echo "Processing desmos proto files ..."
protoc \
  --plugin="$PLUGIN_PATH" \
  --ts_proto_yarn_2_out="$SRC_DIR" \
  --proto_path="$PROTO_DIR" \
  --proto_path="$THIRD_PARTY_DIR" \
  --proto_path="$CUSTOM_PROTO_FILES_DIR" \
  --ts_proto_yarn_2_opt="esModuleInterop=true,forceLong=long,useOptionals=true,exportCommonSymbols=false" \
  "$PROTO_DIR/desmos/profiles/v1beta1/client/cli.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/genesis.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/models_app_links.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/models_chain_links.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/models_dtag_requests.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/models_packets.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/models_params.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/models_profile.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/models_relationships.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/msg_server.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/msgs_app_links.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/msgs_chain_links.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/msgs_dtag_requests.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/msgs_profile.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/msgs_relationships.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/query.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/query_app_links.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/query_chain_links.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/query_dtag_requests.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/query_params.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/query_profile.proto" \
  "$PROTO_DIR/desmos/profiles/v1beta1/query_relationships.proto" \
  "$CUSTOM_PROTO_FILES_DIR/desmjs/msgs.proto"
