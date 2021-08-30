#!/bin/bash

PROTO_DIR="./proto"
ZIP_FILE="./tmp.zip"
DESMOS_DIR="./desmos"

mkdir -p "$DESMOS_DIR"

wget -qO "$ZIP_FILE" wget https://github.com/desmos-labs/desmos/archive/refs/heads/master.zip
rm -R $PROTO_DIR
unzip "$ZIP_FILE" "**.proto" -d "$DESMOS_DIR"
mv "$DESMOS_DIR/desmos-master/proto" $PROTO_DIR
mv "$DESMOS_DIR/desmos-master/third_party" $PROTO_DIR
rm -Rf $DESMOS_DIR
rm $ZIP_FILE