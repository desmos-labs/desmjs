import { sleep } from "@cosmjs/utils";
import Long from "long";
import { MsgCreateSubspaceResponse } from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import {
  MsgCreatePost,
  MsgCreatePostResponse,
} from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v3/models";
import { MsgSaveProfile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import {
  broadcastTest,
  createTestPost,
  createTestProfile,
  createTestSubspace,
  getAminoSignerAndClient,
  getDirectSignerAndClient,
} from "../../../testutils";
import {
  MsgAcceptPostOwnerTransferRequestEncodeObject,
  MsgCancelPostOwnerTransferRequestEncodeObject,
  MsgCreatePostEncodeObject,
  MsgMovePostEncodeObject,
  MsgRefusePostOwnerTransferRequestEncodeObject,
  MsgRequestPostOwnerTransferEncodeObject,
} from "./encodeobjects";
import {
  MsgSaveProfileEncodeObject,
  MsgSaveProfileTypeUrl,
} from "../../profiles/v3";
import { DoNotModify } from "../../consts";
import {
  MsgCreateSubspaceEncodeObject,
  MsgCreateSubspaceTypeUrl,
} from "../../subspaces/v3";
import {
  MsgAcceptPostOwnerTransferRequestTypeUrl,
  MsgCancelPostOwnerTransferRequestTypeUrl,
  MsgCreatePostTypeUrl,
  MsgMovePostTypeUrl,
  MsgRefusePostOwnerTransferRequestTypeUrl,
  MsgRequestPostOwnerTransferTypeUrl,
} from "./consts";

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

  it("MsgMovePost direct", async () => {
    const [signer, client] = await getDirectSignerAndClient();
    const { address } = (await signer.getAccounts())[0];

    // Create a profile for the user.
    const msgSaveProfile: MsgSaveProfileEncodeObject = {
      typeUrl: MsgSaveProfileTypeUrl,
      value: MsgSaveProfile.fromPartial({
        dtag: "user1",
        creator: address,
      }),
    };
    await client.signAndBroadcast(address, [msgSaveProfile], "auto");

    // Create the first subspace
    const msgCreateSubspace: MsgCreateSubspaceEncodeObject = {
      typeUrl: MsgCreateSubspaceTypeUrl,
      value: {
        name: "Test Subspace",
        description: "Test subspaces",
        owner: address,
        creator: address,
      },
    };
    const response = await client.signAndBroadcast(
      address,
      [msgCreateSubspace],
      "auto",
    );
    const { subspaceId: fromSubspaceId } = MsgCreateSubspaceResponse.decode(
      response.msgResponses[0].value,
    );

    // Create the second subspace
    const response2 = await client.signAndBroadcast(
      address,
      [msgCreateSubspace],
      "auto",
    );
    const { subspaceId: toSubspaceId } = MsgCreateSubspaceResponse.decode(
      response2.msgResponses[0].value,
    );

    // Create a post in the first subspace
    const msgCreatePost: MsgCreatePostEncodeObject = {
      typeUrl: MsgCreatePostTypeUrl,
      value: MsgCreatePost.fromPartial({
        subspaceId: fromSubspaceId,
        sectionId: 0,
        text: "Test post",
        author: address,
        replySettings: ReplySetting.REPLY_SETTING_EVERYONE,
      }),
    };
    const createPostResponse = await client.signAndBroadcast(
      address,
      [msgCreatePost],
      "auto",
    );
    const newPostId = MsgCreatePostResponse.decode(
      createPostResponse.msgResponses[0].value,
    ).postId;

    // Test post move
    const movePostMsg: MsgMovePostEncodeObject = {
      typeUrl: MsgMovePostTypeUrl,
      value: {
        subspaceId: fromSubspaceId,
        targetSubspaceId: toSubspaceId,
        targetSectionId: 0,
        postId: newPostId,
        owner: address,
      },
    };
    await client.signAndBroadcast(address, [movePostMsg], "auto");
  });

  describe("MsgMovePost Broadcasting", () => {
    broadcastTest("MsgMovePost", async (signer, client, [address]) => {
      // Create a profile for the user.
      const msgSaveProfile: MsgSaveProfileEncodeObject = {
        typeUrl: MsgSaveProfileTypeUrl,
        value: MsgSaveProfile.fromPartial({
          dtag: "user1",
          creator: address,
        }),
      };
      await client.signAndBroadcast(address, [msgSaveProfile], "auto");

      // Create the first subspace
      const msgCreateSubspace: MsgCreateSubspaceEncodeObject = {
        typeUrl: MsgCreateSubspaceTypeUrl,
        value: {
          name: "Test Subspace",
          description: "Test subspaces",
          owner: address,
          creator: address,
        },
      };
      const response = await client.signAndBroadcast(
        address,
        [msgCreateSubspace],
        "auto",
      );
      const { subspaceId: fromSubspaceId } = MsgCreateSubspaceResponse.decode(
        response.msgResponses[0].value,
      );

      // Create the second subspace
      const response2 = await client.signAndBroadcast(
        address,
        [msgCreateSubspace],
        "auto",
      );
      const { subspaceId: toSubspaceId } = MsgCreateSubspaceResponse.decode(
        response2.msgResponses[0].value,
      );

      // Create a post in the first subspace
      const msgCreatePost: MsgCreatePostEncodeObject = {
        typeUrl: MsgCreatePostTypeUrl,
        value: MsgCreatePost.fromPartial({
          subspaceId: fromSubspaceId,
          sectionId: 0,
          text: "Test post",
          author: address,
          replySettings: ReplySetting.REPLY_SETTING_EVERYONE,
        }),
      };
      const createPostResponse = await client.signAndBroadcast(
        address,
        [msgCreatePost],
        "auto",
      );
      const newPostId = MsgCreatePostResponse.decode(
        createPostResponse.msgResponses[0].value,
      ).postId;

      // Test post move
      const movePostMsg: MsgMovePostEncodeObject = {
        typeUrl: MsgMovePostTypeUrl,
        value: {
          subspaceId: fromSubspaceId,
          targetSubspaceId: toSubspaceId,
          targetSectionId: 0,
          postId: newPostId,
          owner: address,
        },
      };
      await client.signAndBroadcast(address, [movePostMsg], "auto");
    });
  });

  describe("MsgRequestPostOwnerTransfer Broadcasting", () => {
    broadcastTest(
      "MsgRequestPostOwnerTransfer",
      async (signer, client, [address0, address1]) => {
        await createTestProfile(client, address0);
        await createTestProfile(client, address1);
        const subspaceId = await createTestSubspace(client, address0);

        // Create a post
        const postId = await createTestPost(client, address0, subspaceId);

        // Test request post owner transfer
        const msgPostOwnerTransfer: MsgRequestPostOwnerTransferEncodeObject = {
          typeUrl: MsgRequestPostOwnerTransferTypeUrl,
          value: {
            subspaceId,
            postId,
            receiver: address1,
            sender: address0,
          },
        };
        await client.signAndBroadcast(address0, [msgPostOwnerTransfer], "auto");
      },
    );
  });

  describe("MsgCancelPostOwnerTransferRequest Broadcasting", () => {
    broadcastTest(
      "MsgCancelPostOwnerTransferRequest",
      async (signer, client, [address0, address1]) => {
        await createTestProfile(client, address0);
        await createTestProfile(client, address1);
        const subspaceId = await createTestSubspace(client, address0);

        // Create a post
        const postId = await createTestPost(client, address0, subspaceId);

        // Test request post owner transfer
        const msgPostOwnerTransfer: MsgRequestPostOwnerTransferEncodeObject = {
          typeUrl: MsgRequestPostOwnerTransferTypeUrl,
          value: {
            subspaceId,
            postId,
            receiver: address1,
            sender: address0,
          },
        };
        await client.signAndBroadcast(address0, [msgPostOwnerTransfer], "auto");

        // Test cancel post owner transfer
        const msgCancelPostOwnerTransfer: MsgCancelPostOwnerTransferRequestEncodeObject =
          {
            typeUrl: MsgCancelPostOwnerTransferRequestTypeUrl,
            value: {
              subspaceId,
              postId,
              sender: address0,
            },
          };
        await client.signAndBroadcast(
          address0,
          [msgCancelPostOwnerTransfer],
          "auto",
        );
      },
    );
  });

  describe("MsgRefusePostOwnerTransferRequest Broadcasting", () => {
    broadcastTest(
      "MsgRefusePostOwnerTransferRequest",
      async (signer, client, [address0, address1]) => {
        await createTestProfile(client, address0);
        await createTestProfile(client, address1);
        const subspaceId = await createTestSubspace(client, address0);

        // Create a post
        const postId = await createTestPost(client, address0, subspaceId);

        // Test request post owner transfer
        const msgPostOwnerTransfer: MsgRequestPostOwnerTransferEncodeObject = {
          typeUrl: MsgRequestPostOwnerTransferTypeUrl,
          value: {
            subspaceId,
            postId,
            receiver: address1,
            sender: address0,
          },
        };
        await client.signAndBroadcast(address0, [msgPostOwnerTransfer], "auto");

        // Test refuse post owner transfer
        const msgRefusePostOwnerTransfer: MsgRefusePostOwnerTransferRequestEncodeObject =
          {
            typeUrl: MsgRefusePostOwnerTransferRequestTypeUrl,
            value: {
              subspaceId,
              postId,
              receiver: address1,
            },
          };
        await client.signAndBroadcast(
          address1,
          [msgRefusePostOwnerTransfer],
          "auto",
        );
      },
    );
  });

  describe("MsgAcceptPostOwnerTransferRequest Broadcasting", () => {
    broadcastTest(
      "MsgAcceptPostOwnerTransferRequest",
      async (signer, client, [address0, address1]) => {
        await createTestProfile(client, address0);
        await createTestProfile(client, address1);
        const subspaceId = await createTestSubspace(client, address0);

        // Create a post
        const postId = await createTestPost(client, address0, subspaceId);

        // Test request post owner transfer
        const msgPostOwnerTransfer: MsgRequestPostOwnerTransferEncodeObject = {
          typeUrl: MsgRequestPostOwnerTransferTypeUrl,
          value: {
            subspaceId,
            postId,
            receiver: address1,
            sender: address0,
          },
        };
        await client.signAndBroadcast(address0, [msgPostOwnerTransfer], "auto");

        // Test accept post owner transfer
        const msgAcceptPostOwnerTransfer: MsgAcceptPostOwnerTransferRequestEncodeObject =
          {
            typeUrl: MsgAcceptPostOwnerTransferRequestTypeUrl,
            value: {
              subspaceId,
              postId,
              receiver: address1,
            },
          };
        await client.signAndBroadcast(
          address1,
          [msgAcceptPostOwnerTransfer],
          "auto",
        );
      },
    );
  });
});
