#!/bin/bash

# Force stop the execution at the first error
set -e

# Absolute path of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
BIN_DIR="$SCRIPT_DIR/../../../bin"

# Directory where will be placed the proto files
PROTO_DIR="$SCRIPT_DIR/../proto-files"
# Directory where will be placed the file generated from ts-proto
SRC_DIR="$SCRIPT_DIR/../src"
DESMOS_DIR="$PROTO_DIR/proto"
THIRD_PARTY_DIR="$PROTO_DIR/third_party/proto"

PLUGIN_PATH="$(realpath $BIN_DIR)/protoc-gen-ts_proto_yarn_2"
echo $PLUGIN_PATH

echo "Processing desmos proto files ..."
protoc \
  --plugin="$PLUGIN_PATH" \
  --ts_proto_yarn_2_out="$SRC_DIR" \
  --proto_path="$DESMOS_DIR" \
  --proto_path="$THIRD_PARTY_DIR" \
  --ts_proto_yarn_2_opt="esModuleInterop=true,forceLong=long,useOptionals=true,exportCommonSymbols=false" \
  "$DESMOS_DIR/desmos/fees/v1beta1/genesis.proto" \
  "$DESMOS_DIR/desmos/fees/v1beta1/min_fee.proto" \
  "$DESMOS_DIR/desmos/fees/v1beta1/params.proto" \
  "$DESMOS_DIR/desmos/fees/v1beta1/query.proto" \
  "$DESMOS_DIR/desmos/posts/v1beta1/genesis.proto" \
  "$DESMOS_DIR/desmos/posts/v1beta1/msgs.proto" \
  "$DESMOS_DIR/desmos/posts/v1beta1/params.proto" \
  "$DESMOS_DIR/desmos/posts/v1beta1/polls.proto" \
  "$DESMOS_DIR/desmos/posts/v1beta1/posts.proto" \
  "$DESMOS_DIR/desmos/posts/v1beta1/query.proto" \
  "$DESMOS_DIR/desmos/posts/v1beta1/reactions.proto" \
  "$DESMOS_DIR/desmos/posts/v1beta1/report.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/client/cli.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/genesis.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/models_app_links.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/models_chain_links.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/models_dtag_requests.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/models_packets.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/models_params.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/models_profile.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/models_relationships.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/msg_server.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/msgs_app_links.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/msgs_chain_links.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/msgs_dtag_requests.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/msgs_profile.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/msgs_relationships.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/query.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/query_app_links.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/query_chain_links.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/query_dtag_requests.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/query_params.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/query_profile.proto" \
  "$DESMOS_DIR/desmos/profiles/v1beta1/query_relationships.proto" \
  "$DESMOS_DIR/desmos/subspaces/v1beta1/genesis.proto" \
  "$DESMOS_DIR/desmos/subspaces/v1beta1/msgs.proto" \
  "$DESMOS_DIR/desmos/subspaces/v1beta1/query.proto" \
  "$DESMOS_DIR/desmos/subspaces/v1beta1/subspace.proto"