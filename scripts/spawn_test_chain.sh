#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
DESMOS_HOME="$SCRIPT_DIR/.desmos"
KEYRING_PASS=pass1234
# User 1 informations
USER1=user1
USER11=user11
USER1_ADDRESS=desmos1nm6kh6jwqmsezwtnmgdd4w4tzyk9f8gvqu5en0
USER1_MNEMONIC="hour harbor fame unaware bunker junk garment decrease federal vicious island smile warrior fame right suit portion skate analyst multiply magnet medal fresh sweet"
# User 2 informations
USER2=user2
USER2_ADDRESS=desmos1c7ms9zhtgwmv5jy6ztj2vq0jj67zenw3gdl2gr
USER2_MNEMONIC="shine velvet envelope baby bicycle slot betray water mask cake rule useless absorb lens enable fork lake make depart slogan kiwi iron decorate relief"

# Background flags, will be set to true if the user pass the -b argument.
BACKGROUND=false

while getopts "b" arg; do
  case $arg in
    b)
      BACKGROUND=true
      ;;
  esac
done

desmos() {
	"$SCRIPT_DIR/desmos" --home="$DESMOS_HOME" "$@"
}

rm -r -f "$DESMOS_HOME"
desmos tendermint unsafe-reset-all
desmos init testchain --chain-id=testchain

# Add a default reason to the reports module params
jq '.app_state.reports.params.standard_reasons[0] |= . + {"id":"1","title":"Spam","description":"Spam user or content"}' "$DESMOS_HOME/config/genesis.json" > "$DESMOS_HOME/config/genesis-patched.json"
mv "$DESMOS_HOME/config/genesis-patched.json" "$DESMOS_HOME/config/genesis.json"

# Add a proposal to the genesis file
jq '.app_state.gov.proposals += [{"id": "1", "messages": [], "status": 2, "totalDeposit": [], "metadata": "", "submit_time": "2000-06-26T19:03:16.004Z", "voting_end_time": "3000-06-26T20:03:16.004Z", "voting_start_time": "2000-06-26T19:04:16.004Z"}]' "$DESMOS_HOME/config/genesis.json" > "$DESMOS_HOME/config/genesis-patched.json"
mv "$DESMOS_HOME/config/genesis-patched.json" "$DESMOS_HOME/config/genesis.json"

# Update gov module starting proposal id
jq '.app_state.gov.starting_proposal_id = "2"' "$DESMOS_HOME/config/genesis.json" > "$DESMOS_HOME/config/genesis-patched.json"
mv "$DESMOS_HOME/config/genesis-patched.json" "$DESMOS_HOME/config/genesis.json"

# Update tokenfactory module
jq '.app_state.tokenfactory.params = { "denom_creation_fee": [{"denom": "stake", "amount": "1"}] }' "$DESMOS_HOME/config/genesis.json" > "$DESMOS_HOME/config/genesis-patched.json"
mv "$DESMOS_HOME/config/genesis-patched.json" "$DESMOS_HOME/config/genesis.json"

# Set block time to 500 milliseconds
sed -i -e 's/timeout_commit = "5s"/timeout_commit = "500ms"/g' "$DESMOS_HOME/config/config.toml"

(echo "$USER1_MNEMONIC"; echo $KEYRING_PASS; echo $KEYRING_PASS) | desmos keys add "$USER1" --recover --keyring-backend=test
(echo "$USER1_MNEMONIC"; echo $KEYRING_PASS; echo $KEYRING_PASS) | desmos keys add "$USER11" --recover --keyring-backend=test --account 1
(echo "$USER2_MNEMONIC"; echo $KEYRING_PASS; echo $KEYRING_PASS) | desmos keys add "$USER2" --recover --keyring-backend=test
echo $KEYRING_PASS | desmos add-genesis-account $USER1 200000000000000stake --keyring-backend=test
echo $KEYRING_PASS | desmos add-genesis-account $USER11 200000000000000stake --keyring-backend=test
echo $KEYRING_PASS | desmos add-genesis-account $USER2 200000000000000stake --keyring-backend=test
echo $KEYRING_PASS | desmos gentx $USER1 100000000000stake --amount 100000000000stake --chain-id=testchain --keyring-backend=test
desmos collect-gentxs


if [ $BACKGROUND = true ] ; then
  desmos start &> "$SCRIPT_DIR/desmos.log" &
else
  desmos start
fi

