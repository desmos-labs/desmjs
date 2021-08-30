OUT_DIR="./src"

PLUGIN_PATH="$(realpath ./bin)/protoc-gen-ts_proto_yarn_2"

mkdir -p "$OUT_DIR"

echo "Processing desmos proto files ..."
DESMOS_DIR="./proto"
DESMOS_THIRD_PARTY_DIR="./proto/third_party/proto"
protoc \
  --plugin="$PLUGIN_PATH" \
  --ts_proto_yarn_2_out="$OUT_DIR" \
  --proto_path="$DESMOS_DIR" \
  --proto_path="$DESMOS_THIRD_PARTY_DIR" \
  --ts_proto_yarn_2_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
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