import { coin } from "@cosmjs/amino";
import { toTimestamp } from "@desmoslabs/desmjs-types/helpers";
import {
  AllowedMsgAllowance,
  BasicAllowance,
  PeriodicAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { getAminoSignerAndClient } from "../../../testutils";
import {
  AllowedMsgAllowanceTypeUrl,
  BasicAllowanceTypeUrl,
  MsgGrantAllowanceTypeUrl,
  MsgRevokeAllowanceTypeUrl,
  PeriodicAllowanceTypeUrl,
} from "./consts";
import { DesmosClient } from "../../../desmosclient";

async function revokeAllowance(
  client: DesmosClient,
  granter: string,
  grantee: string,
) {
  const msg = {
    typeUrl: MsgRevokeAllowanceTypeUrl,
    value: MsgRevokeAllowance.fromPartial({
      granter,
      grantee,
    }),
  };
  await client.signAndBroadcast(granter, [msg], "auto");
}

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
              spendLimit: [coin(500, "stake")],
              expiration: toTimestamp(expiration),
            }),
          ).finish(),
        },
      }),
    };
    await client.signAndBroadcast(addresses[0], [msg], "auto");

    await revokeAllowance(client, addresses[0], addresses[1]);
  });

  it("PeriodicAlowance Amino", async () => {
    const [signer, client] = await getAminoSignerAndClient();
    const addresses = await signer
      .getAccounts()
      .then((accounts) => accounts.map((a) => a.address));

    const reset = new Date();
    reset.setFullYear(reset.getFullYear() + 1);
    const periodReset = new Date();
    periodReset.setTime(periodReset.getTime() + 5000 * 1000);

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
              period: {
                seconds: 5000,
                nanos: 0,
              },
              periodSpendLimit: [coin(100, "stake")],
              periodCanSpend: [coin(100, "stake")],
              periodReset: toTimestamp(periodReset),
            }),
          ).finish(),
        },
      }),
    };
    await client.signAndBroadcast(addresses[0], [msg], "auto");

    await revokeAllowance(client, addresses[0], addresses[1]);
  });

  it("AllowedMsgAllowance amino", async () => {
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
    await client.signAndBroadcast(addresses[0], [msg], "auto");

    await revokeAllowance(client, addresses[0], addresses[1]);
  });
});
