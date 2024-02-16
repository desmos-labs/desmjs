import {
  AllowedMsgAllowance,
  BasicAllowance,
  PeriodicAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { toTimestamp } from "cosmjs-types/helpers";
import { coin } from "@cosmjs/amino";
import {
  AllowedMsgAllowanceAminoType,
  AllowedMsgAllowanceTypeUrl,
  BasicAllowanceAminoType,
  BasicAllowanceTypeUrl,
  MsgGrantAllowanceTypeUrl,
  MsgRevokeAllowanceTypeUrl,
  PeriodicAllowanceTypeUrl,
} from "./consts";
import { AminoConverter } from "./aminoconverter";
import {
  AminoAllowedMsgAllowance,
  AminoBasicAllowance,
  AminoMsgGrantAllowance,
  AminoMsgRevokeAllowance,
  AminoPeriodicAllowance,
} from "./aminomessages";
import { serializeDate, serializeTimestamp } from "../../../utils/aminoutils";

describe("Feegrant.v1beta1.AminoConverter", () => {
  it("BasicAllowance -> AminoBasicAllowance", () => {
    const expiration = new Date();
    const allowance = BasicAllowance.fromPartial({
      spendLimit: [coin(1000, "stake")],
      expiration: toTimestamp(expiration),
    });
    const converter = AminoConverter[BasicAllowanceTypeUrl];
    const aminoBasicAllowance = converter.toAmino(
      allowance,
    ) as AminoBasicAllowance["value"];

    expect(aminoBasicAllowance.expiration).toBeDefined();
    expect(aminoBasicAllowance.spend_limit).toBeDefined();

    expect(aminoBasicAllowance.expiration).toBe(serializeDate(expiration));
    expect(aminoBasicAllowance.spend_limit).toEqual(allowance.spendLimit);
  });

  it("AllowedMsgAllowance -> AminoAllowedMsgAllowance", () => {
    const expiration = new Date();
    const allowance = AllowedMsgAllowance.fromPartial({
      allowance: {
        typeUrl: BasicAllowanceTypeUrl,
        value: BasicAllowance.encode(
          BasicAllowance.fromPartial({
            expiration: toTimestamp(expiration),
          }),
        ).finish(),
      },
      allowedMessages: ["cosmos.bank.v1beta1.MsgSend"],
    });

    const converter = AminoConverter[AllowedMsgAllowanceTypeUrl];
    const result = converter.toAmino(
      allowance,
    ) as AminoAllowedMsgAllowance["value"];

    // Check that we have the correct allowance type
    expect(result.allowance?.type).toEqual(BasicAllowanceAminoType);

    // Check that the allowance is defined.
    const aminoBasicAllowance = result.allowance
      ?.value as AminoBasicAllowance["value"];
    expect(aminoBasicAllowance).toBeDefined();

    // Check the expiration
    expect(aminoBasicAllowance.expiration).toBeDefined();
    expect(aminoBasicAllowance.expiration).toEqual(
      serializeTimestamp(toTimestamp(expiration)),
    );

    // Check the allowed_messages
    expect(result.allowed_messages).toEqual(["cosmos.bank.v1beta1.MsgSend"]);

    // Check that reconverts to the original message.
    const convertedToDirect = converter.fromAmino(result);
    expect(convertedToDirect).toEqual(allowance);
  });

  it("MsgGrantAllalowance <-> AminoMsgGrantAllowance", () => {
    const grantee = "grantee";
    const granter = "granter";
    const expiration = new Date();

    const msg = MsgGrantAllowance.fromPartial({
      granter,
      grantee,
      allowance: {
        typeUrl: AllowedMsgAllowanceTypeUrl,
        value: AllowedMsgAllowance.encode(
          AllowedMsgAllowance.fromPartial({
            allowance: {
              typeUrl: BasicAllowanceTypeUrl,
              value: BasicAllowance.encode(
                BasicAllowance.fromPartial({
                  expiration: toTimestamp(expiration),
                }),
              ).finish(),
            },
            allowedMessages: ["cosmos.bank.v1beta1.MsgSend"],
          }),
        ).finish(),
      },
    });
    const converter = AminoConverter[MsgGrantAllowanceTypeUrl];
    const result = converter.toAmino(msg) as AminoMsgGrantAllowance["value"];

    expect(result.granter).toEqual(granter);
    expect(result.grantee).toEqual(grantee);

    // Check the nested allowance type
    expect(result.allowance?.type).toEqual(AllowedMsgAllowanceAminoType);
    const allowedMsgAllowance = result.allowance
      ?.value as AminoAllowedMsgAllowance["value"];
    // Check that the messages are correct.
    expect(allowedMsgAllowance.allowed_messages).toEqual([
      "cosmos.bank.v1beta1.MsgSend",
    ]);

    // Check the allowance inside the AllowedMsgAllowance
    expect(allowedMsgAllowance.allowance?.type).toEqual(
      BasicAllowanceAminoType,
    );
    expect(allowedMsgAllowance.allowance?.value.expiration).toEqual(
      serializeTimestamp(toTimestamp(expiration)),
    );

    // Amino to direct
    const direct = converter.fromAmino(result);
    expect(direct).toEqual(msg);
  });

  it("PeriodicAllowance -> AminoPeriodicAllowance", () => {
    const expiration = new Date("2025-01-01T12:00:00Z");
    const period = {
      seconds: 5000,
      nanos: 0,
    };
    const periodResit = new Date("2025-01-02T12:00:00Z");

    const periodicAllowance = PeriodicAllowance.fromPartial({
      basic: BasicAllowance.fromPartial({
        spendLimit: [{ denom: "uatom", amount: "1" }],
        expiration: toTimestamp(expiration),
      }),
      periodSpendLimit: [{ denom: "uatom", amount: "2" }],
      periodCanSpend: [{ denom: "uatom", amount: "3" }],
      period,
      periodReset: toTimestamp(periodResit),
    });

    const converter = AminoConverter[PeriodicAllowanceTypeUrl];
    const aminoValue = converter.toAmino(
      periodicAllowance,
    ) as AminoPeriodicAllowance["value"];

    expect(aminoValue.basic?.spend_limit).toBe(
      periodicAllowance.basic?.spendLimit,
    );
    expect(aminoValue.basic?.expiration).toBe("2025-01-01T12:00:00.000Z");

    expect(aminoValue.period).toBe("5000000000000");
    expect(aminoValue.period_can_spend).toBe(periodicAllowance.periodCanSpend);
    expect(aminoValue.period_reset).toBe("2025-01-02T12:00:00.000Z");
    expect(aminoValue.period_spend_limit).toBe(
      periodicAllowance.periodSpendLimit,
    );

    expect(converter.fromAmino(aminoValue)).toEqual(periodicAllowance);
  });

  it("MsgRevokeAllowance -> AminoMsgRevokeAllowance", () => {
    const converter = AminoConverter[MsgRevokeAllowanceTypeUrl];
    const result = converter.toAmino(
      MsgRevokeAllowance.fromPartial({
        granter: "granter",
        grantee: "grantee",
      }),
    ) as AminoMsgRevokeAllowance["value"];

    expect(result.granter).toEqual("granter");
    expect(result.grantee).toEqual("grantee");
  });
});
