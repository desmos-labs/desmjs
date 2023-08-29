import {
  MsgBurn,
  MsgCreateDenom,
  MsgMint,
  MsgSetDenomMetadata,
} from "@desmoslabs/desmjs-types/desmos/tokenfactory/v1/msgs";
import { MsgSendEncodeObject } from "@cosmjs/stargate";
import { broadcastTest, createTestSubspace } from "../../../testutils";
import {
  MsgBurnEncodeObject,
  MsgCreateDenomEncodeObject,
  MsgMintEncodeObject,
  MsgSetDenomMetadataEncodeObject,
} from "./encodeobjects";
import {
  MsgBurnTypeUrl,
  MsgCreateDenomTypeUrl,
  MsgMintTypeUrl,
  MsgSetDenomMetadataTypeUrl,
} from "./consts";
import { MsgSendTypeUrl } from "../../bank/v1beta1";

describe("Broadcast desmos.tokenfactory.v1 messages", () => {
  jest.setTimeout(60 * 1000);

  describe("Broadcast MsgCreateDenom", () => {
    broadcastTest("MsgCreateDenom", async (signer, client, [address]) => {
      const subspaceId = await createTestSubspace(client, address);

      // Send some coins to the subspace treasury
      const { subspace } =
        await client.querier.subspacesV3.subspace(subspaceId);
      await client.signAndBroadcast(
        address,
        [
          {
            typeUrl: MsgSendTypeUrl,
            value: {
              amount: [{ amount: "1", denom: "stake" }],
              toAddress: subspace!.treasury,
              fromAddress: address,
            },
          } as MsgSendEncodeObject,
        ],
        "auto",
      );

      const msgCreateDenom: MsgCreateDenomEncodeObject = {
        typeUrl: MsgCreateDenomTypeUrl,
        value: MsgCreateDenom.fromPartial({
          subspaceId,
          sender: address,
          subdenom: "cdenom",
        }),
      };
      // Test the denom creation.
      await client.signAndBroadcast(address, [msgCreateDenom], "auto");
    });
  });

  describe("Broadcast MsgMint & MsgBurn", () => {
    broadcastTest("MsgMint & MsgBur", async (signer, client, [address]) => {
      const subspaceId = await createTestSubspace(client, address);

      // Send some coins to the subspace treasury
      const { subspace } =
        await client.querier.subspacesV3.subspace(subspaceId);
      await client.signAndBroadcast(
        address,
        [
          {
            typeUrl: MsgSendTypeUrl,
            value: {
              amount: [{ amount: "1", denom: "stake" }],
              toAddress: subspace!.treasury,
              fromAddress: address,
            },
          } as MsgSendEncodeObject,
        ],
        "auto",
      );

      // Create a test denom.
      const msgCreateDenom: MsgCreateDenomEncodeObject = {
        typeUrl: MsgCreateDenomTypeUrl,
        value: MsgCreateDenom.fromPartial({
          subspaceId,
          sender: address,
          subdenom: "mintdenom",
        }),
      };
      await client.signAndBroadcast(address, [msgCreateDenom], "auto");

      // Test the minting.
      const msgMint: MsgMintEncodeObject = {
        typeUrl: MsgMintTypeUrl,
        value: MsgMint.fromPartial({
          subspaceId,
          amount: {
            amount: "100000",
            denom: `factory/${subspace!.treasury}/mintdenom`,
          },
          sender: address,
        }),
      };
      await client.signAndBroadcast(address, [msgMint], "auto");

      // Test the burning.
      const msgBurn: MsgBurnEncodeObject = {
        typeUrl: MsgBurnTypeUrl,
        value: MsgBurn.fromPartial({
          subspaceId,
          amount: {
            amount: "50000",
            denom: `factory/${subspace!.treasury}/mintdenom`,
          },
          sender: address,
        }),
      };
      await client.signAndBroadcast(address, [msgBurn], "auto");
    });
  });

  describe("Broadcast MsgSetDenomMetadata", () => {
    broadcastTest("MsgSetDenomMetadata", async (signer, client, [address]) => {
      const subspaceId = await createTestSubspace(client, address);

      // Send some coins to the subspace treasury
      const { subspace } =
        await client.querier.subspacesV3.subspace(subspaceId);
      await client.signAndBroadcast(
        address,
        [
          {
            typeUrl: MsgSendTypeUrl,
            value: {
              amount: [{ amount: "1", denom: "stake" }],
              toAddress: subspace!.treasury,
              fromAddress: address,
            },
          } as MsgSendEncodeObject,
        ],
        "auto",
      );

      // Create a test denom.
      const msgCreateDenom: MsgCreateDenomEncodeObject = {
        typeUrl: MsgCreateDenomTypeUrl,
        value: MsgCreateDenom.fromPartial({
          subspaceId,
          sender: address,
          subdenom: "test",
        }),
      };
      await client.signAndBroadcast(address, [msgCreateDenom], "auto");

      // Test set denom metadata.
      const msgSetDenomMetadata: MsgSetDenomMetadataEncodeObject = {
        typeUrl: MsgSetDenomMetadataTypeUrl,
        value: MsgSetDenomMetadata.fromPartial({
          subspaceId,
          metadata: {
            name: "Test denom",
            description: "A random denom",
            symbol: "test",
            base: `factory/${subspace!.treasury}/test`,
            display: `factory/${subspace!.treasury}/test`,
            denomUnits: [
              {
                denom: `factory/${subspace!.treasury}/test`,
                aliases: ["test"],
                exponent: 0,
              },
            ],
          },
          sender: address,
        }),
      };
      await client.signAndBroadcast(address, [msgSetDenomMetadata], "auto");
    });
  });
});
