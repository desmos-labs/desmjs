#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
DESMOS_HOME="$SCRIPT_DIR/.desmos"
KEYRING_PASS=pass1234
# User 1 informations
USER1=user1
USER1_ADDRESS=desmos1nm6kh6jwqmsezwtnmgdd4w4tzyk9f8gvqu5en0
USER1_MNEMONIC="hour harbor fame unaware bunker junk garment decrease federal vicious island smile warrior fame right suit portion skate analyst multiply magnet medal fresh sweet"
# User 2 informations
USER2=user2
USER2_ADDRESS=desmos1c7ms9zhtgwmv5jy6ztj2vq0jj67zenw3gdl2gr
USER2_MNEMONIC="shine velvet envelope baby bicycle slot betray water mask cake rule useless absorb lens enable fork lake make depart slogan kiwi iron decorate relief"

# Test smart contract
SMART_CONTRACT="$SCRIPT_DIR/assets/test_contract.wasm"


desmos() {
	"$SCRIPT_DIR/desmos" --home="$DESMOS_HOME" "$@"
}

# Force the script to exit at the first error
set -e

# Upload the smart contract
echo "Uploading contract..."
echo $KEYRING_PASS | desmos tx wasm store "$SMART_CONTRACT" \
  --from $USER1 --chain-id=testchain --keyring-backend=file -y --gas 3000000 \
  -b=block

# Initialize the contract
echo "Initializing contract..."
echo $KEYRING_PASS | desmos --keyring-backend=file tx wasm instantiate 1 "{}" \
  --from $USER1 --label "test-contract" --admin $USER1_ADDRESS --chain-id=testchain -b=block -y
echo "Contract initialized"

# Print contract address
CONTRACT=$(desmos query wasm list-contract-by-code 1 --output json | jq -r '.contracts[-1]')
echo "Contract address $CONTRACT"

# Create a profile for the smart contract to perform some queries
MSG="{\"desmos_messages\":{\"msgs\":[{\"custom\":{\"profiles\":{\"save_profile\":{\"dtag\":\"test_profile\",\"nickname\":\"contract_nick\",\"bio\":\"test_bio\",\"profile_picture\":\"https://i.imgur.com/X2aK5Bq.jpeg\",\"cover_picture\":\"https://i.imgur.com/X2aK5Bq.jpeg\",\"creator\":\"$CONTRACT\"}}}}]}}"
echo "Create smart contract profile"
echo $KEYRING_PASS | desmos tx wasm execute "$CONTRACT" "$MSG" \
  --from $USER1 \
  --chain-id=testchain --keyring-backend=file -b=block -y
