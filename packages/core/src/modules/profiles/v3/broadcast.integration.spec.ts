import { MsgSaveProfile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import {
  Bech32Address,
  ChainConfig,
  Proof,
  SignatureValueType,
  SingleSignature,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_chain_links";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";
import { toHex } from "@cosmjs/encoding";
import { MsgLinkChainAccount } from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_chain_links";
import { OfflineSignerAdapter, SigningMode } from "../../../signers";
import {
  getDirectSignerAndClient,
  TEST_CHAIN_URL,
  testUser2,
} from "../../../testutils";
import { DesmosClient } from "../../../desmosclient";
import {
  MsgLinkChainAccountEncodeObject,
  MsgSaveProfileEncodeObject,
} from "./encodeobjects";
import { bech32AddressToAny, singleSignatureToAny } from "./aminoconverter";
import { getSignatureBytes, getSignedBytes } from "../../../signatureresult";

describe("Broadcast desmos.profiles.v3 messages", () => {
  jest.setTimeout(60 * 1000);

  it("MsgLinkChainAccount", async () => {
    // Setup the client associated to the external wallet
    const externalSigner = await OfflineSignerAdapter.fromMnemonic(
      SigningMode.AMINO,
      testUser2.mnemonic,
    );
    const externalClient = await DesmosClient.connectWithSigner(
      TEST_CHAIN_URL,
      externalSigner,
    );
    const externalAccounts = await externalSigner.getAccounts();
    const externalAddress = externalAccounts[0].address;

    // Setup the client associated to the Desmos profile
    const [profileSigner, profileClient] = await getDirectSignerAndClient();
    const profileAccounts = await profileSigner.getAccounts();
    const profileAddress = profileAccounts[0].address;

    // Create a profile (required to simulate the transaction properly)
    const msgSaveProfile: MsgSaveProfileEncodeObject = {
      typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
      value: MsgSaveProfile.fromPartial({
        dtag: "JohnDoe",
        creator: profileAddress,
      }),
    };
    const saveProfileResult = await profileClient.signAndBroadcast(
      profileAddress,
      [msgSaveProfile],
      "auto",
    );
    expect(saveProfileResult.code).toBe(0);

    // Sign a dummy tx that includes the Desmos profile address within its memo, using the external account
    const dummySignatureResult = await externalClient.signTx(
      externalAddress,
      [],
      { fee: { amount: [], gas: "0" }, memo: profileAddress },
    );

    // Build the chain config
    const chainConfig: ChainConfig = {
      name: "desmos",
    };

    // Build the address data
    const chainAddress: Any = bech32AddressToAny(
      Bech32Address.fromPartial({
        value: externalAddress,
        prefix: "desmos",
      }),
    );

    // Build the signature
    const signature: SingleSignature = SingleSignature.fromPartial({
      valueType: SignatureValueType.SIGNATURE_VALUE_TYPE_COSMOS_AMINO, // Proper signature type
      signature: getSignatureBytes(dummySignatureResult),
    });

    // Build the proof
    const proof: Proof = Proof.fromPartial({
      pubKey: dummySignatureResult.pubKey,
      signature: singleSignatureToAny(signature),
      plainText: toHex(getSignedBytes(dummySignatureResult)),
    });

    // Create the message to link the chain account
    const msg: MsgLinkChainAccountEncodeObject = {
      typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount",
      value: MsgLinkChainAccount.fromPartial({
        chainConfig,
        chainAddress,
        proof,
        signer: profileAddress,
      }),
    };

    const result = await profileClient.signTx(profileAddress, [msg]);
    expect(result.txRaw.signatures).toHaveLength(1);
  });
});
