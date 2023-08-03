import { SignClientTypes } from "@walletconnect/types";
import { AuthInfo, TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Profiles } from "@desmoslabs/desmjs";
import { MsgSaveProfile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import { AminoMsg, Coin, StdFee } from "@cosmjs/amino";
import Long from "long";
import {
  CosmosRPCMethods,
  SignAminoRpcRequestParams,
  SignDirectRpcRequestParams,
  WalletConnectSignAminoRequest,
  WalletConnectSignDirectRequest,
} from "./types";
import { decodeSessionRequest } from "./decode";
import {
  encodeAminoSignRpcRequestParams,
  encodeDirectSignRpcRequestParams,
} from "./encode";

type RequestEvent = SignClientTypes.EventArguments["session_request"];

const TEST_SIGNER = "desmos...";
const TEST_MEMO = "test-memo";
const TEST_ACCOUNT_NUMBER = Long.fromNumber(5);
const TEST_CHAIN_ID = "test-chain";
const TEST_FEE_AMOUNT: Coin[] = [{ denom: "udsm", amount: "1000" }];
const TEST_GAS = "2000";
const TEST_STD_FEE: StdFee = {
  amount: TEST_FEE_AMOUNT,
  gas: TEST_GAS,
};

function mockEventRequest(method: string, params?: any): RequestEvent {
  return {
    id: 0,
    topic: "test-topic",
    params: {
      chainId: "",
      request: {
        method,
        params: [params],
      },
    },
  };
}

function mockDirectRequestArguments(
  messages: { typeUrl: string; value: Uint8Array }[],
): SignDirectRpcRequestParams {
  return encodeDirectSignRpcRequestParams(TEST_SIGNER, {
    bodyBytes: TxBody.encode(
      TxBody.fromPartial({
        memo: TEST_MEMO,
        messages,
      }),
    ).finish(),
    authInfoBytes: AuthInfo.encode(
      AuthInfo.fromPartial({
        fee: {
          amount: TEST_FEE_AMOUNT,
          gasLimit: TEST_GAS,
        },
      }),
    ).finish(),
    chainId: TEST_CHAIN_ID,
    accountNumber: TEST_ACCOUNT_NUMBER,
  });
}

function mockAminoRequestArguments(
  msgs: AminoMsg[],
): SignAminoRpcRequestParams {
  return encodeAminoSignRpcRequestParams(TEST_SIGNER, {
    fee: TEST_STD_FEE,
    msgs,
    memo: TEST_MEMO,
    sequence: "1",
    chain_id: TEST_CHAIN_ID,
    account_number: TEST_ACCOUNT_NUMBER.toString(),
  });
}

describe("WalletConnect decode", () => {
  it("decode cosmos_getAccounts successfully", () => {
    const requestEvent = mockEventRequest(CosmosRPCMethods.GetAccounts);
    const decodeResult = decodeSessionRequest(requestEvent);

    expect(decodeResult.isOk()).toBe(true);
    const decodedValue = decodeResult.value;
    expect(decodedValue.method).toBe(CosmosRPCMethods.GetAccounts);
    expect(decodedValue.id).toBe(requestEvent.id);
    expect(decodedValue.topic).toBe(requestEvent.topic);
  });

  it("decode cosmos_signDirect successfully", () => {
    const msgSaveProfile = MsgSaveProfile.fromPartial({
      bio: "test-bio",
      dtag: "test-dtag",
      creator: "desmos",
      nickname: "nickname",
      coverPicture: "cover picture",
      profilePicture: "profile picture",
    });

    const requestEvent = mockEventRequest(
      CosmosRPCMethods.SignDirect,
      mockDirectRequestArguments([
        {
          typeUrl: Profiles.v3.MsgSaveProfileTypeUrl,
          value: MsgSaveProfile.encode(msgSaveProfile).finish(),
        },
      ]),
    );
    const decodeResult = decodeSessionRequest(requestEvent);

    expect(decodeResult.isOk()).toBe(true);
    const decodedValue = <WalletConnectSignDirectRequest>decodeResult.value;
    expect(decodedValue.method).toBe(CosmosRPCMethods.SignDirect);
    expect(decodedValue.id).toBe(requestEvent.id);
    expect(decodedValue.topic).toBe(requestEvent.topic);
    expect(decodedValue.memo).toBe(TEST_MEMO);
    expect(decodedValue.fee).toEqual(TEST_STD_FEE);
    expect(decodedValue.msgs).toEqual([
      {
        typeUrl: Profiles.v3.MsgSaveProfileTypeUrl,
        value: msgSaveProfile,
      } as Profiles.v3.MsgSaveProfileEncodeObject,
    ]);
  });

  it("decode cosmos_signAmino successfully", () => {
    const msgSaveProfile: Profiles.v3.AminoMsgSaveProfile = {
      type: "desmos/MsgSaveProfile",
      value: {
        bio: "test-bio",
        dtag: "test-dtag",
        creator: "desmos",
        nickname: "nickname",
        cover_picture: "cover picture",
        profile_picture: "profile picture",
      },
    };

    const requestEvent = mockEventRequest(
      CosmosRPCMethods.SignAmino,
      mockAminoRequestArguments([msgSaveProfile]),
    );
    const decodeResult = decodeSessionRequest(requestEvent);

    expect(decodeResult.isOk()).toBe(true);
    const decodedValue = <WalletConnectSignAminoRequest>decodeResult.value;
    expect(decodedValue.method).toBe(CosmosRPCMethods.SignAmino);
    expect(decodedValue.id).toBe(requestEvent.id);
    expect(decodedValue.topic).toBe(requestEvent.topic);
    expect(decodedValue.memo).toBe(TEST_MEMO);
    expect(decodedValue.fee).toEqual(TEST_STD_FEE);
    expect(decodedValue.msgs).toEqual([
      {
        typeUrl: Profiles.v3.MsgSaveProfileTypeUrl,
        value: {
          bio: msgSaveProfile.value.bio,
          dtag: msgSaveProfile.value.dtag,
          creator: msgSaveProfile.value.creator,
          nickname: msgSaveProfile.value.nickname,
          coverPicture: msgSaveProfile.value.cover_picture,
          profilePicture: msgSaveProfile.value.profile_picture,
        },
      } as Profiles.v3.MsgSaveProfileEncodeObject,
    ]);
  });
});
