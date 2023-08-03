import { AminoConverters } from "@cosmjs/stargate";
import {
  AllowedMsgAllowance,
  BasicAllowance,
  PeriodicAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
import { Any } from "cosmjs-types/google/protobuf/any";
import { AminoMsg } from "@cosmjs/amino";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import {
  AminoAllowedMsgAllowance,
  AminoBasicAllowance,
  AminoMsgGrantAllowance,
  AminoMsgRevokeAllowance,
  AminoPeriodicAllowance,
} from "./aminomessages";
import {
  AllowedMsgAllowanceAminoType,
  AllowedMsgAllowanceTypeUrl,
  BasicAllowanceAminoType,
  BasicAllowanceTypeUrl,
  MsgGrantAllowanceAminoType,
  MsgGrantAllowanceTypeUrl,
  MsgRevokeAllowanceAminoType,
  MsgRevokeAllowanceTypeUrl,
  PeriodicAllowanceAminoType,
  PeriodicAllowanceTypeUrl,
} from "./consts";

function basicAllowanceToAmino(value: BasicAllowance): AminoBasicAllowance {
  return {
    type: BasicAllowanceAminoType,
    value: {
      spend_limit: value.spendLimit,
      expiration: value.expiration,
    },
  };
}

function basicAllowanceFromAmino(
  value: AminoBasicAllowance["value"],
): BasicAllowance {
  return BasicAllowance.fromPartial({
    spendLimit: value.spend_limit,
    expiration: value.expiration,
  });
}

function periodicAllowanceToAmino(
  value: PeriodicAllowance,
): AminoPeriodicAllowance {
  return {
    type: PeriodicAllowanceAminoType,
    value: {
      basic: value.basic ? basicAllowanceToAmino(value.basic) : undefined,
      period: value.period,
      period_spend_limit: value.periodSpendLimit,
      period_can_spend: value.periodCanSpend,
      period_reset: value.periodReset,
    },
  };
}

function periodicAllowanceFromAmino(
  value: AminoPeriodicAllowance["value"],
): PeriodicAllowance {
  return PeriodicAllowance.fromPartial({
    basic: value.basic ? basicAllowanceFromAmino(value.basic.value) : undefined,
    period: value.period,
    periodSpendLimit: value.period_spend_limit,
    periodCanSpend: value.period_can_spend,
    periodReset: value.period_reset,
  });
}

function allowedMsgAllowanceToAmino(
  value: AllowedMsgAllowance,
): AminoAllowedMsgAllowance {
  return {
    type: AllowedMsgAllowanceAminoType,
    value: {
      allowance: value.allowance
        ? allowanceToAmino(value.allowance)
        : undefined,
      allowed_messages: value.allowedMessages,
    },
  };
}

function allowedMsgAllowanceFromAmino(
  value: AminoAllowedMsgAllowance["value"],
): AllowedMsgAllowance {
  return AllowedMsgAllowance.fromPartial({
    allowance: value.allowance
      ? allowanceFromAmino(value.allowance)
      : undefined,
    allowedMessages: value.allowed_messages,
  });
}

function allowanceToAmino(any: Any): AminoMsg {
  switch (any.typeUrl) {
    case BasicAllowanceTypeUrl:
      return basicAllowanceToAmino(BasicAllowance.decode(any.value));
    case PeriodicAllowanceTypeUrl:
      return periodicAllowanceToAmino(PeriodicAllowance.decode(any.value));
    case AllowedMsgAllowanceTypeUrl:
      return allowedMsgAllowanceToAmino(AllowedMsgAllowance.decode(any.value));

    default:
      throw new Error(`Unsupported allowance type: ${any.typeUrl}`);
  }
}

function allowanceFromAmino(allowance: AminoMsg): Any {
  switch (allowance.type) {
    case BasicAllowanceAminoType:
      return Any.fromPartial({
        typeUrl: BasicAllowanceTypeUrl,
        value: BasicAllowance.encode(
          basicAllowanceFromAmino(allowance.value),
        ).finish(),
      });

    case PeriodicAllowanceAminoType:
      return Any.fromPartial({
        typeUrl: PeriodicAllowanceTypeUrl,
        value: PeriodicAllowance.encode(
          periodicAllowanceFromAmino(allowance.value),
        ).finish(),
      });

    case AllowedMsgAllowanceAminoType:
      return Any.fromPartial({
        typeUrl: AllowedMsgAllowanceTypeUrl,
        value: PeriodicAllowance.encode(
          periodicAllowanceFromAmino(allowance.value),
        ).finish(),
      });

    default:
      throw new Error(`Unsupported Amino allowance type: ${allowance.type}`);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const AminoConverter: AminoConverters = {
  [BasicAllowanceTypeUrl]: {
    aminoType: BasicAllowanceAminoType,
    toAmino: (value: BasicAllowance): AminoBasicAllowance["value"] =>
      basicAllowanceToAmino(value).value,
    fromAmino: (value: AminoBasicAllowance["value"]) =>
      basicAllowanceFromAmino(value),
  },
  [PeriodicAllowanceTypeUrl]: {
    aminoType: PeriodicAllowanceAminoType,
    toAmino: (value: PeriodicAllowance): AminoPeriodicAllowance["value"] =>
      periodicAllowanceToAmino(value).value,
    fromAmino: periodicAllowanceFromAmino,
  },
  [AllowedMsgAllowanceTypeUrl]: {
    aminoType: AllowedMsgAllowanceAminoType,
    toAmino: (value: AllowedMsgAllowance): AminoAllowedMsgAllowance["value"] =>
      allowedMsgAllowanceToAmino(value).value,
    fromAmino: (
      value: AminoAllowedMsgAllowance["value"],
    ): AllowedMsgAllowance => allowedMsgAllowanceFromAmino(value),
  },
  [MsgGrantAllowanceTypeUrl]: {
    aminoType: MsgGrantAllowanceAminoType,
    toAmino: (msg: MsgGrantAllowance): AminoMsgGrantAllowance["value"] => ({
      allowance: msg.allowance ? allowanceToAmino(msg.allowance) : undefined,
      granter: msg.granter,
      grantee: msg.grantee,
    }),
    fromAmino: (msg: AminoMsgGrantAllowance["value"]): MsgGrantAllowance =>
      MsgGrantAllowance.fromPartial({
        granter: msg.granter,
        grantee: msg.grantee,
        allowance: msg.allowance
          ? allowanceFromAmino(msg.allowance)
          : undefined,
      }),
  },
  [MsgRevokeAllowanceTypeUrl]: {
    aminoType: MsgRevokeAllowanceAminoType,
    toAmino: (msg: MsgRevokeAllowance): AminoMsgRevokeAllowance["value"] => ({
      granter: msg.granter,
      grantee: msg.grantee,
    }),
    fromAmino: (msg: AminoMsgRevokeAllowance["value"]): MsgRevokeAllowance =>
      MsgRevokeAllowance.fromPartial({
        granter: msg.granter,
        grantee: msg.grantee,
      }),
  },
};
