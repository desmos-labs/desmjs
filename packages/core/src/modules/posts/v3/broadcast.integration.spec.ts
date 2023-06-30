import { sleep } from "@cosmjs/utils";
import Long from "long";
import { getAminoSignerAndClient } from "../../../testutils";
import { MsgCreatePostEncodeObject } from "./encodeobjects";
import {
  MsgSaveProfileEncodeObject,
  MsgSaveProfileTypeUrl,
} from "../../profiles/v3";
import { DoNotModify } from "../../consts";
import {
  MsgCreateSubspaceEncodeObject,
  MsgCreateSubspaceTypeUrl,
} from "../../subspaces/v3";
import { MsgCreatePostTypeUrl } from "./consts";

describe("Broadcast desmos.posts.v3 messages", () => {
  jest.setTimeout(60 * 1000);

  it("MsgCreatePost", async () => {
    const [signer, client] = await getAminoSignerAndClient();
    const { address } = (await signer.getAccounts())[0];

    // Create a profile (required to create a post)
    const msgSaveProfile: MsgSaveProfileEncodeObject = {
      typeUrl: MsgSaveProfileTypeUrl,
      value: {
        dtag: "TestUser",
        nickname: "Test user",
        bio: DoNotModify,
        profilePicture: DoNotModify,
        coverPicture: DoNotModify,
        creator: address,
      },
    };
    await client.signAndBroadcast(address, [msgSaveProfile], "auto");
    await sleep(5000);

    // Create a subspace
    // Ignore any error if the subspace already exists
    const msgCreateSubspace: MsgCreateSubspaceEncodeObject = {
      typeUrl: MsgCreateSubspaceTypeUrl,
      value: {
        name: "Test Subspace",
        description: "Test subspaces",
        owner: address,
        creator: address,
      },
    };
    await client.signAndBroadcast(address, [msgCreateSubspace], "auto");
    await sleep(5000);

    // Create a first post
    const msgCreatePost: MsgCreatePostEncodeObject = {
      typeUrl: MsgCreatePostTypeUrl,
      value: {
        subspaceId: Long.fromNumber(1),
        sectionId: 0,
        externalId: "",
        text: "This is a test post",
        entities: {
          hashtags: [],
          mentions: [],
          urls: [
            {
              displayUrl: "IPFS",
              start: Long.fromNumber(4),
              end: Long.fromNumber(5),
              url: "http://scripta.network/logo.svg",
            },
          ],
        },
        tags: [],
        attachments: [],
        author: address,
        conversationId: Long.fromNumber(0),
        replySettings: 1,
        referencedPosts: [],
      },
    };
    await client.signAndBroadcast(address, [msgCreatePost], "auto");
    await sleep(5000);

    // Create a post
    const msg: MsgCreatePostEncodeObject = {
      typeUrl: MsgCreatePostTypeUrl,
      value: {
        subspaceId: Long.fromNumber(1),
        sectionId: 0,
        externalId: "",
        text: "This is a test post",
        entities: {
          hashtags: [],
          mentions: [],
          urls: [
            {
              displayUrl: "IPFS",
              start: Long.fromNumber(4),
              end: Long.fromNumber(5),
              url: "http://scripta.network/logo.svg",
            },
          ],
        },
        tags: [],
        attachments: [],
        author: address,
        conversationId: Long.fromNumber(0),
        replySettings: 1,
        referencedPosts: [
          {
            position: Long.fromNumber(0),
            postId: Long.fromNumber(1),
            type: 1,
          },
        ],
      },
    };
    const result = await client.signAndBroadcast(address, [msg], "auto");
    expect(result.code).toBe(0);
  });
});
