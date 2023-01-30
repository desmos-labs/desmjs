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
import { ConverterTestData, runConverterTest } from "../testutils";
import createProfilesConverters, {
  bech32AddressToAny,
  secp256k1PubKeyToAny,
  singleSignatureToAny,
} from "./converter";
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
} from "../../const";

describe("Profiles converter", () => {
  const converters = createProfilesConverters();

  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runConverterTest(converters, test));
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
            revisionHeight: Long.fromNumber(1000),
            revisionNumber: Long.fromNumber(10),
          },
          timeoutTimestamp: Long.fromNumber(15),
        },
        expectedJsonSerialized:
          '{"call_data":"7B22757365726E616D65223A22526963636172646F4D222C22676973745F6964223A223732306530303732333930613930316262383065353966643630643766646564227D","link_data":{"application":"twitter","username":"twitteruser"},"sender":"cosmos10nsdxxdvy9qka3zv0lzw8z9cnu6kanld8jh773","source_channel":"channel-0","source_port":"ibc-profiles","timeout_height":{"revision_height":"1000","revision_number":"10"},"timeout_timestamp":"15"}',
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
              value: Uint8Array.of(
                10,
                33,
                3,
                228,
                113,
                58,
                171,
                210,
                209,
                22,
                29,
                23,
                243,
                84,
                223,
                20,
                168,
                149,
                249,
                159,
                101,
                206,
                216,
                80,
                171,
                184,
                126,
                242,
                75,
                110,
                112,
                130,
                64,
                22,
                55
              ),
            },
            signature: {
              typeUrl: "/desmos.profiles.v3.SingleSignature",
              value: Uint8Array.of(
                8,
                1,
                18,
                64,
                173,
                17,
                42,
                187,
                48,
                229,
                36,
                12,
                123,
                157,
                33,
                180,
                204,
                84,
                33,
                215,
                108,
                250,
                223,
                205,
                89,
                119,
                204,
                162,
                98,
                82,
                59,
                95,
                91,
                199,
                89,
                69,
                125,
                74,
                166,
                213,
                193,
                235,
                98,
                35,
                219,
                16,
                75,
                71,
                170,
                31,
                34,
                36,
                104,
                190,
                142,
                181,
                187,
                39,
                98,
                185,
                113,
                98,
                42,
                197,
                185,
                99,
                81,
                181
              ),
            },
            plainText: "74657874",
          },
          chainConfig: {
            name: "cosmos",
          },
          signer: "cosmos1u9hgsqfpe3snftr7p7fsyja3wtlmj2sgf2w9yl",
        },
        expectedJsonSerialized:
          '{"chain_address":{"type":"desmos/Bech32Address","value":{"prefix":"cosmos","value":"cosmos1xmquc944hzu6n6qtljcexkuhhz76mucxtgm5x0"}},"chain_config":{"name":"cosmos"},"proof":{"plain_text":"74657874","pub_key":{"type":"tendermint/PubKeySecp256k1","value":"A+RxOqvS0RYdF/NU3xSolfmfZc7YUKu4fvJLbnCCQBY3"},"signature":{"type":"desmos/SingleSignature","value":{"signature":"rREquzDlJAx7nSG0zFQh12z6381Zd8yiYlI7X1vHWUV9SqbVwetiI9sQS0eqHyIkaL6OtbsnYrlxYirFuWNRtQ==","value_type":1}}},"signer":"cosmos1u9hgsqfpe3snftr7p7fsyja3wtlmj2sgf2w9yl"}',
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
      },
    ];
    executeTests(testData);
  });
});
