import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_dtag_requests";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_app_links";
import Long from "long";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_chain_links";
import {
  SignatureValueType,
  SingleSignature,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_chain_links";
import { fromBase64 } from "@cosmjs/encoding";
import { PubKey as Secp256k1PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import { Registry } from "@cosmjs/proto-signing";
import { ConverterTestData, runAminoTypesTest } from "../../../utils/testutils";
import {
  AminoConverter,
  bech32AddressToAny,
  secp256k1PubKeyToAny,
  singleSignatureToAny,
} from "./aminoconverter";
import {
  MsgAcceptDTagTransferRequestTypeUrl,
  MsgCancelDTagTransferRequestTypeUrl,
  MsgDeleteProfileTypeUrl,
  MsgLinkApplicationTypeUrl,
  MsgLinkChainAccountTypeUrl,
  MsgRefuseDTagTransferRequestTypeUrl,
  MsgRequestDTagTransferTypeUrl,
  MsgSaveProfileTypeUrl,
  MsgUnlinkApplicationTypeUrl,
  MsgUnlinkChainAccountTypeUrl,
} from "./consts";
import { AminoTypes } from "../../../aminotypes";
import registry from "./registry";

describe("Profiles converter", () => {
  const aminoTypes = new AminoTypes(AminoConverter, new Registry(registry));

  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runAminoTypesTest(aminoTypes, test));
    });
  }

  describe("MsgSaveProfile", () => {
    const testData: ConverterTestData<MsgSaveProfile>[] = [
      {
        name: "empty message",
        typeUrl: MsgSaveProfileTypeUrl,
        msg: MsgSaveProfile.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgSaveProfileTypeUrl,
        msg: {
          dtag: "monk",
          nickname: "nickname",
          bio: "biography",
          profilePicture: "https://shorturl.at/adnX3",
          coverPicture: "https://shorturl.at/cgpyF",
          creator: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
        },
        expectedJsonSerialized:
          '{"bio":"biography","cover_picture":"https://shorturl.at/cgpyF","creator":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns","dtag":"monk","nickname":"nickname","profile_picture":"https://shorturl.at/adnX3"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgDeleteProfile", () => {
    const testData: ConverterTestData<MsgDeleteProfile>[] = [
      {
        name: "empty message",
        typeUrl: MsgDeleteProfileTypeUrl,
        msg: MsgDeleteProfile.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgDeleteProfileTypeUrl,
        msg: {
          creator: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
        },
        expectedJsonSerialized:
          '{"creator":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgRequestDTagTransfer", () => {
    const testData: ConverterTestData<MsgRequestDTagTransfer>[] = [
      {
        name: "empty message",
        typeUrl: MsgRequestDTagTransferTypeUrl,
        msg: MsgRequestDTagTransfer.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgRequestDTagTransferTypeUrl,
        msg: {
          sender: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
          receiver: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
        },
        expectedJsonSerialized:
          '{"receiver":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47","sender":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgAcceptDTagTransferRequest", () => {
    const testData: ConverterTestData<MsgAcceptDTagTransferRequest>[] = [
      {
        name: "empty message",
        typeUrl: MsgAcceptDTagTransferRequestTypeUrl,
        msg: MsgAcceptDTagTransferRequest.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgAcceptDTagTransferRequestTypeUrl,
        msg: {
          newDtag: "dtag",
          sender: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
          receiver: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
        },
        expectedJsonSerialized:
          '{"new_dtag":"dtag","receiver":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns","sender":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgRefuseDTagTransferRequest", () => {
    const testData: ConverterTestData<MsgRefuseDTagTransferRequest>[] = [
      {
        name: "empty message",
        typeUrl: MsgRefuseDTagTransferRequestTypeUrl,
        msg: MsgRefuseDTagTransferRequest.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgRefuseDTagTransferRequestTypeUrl,
        msg: {
          sender: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
          receiver: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
        },
        expectedJsonSerialized:
          '{"receiver":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns","sender":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgCancelDTagTransferRequest", () => {
    const testData: ConverterTestData<MsgCancelDTagTransferRequest>[] = [
      {
        name: "empty message",
        typeUrl: MsgCancelDTagTransferRequestTypeUrl,
        msg: MsgCancelDTagTransferRequest.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgCancelDTagTransferRequestTypeUrl,
        msg: {
          sender: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
          receiver: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
        },
        expectedJsonSerialized:
          '{"receiver":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47","sender":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgLinkApplication", () => {
    const testData: ConverterTestData<MsgLinkApplication>[] = [
      {
        name: "empty message",
        typeUrl: MsgLinkApplicationTypeUrl,
        msg: MsgLinkApplication.fromPartial({}),
        expectedJsonSerialized: '{"link_data":{},"timeout_height":{}}',
      },
      {
        name: "complete message",
        typeUrl: MsgLinkApplicationTypeUrl,
        msg: {
          linkData: {
            application: "twitter",
            username: "twitteruser",
          },
          callData:
            "7B22757365726E616D65223A22526963636172646F4D222C22676973745F6964223A223732306530303732333930613930316262383065353966643630643766646564227D",
          sender: "cosmos10nsdxxdvy9qka3zv0lzw8z9cnu6kanld8jh773",
          sourcePort: "ibc-profiles",
          sourceChannel: "channel-0",
          timeoutHeight: {
            revisionHeight: Long.fromNumber(1000, true),
            revisionNumber: Long.fromNumber(10, true),
          },
          timeoutTimestamp: Long.fromNumber(15, true),
        },
        expectedJsonSerialized:
          '{"call_data":"7B22757365726E616D65223A22526963636172646F4D222C22676973745F6964223A223732306530303732333930613930316262383065353966643630643766646564227D","link_data":{"application":"twitter","username":"twitteruser"},"sender":"cosmos10nsdxxdvy9qka3zv0lzw8z9cnu6kanld8jh773","source_channel":"channel-0","source_port":"ibc-profiles","timeout_height":{"revision_height":"1000","revision_number":"10"},"timeout_timestamp":"15"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgUnlinkApplication", () => {
    const testData: ConverterTestData<MsgUnlinkApplication>[] = [
      {
        name: "empty message",
        typeUrl: MsgUnlinkApplicationTypeUrl,
        msg: MsgUnlinkApplication.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgUnlinkApplicationTypeUrl,
        msg: {
          application: "twitter",
          username: "twitteruser",
          signer: "cosmos10nsdxxdvy9qka3zv0lzw8z9cnu6kanld8jh773",
        },
        expectedJsonSerialized:
          '{"application":"twitter","signer":"cosmos10nsdxxdvy9qka3zv0lzw8z9cnu6kanld8jh773","username":"twitteruser"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgLinkChainAccount", () => {
    const testData: ConverterTestData<MsgLinkChainAccount>[] = [
      {
        name: "empty message",
        typeUrl: MsgLinkChainAccountTypeUrl,
        msg: {
          chainAddress: bech32AddressToAny({
            value: "",
            prefix: "",
          }),
          proof: {
            pubKey: secp256k1PubKeyToAny({
              type: "tendermint/PubKeySecp256k1",
              value: "",
            }),
            signature: singleSignatureToAny({
              signature: Uint8Array.of(),
              valueType: 0,
            }),
            plainText: "",
          },
          chainConfig: {
            name: "",
          },
          signer: "",
        },
        expectedJsonSerialized:
          '{"chain_address":{"type":"desmos/Bech32Address","value":{}},"chain_config":{},"proof":{"pub_key":{"type":"tendermint/PubKeySecp256k1","value":null},"signature":{"type":"desmos/SingleSignature","value":{}}}}',
      },
      {
        name: "complete message",
        typeUrl: MsgLinkChainAccountTypeUrl,
        msg: {
          chainAddress: bech32AddressToAny({
            value: "cosmos1xmquc944hzu6n6qtljcexkuhhz76mucxtgm5x0",
            prefix: "cosmos",
          }),
          proof: {
            pubKey: {
              typeUrl: "/cosmos.crypto.secp256k1.PubKey",
              value: Secp256k1PubKey.encode(
                Secp256k1PubKey.fromPartial({
                  key: fromBase64(
                    "AlM85nGILhEbOqowhCRWFnu6YJvi2iN6H6xG/rAZ3obK",
                  ),
                }),
              ).finish(),
            },
            signature: {
              typeUrl: "/desmos.profiles.v3.SingleSignature",
              value: SingleSignature.encode(
                SingleSignature.fromPartial({
                  signature: fromBase64(
                    "IiZnnZy0WzY8wlAcibijJkZIRJ2mY6HYPn3ANrs+mhh4N0K0VpTYBapxt87EmjqYSndPIYKcwX7D9Mi47whStA==",
                  ),
                  valueType:
                    SignatureValueType.SIGNATURE_VALUE_TYPE_COSMOS_AMINO,
                }),
              ).finish(),
            },
            plainText: "74657874",
          },
          chainConfig: {
            name: "cosmos",
          },
          signer: "cosmos1u9hgsqfpe3snftr7p7fsyja3wtlmj2sgf2w9yl",
        },
        expectedJsonSerialized:
          '{"chain_address":{"type":"desmos/Bech32Address","value":{"prefix":"cosmos","value":"cosmos1xmquc944hzu6n6qtljcexkuhhz76mucxtgm5x0"}},"chain_config":{"name":"cosmos"},"proof":{"plain_text":"74657874","pub_key":{"type":"tendermint/PubKeySecp256k1","value":"AlM85nGILhEbOqowhCRWFnu6YJvi2iN6H6xG/rAZ3obK"},"signature":{"type":"desmos/SingleSignature","value":{"signature":"IiZnnZy0WzY8wlAcibijJkZIRJ2mY6HYPn3ANrs+mhh4N0K0VpTYBapxt87EmjqYSndPIYKcwX7D9Mi47whStA==","value_type":3}}},"signer":"cosmos1u9hgsqfpe3snftr7p7fsyja3wtlmj2sgf2w9yl"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });

  describe("MsgUnlinkChainAccount", () => {
    const testData: ConverterTestData<MsgUnlinkChainAccount>[] = [
      {
        name: "empty message",
        typeUrl: MsgUnlinkChainAccountTypeUrl,
        msg: MsgUnlinkChainAccount.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgUnlinkChainAccountTypeUrl,
        msg: {
          owner: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
          chainName: "cosmos",
          target: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
        },
        expectedJsonSerialized:
          '{"chain_name":"cosmos","owner":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns","target":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47"}',
        testToProtobuf: true,
      },
    ];
    executeTests(testData);
  });
});
