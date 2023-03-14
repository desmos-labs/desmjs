#!/bin/bash

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
DIRS="confio cosmos desmjs desmos ethermint gogoproto google ibc tendermint"
FILES=(
  helpers.d.ts
  helpers.js
  index.d.ts
  index.js
)

for dir in $DIRS; do
  rm -rf "$SCRIPT_DIR/../$dir"
  cp -R "$SCRIPT_DIR/../build/$dir" "$SCRIPT_DIR/../."
done

for f in "${FILES[@]}"; do
  rm -rf "$SCRIPT_DIR/../$f"
  cp "$SCRIPT_DIR/../build/$f" "$SCRIPT_DIR/../."
done
