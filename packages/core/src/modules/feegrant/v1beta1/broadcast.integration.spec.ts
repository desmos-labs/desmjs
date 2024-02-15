import { coin } from "@cosmjs/amino";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { toTimestamp } from "@desmoslabs/desmjs-types/helpers";
import {
  AllowedMsgAllowance,
  BasicAllowance,
  PeriodicAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
import { MsgGrantAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { getAminoSignerAndClient } from "../../../testutils";
import {
  AllowedMsgAllowanceTypeUrl,
  BasicAllowanceTypeUrl,
  MsgGrantAllowanceTypeUrl,
  PeriodicAllowanceTypeUrl,
} from "./consts";

describe("MsgGrantAllowance", () => {
  jest.setTimeout(60 * 1000);

  it("BasicAllowance Amino", async () => {
    const [signer, client] = await getAminoSignerAndClient();
    const addresses = await signer
      .getAccounts()
      .then((accounts) => accounts.map((a) => a.address));

    const expiration = new Date();
    expiration.setFullYear(expiration.getFullYear() + 1);

    const msg = {
      typeUrl: MsgGrantAllowanceTypeUrl,
      value: MsgGrantAllowance.fromPartial({
        granter: addresses[0],
        grantee: addresses[1],
        allowance: {
          typeUrl: BasicAllowanceTypeUrl,
          value: BasicAllowance.encode(
            BasicAllowance.fromPartial({
              spendLimit: [],
              expiration: toTimestamp(new Date()),
            }),
          ).finish(),
        },
      }),
    };
    await client.signAndBroadcast(addresses[0], [msg], "auto");
  });

  it("PeriodicAlowance Amino", async () => {
    const [signer, client] = await getAminoSignerAndClient();
    const addresses = await signer
      .getAccounts()
      .then((accounts) => accounts.map((a) => a.address));

    const reset = new Date();
    reset.setFullYear(reset.getFullYear() + 1);

    const msg = {
      typeUrl: MsgGrantAllowanceTypeUrl,
      value: MsgGrantAllowance.fromPartial({
        granter: addresses[0],
        grantee: addresses[1],
        allowance: {
          typeUrl: PeriodicAllowanceTypeUrl,
          value: PeriodicAllowance.encode(
            PeriodicAllowance.fromPartial({
              basic: BasicAllowance.fromPartial({
                spendLimit: [coin(500, "stake")],
                expiration: toTimestamp(reset),
              }),
              periodSpendLimit: [coin(100, "stake")],
            }),
          ).finish(),
        },
      }),
    };
    await client.signAndBroadcast(addresses[0], [msg], "auto");
  });

  it("MsgAllowance amino", async () => {
    const [signer, client] = await getAminoSignerAndClient();
    const addresses = await signer
      .getAccounts()
      .then((accounts) => accounts.map((a) => a.address));

    const expiration = new Date();

    const msg = {
      typeUrl: MsgGrantAllowanceTypeUrl,
      value: MsgGrantAllowance.fromPartial({
        granter: addresses[0],
        grantee: addresses[1],
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
      }),
    };
    const result = await client.signAndBroadcast(addresses[0], [msg], "auto");
    assertIsDeliverTxSuccess(result);
  });
});
