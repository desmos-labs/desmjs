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
  AminoPeriodicAllowance,
  AminoMsgRevokeAllowance,
} from "./messages";

function basicAllowanceToAmino(value: BasicAllowance): AminoBasicAllowance {
  return {
    type: "cosmos-sdk/BasicAllowance",
    value: {
      spend_limit: value.spendLimit,
      expiration: value.expiration,
    },
  };
}

function basicAllowanceFromAmino(
  value: AminoBasicAllowance["value"]
): BasicAllowance {
  return BasicAllowance.fromPartial({
    spendLimit: value.spend_limit,
    expiration: value.expiration,
  });
}

function periodicAllowanceToAmino(
  value: PeriodicAllowance
): AminoPeriodicAllowance {
  return {
    type: "cosmos-sdk/AminoPeriodicAllowance",
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
  value: AminoPeriodicAllowance["value"]
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
  value: AllowedMsgAllowance
): AminoAllowedMsgAllowance {
  return {
    type: "cosmos-sdk/AminoAllowedMsgAllowance",
    value: {
      allowance: value.allowance
        ? allowanceToAmino(value.allowance)
        : undefined,
      allowed_messages: value.allowedMessages,
    },
  };
}

function allowedMsgAllowanceFromAmino(
  value: AminoAllowedMsgAllowance["value"]
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
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return basicAllowanceToAmino(BasicAllowance.decode(any.value));
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return periodicAllowanceToAmino(PeriodicAllowance.decode(any.value));
    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return allowedMsgAllowanceToAmino(AllowedMsgAllowance.decode(any.value));

    default:
      throw new Error(`Unsupported allowance type: ${any.typeUrl}`);
  }
}

function allowanceFromAmino(allowance: AminoMsg): Any {
  switch (allowance.type) {
    case "cosmos-sdk/BasicAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        value: BasicAllowance.encode(
          basicAllowanceFromAmino(allowance.value)
        ).finish(),
      });

    case "cosmos-sdk/PeriodicAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        value: PeriodicAllowance.encode(
          periodicAllowanceFromAmino(allowance.value)
        ).finish(),
      });

    case "cosmos-sdk/AllowedMsgAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        value: PeriodicAllowance.encode(
          periodicAllowanceFromAmino(allowance.value)
        ).finish(),
      });

    default:
      throw new Error(`Unsupported Amino allowance type: ${allowance.type}`);
  }
}

export function createFeegrantConverters(): AminoConverters {
  return {
    "/cosmos.feegrant.v1beta1.BasicAllowance": {
      aminoType: "cosmos-sdk/BasicAllowance",
      toAmino: (value: BasicAllowance): AminoBasicAllowance["value"] =>
        basicAllowanceToAmino(value).value,
      fromAmino: (value: AminoBasicAllowance["value"]) =>
        basicAllowanceFromAmino(value),
    },
    "/cosmos.feegrant.v1beta1.PeriodicAllowance": {
      aminoType: "cosmos-sdk/PeriodicAllowance",
      toAmino: (value: PeriodicAllowance): AminoPeriodicAllowance["value"] =>
        periodicAllowanceToAmino(value).value,
      fromAmino: periodicAllowanceFromAmino,
    },
    "/cosmos.feegrant.v1beta1.AllowedMsgAllowance": {
      aminoType: "cosmos-sdk/AllowedMsgAllowance",
      toAmino: (
        value: AllowedMsgAllowance
      ): AminoAllowedMsgAllowance["value"] =>
        allowedMsgAllowanceToAmino(value).value,
      fromAmino: (
        value: AminoAllowedMsgAllowance["value"]
      ): AllowedMsgAllowance => allowedMsgAllowanceFromAmino(value),
    },
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
      aminoType: "cosmos-sdk/MsgGrantAllowance",
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
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
      aminoType: "cosmos-sdk/MsgRevokeAllowance",
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
}

export default createFeegrantConverters;
