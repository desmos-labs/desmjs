import { calculateFee, GasPrice } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet, OfflineSigner } from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { OfflineAminoSigner, Secp256k1HdWallet } from "@cosmjs/amino";
import Long from "long";
import { MsgCreateSubspaceResponse } from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import { MsgSaveProfile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import {
  MsgCreatePost,
  MsgCreatePostResponse,
} from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v3/models";
import { OfflineSignerAdapter, Signer, SigningMode } from "./signers";
import { DesmosClient } from "./desmosclient";
import { BlockBroadcastResponse } from "./types/responses";
import {
  MsgCreateSubspaceEncodeObject,
  MsgCreateSubspaceTypeUrl,
} from "./modules/subspaces/v3";
import {
  MsgSaveProfileEncodeObject,
  MsgSaveProfileTypeUrl,
} from "./modules/profiles/v3";
import {
  MsgCreatePostEncodeObject,
  MsgCreatePostTypeUrl,
} from "./modules/posts/v3";

export type HdPath = {
  coinType: number;
  account: number;
  change: number;
  index: number;
};

export const TEST_CHAIN_URL = "http://localhost:26657";

export const defaultGasPrice = GasPrice.fromString("0.025stake");

export const DesmosHdPath: HdPath = {
  coinType: 852,
  account: 0,
  change: 0,
  index: 0,
};

export const CosmosHdPath: HdPath = {
  coinType: 118,
  account: 0,
  change: 0,
  index: 0,
};

export const DefaultFees = {
  SaveProfile: calculateFee(100_000, defaultGasPrice),
  CreateSubspace: calculateFee(200_000, defaultGasPrice),
  CreatePost: calculateFee(200_000, defaultGasPrice),
  AddReason: calculateFee(200_000, defaultGasPrice),
  CreateReport: calculateFee(100_000, defaultGasPrice),
  RegisterReaction: calculateFee(100_000, defaultGasPrice),
  AddReaction: calculateFee(100_000, defaultGasPrice),
  WasmInstantiate: calculateFee(200_000, defaultGasPrice),
  WasmExecute: calculateFee(200_000, defaultGasPrice),
};

export const testUser1 = {
  mnemonic:
    "hour harbor fame unaware bunker junk garment decrease federal vicious island smile warrior fame right suit portion skate analyst multiply magnet medal fresh sweet",
  dtag: "test_user_1",
  address0: "desmos1nm6kh6jwqmsezwtnmgdd4w4tzyk9f8gvqu5en0",
  address1: "desmos1cywv6k7d94nyka74q7cr59yauzs690ky2ew6qx",
};

export const testUser2 = {
  mnemonic:
    "shine velvet envelope baby bicycle slot betray water mask cake rule useless absorb lens enable fork lake make depart slogan kiwi iron decorate relief",
  dtag: "test_user_2",
  address0: "desmos1c7ms9zhtgwmv5jy6ztj2vq0jj67zenw3gdl2gr",
  address1: "desmos1f88f8sdnt4qznzj5drnqtn279uelat402xx5yv",
};

/**
 * Creates a signer from the provided mnemonic.
 * @param mnemonic - The mnemonic passphrase used to derive the keys.
 * @param indexes - Derivation path indexes used to derive the keys.
 */
export async function signerFromMnemonic(
  mnemonic: string,
  indexes: number[] = [0],
): Promise<OfflineSigner> {
  const hdPaths = indexes.map((i) => `m/44'/852'/0'/${i}/0`).map(stringToPath);

  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths,
    prefix: "desmos",
  });
}

/**
 * Creates a signer from the provided mnemonic.
 * @param mnemonic - The mnemonic passphrase used to derive the keys.
 * @param paths - Derivation paths used to derive the keys.
 * @param prefix - The bech32 address prefix.
 */
export function aminoSignerFromMnemonic(
  mnemonic: string,
  paths: HdPath[] = [DesmosHdPath],
  prefix: string = "desmos",
): Promise<OfflineAminoSigner> {
  const hdPaths = paths
    .map(
      (path) =>
        `m/44'/${path.coinType}'/${path.account}'/${path.change}/${path.index}`,
    )
    .map(stringToPath);

  return Secp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths,
    prefix,
  });
}

/**
 * Returns a promise that resolves after the provided amount of milliseconds.
 * @param ms - Milliseconds that must pass before the promise resolves.
 */
export async function delay(ms: number): Promise<void> {
  return new Promise((r) => {
    setTimeout(r, ms);
  });
}

/**
 * Builds a Signer and DesmosClient instance based on a test mnemonic.
 * The returned signer will sign transactions using the AMINO signing mode.
 */
export async function getAminoSignerAndClient(): Promise<
  [Signer, DesmosClient]
> {
  const signer = await OfflineSignerAdapter.fromMnemonic(
    SigningMode.AMINO,
    testUser1.mnemonic,
    {
      hdPath: [
        stringToPath("m/44'/852'/0'/0/0"),
        stringToPath("m/44'/852'/1'/0/0"),
      ],
    },
  );
  const client = await DesmosClient.connectWithSigner(TEST_CHAIN_URL, signer, {
    gasPrice: defaultGasPrice,
    gasAdjustment: 1.8,
  });
  return [signer, client];
}

/**
 * Builds a Signer and DesmosClient instance based on a test mnemonic.
 * The returned signer will sign transactions using the DIRECT signing mode.
 */
export async function getDirectSignerAndClient(): Promise<
  [Signer, DesmosClient]
> {
  const signer = await OfflineSignerAdapter.fromMnemonic(
    SigningMode.DIRECT,
    testUser1.mnemonic,
    {
      hdPath: [
        stringToPath("m/44'/852'/0'/0/0"),
        stringToPath("m/44'/852'/1'/0/0"),
      ],
    },
  );
  const client = await DesmosClient.connectWithSigner(TEST_CHAIN_URL, signer, {
    gasPrice: defaultGasPrice,
    gasAdjustment: 1.8,
  });
  return [signer, client];
}

export async function pollTx(
  client: DesmosClient,
  txHash: string,
): Promise<void> {
  let timedOut = false;
  const txPollTimeout = setTimeout(() => {
    timedOut = true;
  }, 60000);

  while (!timedOut) {
    // eslint-disable-next-line no-await-in-loop
    const tx = await client.getTx(txHash);
    if (tx !== null) {
      clearTimeout(txPollTimeout);
      return;
    }
    // eslint-disable-next-line no-await-in-loop
    await delay(3000);
  }

  throw new Error(`Timed out waiting for tx ${txHash}`);
}

/**
 * Ensure that the provided {@link BlockBroadcastResponse} represents a
 * transaction that has been broadcasted successfully.
 */
export function assertTxSuccess(response: BlockBroadcastResponse) {
  expect(response.checkTx.log).toBe("[]");
  expect(response.checkTx.code).toBe(0);
}

/**
 * Function to perform a broadcast tx test case where is tested both the
 * direct and amino encoding.
 * @param name - Test name.
 * @param testCase - Function that implements the test case.
 */
export function broadcastTest(
  name: string,
  testCase: (
    signer: Signer,
    client: DesmosClient,
    addresses: string[],
  ) => Promise<void>,
) {
  it(`${name} Direct`, async () => {
    const [signer, client] = await getDirectSignerAndClient();
    const addresses = (await signer.getAccounts()).map((a) => a.address);
    await testCase(signer, client, addresses);
  });

  it(`${name} Amino`, async () => {
    const [signer, client] = await getAminoSignerAndClient();
    const addresses = (await signer.getAccounts()).map((a) => a.address);
    await testCase(signer, client, addresses);
  });
}

/**
 * Function to create a profile for the provided address.
 */
export async function createTestProfile(client: DesmosClient, address: string) {
  const msgCreateProfile: MsgSaveProfileEncodeObject = {
    typeUrl: MsgSaveProfileTypeUrl,
    value: MsgSaveProfile.fromPartial({
      dtag: address.substring(0, 22),
      creator: address,
    }),
  };
  await client.signAndBroadcast(address, [msgCreateProfile], "auto");
}

/**
 * Function to create a test subspace.
 */
export async function createTestSubspace(
  client: DesmosClient,
  creator: string,
): Promise<Long> {
  // Create a subspace
  const msgCreateSubspace: MsgCreateSubspaceEncodeObject = {
    typeUrl: MsgCreateSubspaceTypeUrl,
    value: {
      name: "Test Subspace",
      description: "Test subspaces",
      owner: creator,
      creator,
    },
  };
  const response = await client.signAndBroadcast(
    creator,
    [msgCreateSubspace],
    "auto",
  );
  const { subspaceId } = MsgCreateSubspaceResponse.decode(
    response.msgResponses[0].value,
  );
  return subspaceId;
}

/**
 * Function to create a test post in a subspace.
 */
export async function createTestPost(
  client: DesmosClient,
  creator: string,
  subspaceId: Long,
): Promise<Long> {
  const msgCreatePost: MsgCreatePostEncodeObject = {
    typeUrl: MsgCreatePostTypeUrl,
    value: MsgCreatePost.fromPartial({
      subspaceId,
      sectionId: 0,
      text: "Test post",
      author: creator,
      replySettings: ReplySetting.REPLY_SETTING_EVERYONE,
    }),
  };
  const createPostResponse = await client.signAndBroadcast(
    creator,
    [msgCreatePost],
    "auto",
  );
  const { postId } = MsgCreatePostResponse.decode(
    createPostResponse.msgResponses[0].value,
  );
  return postId;
}
