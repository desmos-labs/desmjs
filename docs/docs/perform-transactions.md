---
sidebar_label: "Performing transactions"
sidebar_position: 2
---

# Performing transactions

## Overview

In order to be able to perform transactions you need to do the following steps:

1. create a  [`Signer`](api/desmjs/classes/Signer.md) instance
2. create a [`DesmosClient`](api/desmjs/classes/DesmosClient.md) instance with the
[`connectWithSigner`](api/desmjs/classes/DesmosClient.md#connectwithsigner) function
3. build the messages that you want to include inside the transaction
4. sign and broadcast the messages with the
[`signAndBroadcast`](api/desmjs/classes/DesmosClient.md#signandbroadcast) method

Here is an example of code that showcases all the steps:

```js
import { DesmosClient, OfflineSignerAdapter, SigningMode, GasPrice } from "@desmoslabs/desmjs";


// Generate a signer with a random mnemonic. To see the available signer go to the Signers section.
const signer = await OfflineSignerAdapter.generate(SigningMode.DIRECT, 24);

const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

// Get the signer address from the signer.
const [signerAddress] = await signer.getAccounts();

// Save profile message
const saveProfile: MsgSaveProfileEncodeObject = {
  typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
  value: {
    creator: signerAddress,
    bio: "The price of all saiyans",
    dtag: "vegeta",
    nickname: "Vegeta",
    coverPicture: "https://ipfs.io/ipfs/<CID>",
    profilePicture: "https://ipfs.io/ipfs/<CID>",
  }
};

// Message to create a post inside a subspace
const createPost: MsgCreatePostEncodeObject = {
  typeUrl: "/desmos.posts.v3.MsgCreatePost",
  value: MsgCreatePost.fromPartial({
    subspaceId: Long.fromNumber(1),
    author: signerAddress,
    text: "post content",
    replySettings: ReplySetting.REPLY_SETTING_EVERYONE
  })
};

// Message to be sent to the chain, they will be executed sequentially from first to last.
const messages: EncodeObject[] = [saveProfile, createPost];

// Fee paid to perform the operations.
const fees: number | StdFee | "auto" = "auto";

// Optional memo that can be attached to the transaction, max length 256 characters.
const memo: string | undefined = undefined;

await client.signandbroadcast(signerAddress, messages, fees, memo);
```

### Automatic fees estimation

The `DesmosClient` class can estimate the fees for you before broadcasting the messages.  
To enable this feature you must provide the `gasPrice` through the `options` 
param of [`connectWithSigner`](api/desmjs/classes/DesmosClient.md#connectwithsigner).  

To compute the fees the `DesmosClient` will first estimate the amount of gas required asking the chain to simulate
an execution with the messages that you want to execute and then will multiply that value for `gasPrice`.
The resulting fees then will be `gasPrice` * estimated gas.

When you enable this feature you can pass one of the following values as a `fee` param of 
[`signandbroadcast`](api/desmjs/classes/DesmosClient.md#signandbroadcast):
* `"auto"`: To automatically estimated the fees based on the messages that you want to broadcast;
* a `number`: Multiplication factor used to estimate the gas and fees from the provided messages. When using `"auto"` this
value is `1.3` so the gas used to compute the fees is equal to 1.3 \* estimated gas.

## Signers

The `@desmoslabs/desmjs` provides a set of signers that can be used, here you can find the list:

1. [`OfflineSignerAdapter`](api/desmjs/classes/OfflineSignerAdapter.md): This can be used to create
a signer from a 12/24 words mnemonic or any signer that implements the `@cosmjs/OfflineAminoSigner` or 
`@cosmjs/OfflineDirectSigner`;
2. [`PrivateKeySigner`](api/desmjs/classes/PrivateKeySigner.md): This can be used to create 
a signer from a private key.

If none of this signer meet your needs you can implement a custom signer by extending the 
[`Signer`](api/desmjs/classes/Signer.md) class.  
For references on how to implement a custom `Signer` you can take a look inside the demsjs 
[GitHub repo](https://github.com/desmos-labs/desmjs/tree/main/packages).  
Some worth to take a look are:
1. [@desmoslabs/desmjs-walletconnect-v2](https://github.com/desmos-labs/desmjs/tree/main/packages/walletconnect-v2): 
Signer that use WalletConnect to sign transactions;
2. [@desmoslabs/desmjs-web3auth-web](https://github.com/desmos-labs/desmjs/tree/main/packages/web3auth-web): 
Signer that receive a Secp256k1 private key from Web3Auth.

## Messages

Here is the list of messages that can be sent divided by module:

### Profiles

#### v3

* [MsgSaveProfileEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgSaveProfileEncodeObject.md): 
Creates/updates the user's Desmos profile.
* [MsgDeleteProfileEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgDeleteProfileEncodeObject.md): 
Deletes the user's Desmos profile.
* [MsgLinkApplicationEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgLinkApplicationEncodeObject.md): 
Link a centralized application to the user's Desmos profile
* [MsgUnlinkApplicationEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgUnlinkApplicationEncodeObject.md): 
Unlink a centralized application from the user's Desmos profile
* [MsgLinkChainAccountEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgLinkChainAccountEncodeObject.md): 
Link an external blockchain address to the user's Desmos profile
* [MsgUnlinkChainAccountEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgUnlinkChainAccountEncodeObject.md):
Unlink an external blockchain address from the user's Desmos profile
* [MsgRequestDTagTransferEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgRequestDTagTransferEncodeObject.md):
Create a DTag transfer request
* [MsgAcceptDTagTransferRequestEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgAcceptDTagTransferRequestEncodeObject.md):
Accept a DTag transfer request
* [MsgRefuseDTagTransferRequestEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgRefuseDTagTransferRequestEncodeObject.md):
Refuse a DTag transfer request
* [MsgCancelDTagTransferRequestEncodeObject](api/desmjs/interfaces/Profiles.v3.MsgCancelDTagTransferRequestEncodeObject.md):
Cancel a DTag transfer initiate from the user

### Relationships


#### v1

* [MsgCreateRelationshipEncodeObject](api/desmjs/interfaces/Relationships.v1.MsgCreateRelationshipEncodeObject.md):
Create a relationship between two users (A follow B)
* [MsgDeleteRelationshipEncodeObject](api/desmjs/interfaces/Relationships.v1.MsgDeleteRelationshipEncodeObject.md):
Delete a relationship between two users (A unfollow B)
* [MsgBlockUserEncodeObject](api/desmjs/interfaces/Relationships.v1.MsgBlockUserEncodeObject.md): 
Block a user
* [MsgUnblockUserEncodeObject](api/desmjs/interfaces/Relationships.v1.MsgUnblockUserEncodeObject.md):
Unblock a user

### Subspaces

#### v3

* [MsgCreateSubspaceEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgCreateSubspaceEncodeObject.md):
Creates a subspace
* [MsgEditSubspaceEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgEditSubspaceEncodeObject.md):
Edit a previously created subspace
* [MsgDeleteSubspaceEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgDeleteSubspaceEncodeObject.md):
Delete a subspace
* [MsgCreateSectionEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgCreateSectionEncodeObject.md):
Create a new section
* [MsgDeleteSectionEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgDeleteSectionEncodeObject.md):
Delete a section
* [MsgEditSectionEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgEditSectionEncodeObject.md):
Edit a previously created section
* [MsgMoveSectionEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgMoveSectionEncodeObject.md):
Move a section to another section
* [MsgCreateUserGroupEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgCreateUserGroupEncodeObject.md):
Create a user group
* [MsgEditUserGroupEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgEditUserGroupEncodeObject.md):
Edit a previously created user group
* [MsgDeleteUserGroupEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgDeleteUserGroupEncodeObject.md):
Delete a user group
* [MsgMoveUserGroupEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgMoveUserGroupEncodeObject.md):
Move a user group to another section
* [MsgAddUserToUserGroupEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgAddUserToUserGroupEncodeObject.md): 
Add a user to a user group
* [MsgRemoveUserFromUserGroupEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgRemoveUserFromUserGroupEncodeObject.md): 
Remove a user from a user group
* [MsgSetUserPermissionsEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgSetUserPermissionsEncodeObject.md):
Set the permissions of a user inside a subspace
* [MsgSetUserGroupPermissionsEncodeObject](api/desmjs/interfaces/Subspaces.v3.MsgSetUserGroupPermissionsEncodeObject.md):
Set the permissions that all members of a group will inherit

### Posts

#### v3

* [MsgCreatePostEncodeObject](api/desmjs/interfaces/Posts.v3.MsgCreatePostEncodeObject.md):
Create a new post
* [MsgDeletePostEncodeObject](api/desmjs/interfaces/Posts.v3.MsgDeletePostEncodeObject.md):
Delete a post
* [MsgEditPostEncodeObject](api/desmjs/interfaces/Posts.v3.MsgEditPostEncodeObject.md):
Edit a previously created post
* [MsgAddPostAttachmentEncodeObject](api/desmjs/interfaces/Posts.v3.MsgAddPostAttachmentEncodeObject.md):
Add an attachment to a post
* [MsgRemovePostAttachmentEncodeObject](api/desmjs/interfaces/Posts.v3.MsgRemovePostAttachmentEncodeObject.md):
Remove an attachment from a post
* [MsgAnswerPollEncodeObject](api/desmjs/interfaces/Posts.v3.MsgAnswerPollEncodeObject.md):
Answer a poll

### Reactions

#### v1

* [MsgAddReactionEncodeObject](api/desmjs/interfaces/Reactions.v1.MsgAddReactionEncodeObject.md):
Add a reaction to a post
* [MsgRemoveReactionEncodeObject](api/desmjs/interfaces/Reactions.v1.MsgRemoveReactionEncodeObject.md):
Remove a reaction from a post
* [MsgAddRegisteredReactionEncodeObject](api/desmjs/interfaces/Reactions.v1.MsgAddRegisteredReactionEncodeObject.md):
Register a new supported reaction for a subspace
* [MsgRemoveRegisteredReactionEncodeObject](api/desmjs/interfaces/Reactions.v1.MsgRemoveRegisteredReactionEncodeObject.md):
Remove a registered reaction from a subspace
* [MsgEditRegisteredReactionEncodeObject](api/desmjs/interfaces/Reactions.v1.MsgEditRegisteredReactionEncodeObject.md):
Edit a previously registered reaction
* [MsgSetReactionsParamsEncodeObject](api/desmjs/interfaces/Reactions.v1.MsgSetReactionsParamsEncodeObject.md):
Set the reactions params for a subspace

### Reports

#### v1

* [MsgCreateReportEncodeObject](api/desmjs/interfaces/Reports.v1.MsgCreateReportEncodeObject.md):
Create a report inside a subspace
* [MsgDeleteReportEncodeObject](api/desmjs/interfaces/Reports.v1.MsgDeleteReportEncodeObject.md):
Delete a previously created report from a subspace
* [MsgSupportStandardReasonEncodeObject](api/desmjs/interfaces/Reports.v1.MsgSupportStandardReasonEncodeObject.md):
Support one reason from the module params
* [MsgAddReasonEncodeObject](api/desmjs/interfaces/Reports.v1.MsgAddReasonEncodeObject.md):
Add a new supported reason to a subspace
* [MsgRemoveReasonEncodeObject](api/desmjs/interfaces/Reports.v1.MsgRemoveReasonEncodeObject.md):
Remove a previously created reason

## Examples

Here are some examples that showcase how to interact with the various Desmos modules.

### Create a profile

Here is an example that showcases how to create a Desmos profile:

```js
import { DesmosClient, GasPrice, Profiles } from "@desmoslabs/desmjs";


const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const saveProfile: Profiles.v3.MsgSaveProfileEncodeObject = {
  typeUrl: Profiles.v3.MsgSaveProfileTypeUrl,
  value: {
    creator: "desmos...",
    bio: "The price of all saiyans",
    dtag: "vegeta",
    nickname: "Vegeta",
    coverPicture: "https://ipfs.io/ipfs/<CID>",
    profilePicture: "https://ipfs.io/ipfs/<CID>",
  }
};

await client.signAndBroadcast(saveProfile.value.creator, [saveProfile], "auto");
```

### Create a relationship

Here is an example that showcases how to create a relationship:

```js
import Long from "long";
import { DesmosClient, GasPrice, Relationships } from "@desmoslabs/desmjs";


const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const createRelationship: Relationships.v1.MsgCreateRelationshipEncodeObject = {
  typeUrl: Relationships.v1.MsgCreateRelationshipTypeUrl,
  value: {
    signer: "desmos...",
    subspaceId: Long.fromNumber(1),
    counterparty: "desmos..."
  }
};

await client.signAndBroadcast(createRelationship.value.signer, [createRelationship], "auto");
```

### Create a subspace

Here is an example that showcases how to create a subspace:

```js
import { DesmosClient, GasPrice, Subspaces } from "@desmoslabs/desmjs";


const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const createSubspace: Subspaces.v3.MsgCreateSubspaceEncodeObject = {
  typeUrl: Subspaces.v3.MsgCreateSubspaceTypeUrl,
  value: {
    creator: "desmos...",
    name: "Desmos subspace",
    owner: "desmos...",
    treasury: "desmos...",
    description: "Subspace where to store my app content"
  }
};

await client.signAndBroadcast(createSubspace.value.creator, [createSubspace], "auto");
```


### Create a post

Here is an example that showcases how to create a post:

```js
import Long from "long";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v3/models";
import { MsgCreatePost } from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";
import { DesmosClient, GasPrice, Posts } from "@desmoslabs/desmjs";

const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const createPost: Posts.v3.MsgCreatePostEncodeObject = {
  typeUrl: Posts.v3.MsgCreatePostTypeUrl,
  value: MsgCreatePost.fromPartial({
    subspaceId: Long.fromNumber(1),
    author: "desmos...",
    text: "post content",
    replySettings: ReplySetting.REPLY_SETTING_EVERYONE
  })
};

await client.signAndBroadcast(createPost.value.author, [createPost], "auto");
```

### React to a post with some text

Here is an example that showcases how to react to a post:

```js
import Long from "long";
import { FreeTextValue } from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import { DesmosClient, GasPrice, Reactions } from "@desmoslabs/desmjs";

const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const addReaction: Reactions.v1.MsgAddReactionEncodeObject = {
  typeUrl:  Reactions.v1.MsgAddReactionTypeUrl,
  value: {
    user: "desmos...",
    postId: Long.fromNumber(1),
    subspaceId: Long.fromNumber(1),
    value: {
      typeUrl: "/desmos.reactions.v1.FreeTextValue",
      value: FreeTextValue.encode({
        text: "nice post",
      }).finish()
    }
  }
};

await client.signAndBroadcast(addReaction.value.user, [addReaction], "auto");
```

### React to a post with a registered reaction

Here is an example that showcases how to react to a post:

```js
import Long from "long";
import { RegisteredReactionValue } from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import { DesmosClient, GasPrice, Reactions } from "@desmoslabs/desmjs";

const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const addReaction: Reactions.v1.MsgAddReactionEncodeObject = {
  typeUrl: Reactions.v1.MsgAddReactionTypeUrl,
  value: {
    user: "desmos...",
    postId: Long.fromNumber(1),
    subspaceId: Long.fromNumber(1),
    value: {
      typeUrl: "/desmos.reactions.v1.RegisteredReactionValue",
      value: RegisteredReactionValue.encode({
        registeredReactionId: 1,
      }).finish()
    }
  }
};

await client.signAndBroadcast(addReaction.value.user, [addReaction], "auto");
```

### Report a user

Here is an example that showcases how to report a user inside a subspace:

```js
import Long from "long";
import { DesmosClient, GasPrice, Reports } from "@desmoslabs/desmjs";
import { UserTarget } from "@desmoslabs/desmjs-types/desmos/reports/v1/models";

const signer =...; // Your signer
const client = await DesmosClient.connectWithSigner("https://rpc.mainnet.desmos.network", signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm")
});

const reportUser: Reports.v1.MsgCreateReportEncodeObject = {
  typeUrl: Reports.v1.MsgCreateReportTypeUrl,
  value: {
    reporter: "desmos...",
    subspaceId: Long.fromNumber(1),
    message: "This user have a bad behaviour",
    reasonsIds: [1],
    target: {
      typeUrl: Reports.v1.UserTargetTypeUrl,
      value: UserTarget.encode({
        user: "desmos..."
      }).finish()
    }
  }
};

await client.signAndBroadcast(reportUser.value.reporter, [reportUser], "auto");
```

### Report another user post

Here is an example that showcases how to report another user post:

```js
import Long from "long";
import { DesmosClient, GasPrice, Reports } from "@desmoslabs/desmjs";
import { PostTarget } from "@desmoslabs/desmjs-types/desmos/reports/v1/models";

const signer =...; // Your signer
const client = await DesmosClient.connectWithSigner("https://rpc.mainnet.desmos.network", signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm")
});

const reportPost: Reports.v1.MsgCreateReportEncodeObject = {
  typeUrl: Reports.v1.MsgCreateReportTypeUrl,
  value: {
    reporter: "desmos...",
    subspaceId: Long.fromNumber(1),
    message: "This user have a bad behaviour",
    reasonsIds: [1],
    target: {
      typeUrl: Reports.v1.PostTargetTypeUrl,
      value: PostTarget.encode({
        postId: Long.fromNumber(1)
      }).finish()
    }
  }
};

await client.signAndBroadcast(reportPost.value.reporter, [reportPost], "auto");
```
