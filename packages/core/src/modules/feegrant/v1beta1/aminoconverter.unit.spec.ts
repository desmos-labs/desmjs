import {
  AllowedMsgAllowance,
  BasicAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
import { MsgGrantAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { toTimestamp } from "cosmjs-types/helpers";
import {
  AllowedMsgAllowanceAminoType,
  AllowedMsgAllowanceTypeUrl,
  BasicAllowanceAminoType,
  BasicAllowanceTypeUrl,
  MsgGrantAllowanceTypeUrl,
} from "./consts";
import { AminoConverter } from "./aminoconverter";
import {
  AminoAllowedMsgAllowance,
  AminoBasicAllowance,
  AminoMsgGrantAllowance,
} from "./aminomessages";
import { serializeTimestamp } from "../../../utils/aminoutils";

describe("Feegrant.v1beta1.AminoConverter", () => {
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
});
