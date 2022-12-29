# Perform transactions

## Overview

In order to be able to perform transaction you need to have a `DesmosClient` instance
initialized with a `Signer` through the 
[`connectWithSigner`](../api/classes/desmoslabs_desmjs.DesmosClient.md#connectwithsigner) function.  

```js
import { DesmosClient } from "@desmoslabs/desmjs";


const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: "0.01udsm",
});
```

With a properly initialized `DesmosClient` you can use the 
[`signAndBroadcast`](../api/classes/desmoslabs_desmjs.DesmosClient.md#signandbroadcast) method to sign the messages
and broadcast it to the chain.  

```js
// Address of who is performing the transaction, can be obtained from the Signer with the getAccounts method.
const signerAddress = "desmos..." 

// Message to be sent to the chain.
const messages: EncodeObject[] = []

// Fee paid to perform the operations, if == "auto" the fees will be automatically estimaed.
const fees: number | StdFee | "auto" = "auto";

// Optional memo that will be attached to the transaction
const memo: string | undefined = undefined;

await client.signandbroadcast(signerAddress, messages, "auto", memo);
```

If you need to just sign a list of messages that needs to be sent later you can use the 
[`sign`](../api/classes/desmoslabs_desmjs.DesmosClient.md#sign) method.

## Signers

The `@desmoslabs/desmjs` provides a set of signers that cane be used, here you can find the list:

1. [`OfflineSignerAdapter`](../api/classes/desmoslabs_desmjs.OfflineSignerAdapter.md): This can be used to create
a signer from a 12/24 words mnemonic or any signer that implements the `@cosmjs/OfflineAminoSigner` or 
`@cosmjs/OfflineDirectSigner`
2. [`PrivateKeySigner`](../api/classes/desmoslabs_desmjs.PrivateKeySigner.md): This can be used to create 
a signer from a private key.

If none of this signer meet your needs you can implement a custom signer by extending the 
[`Signer`](../api/classes/desmoslabs_desmjs.Signer.md) class.  
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

* [MsgSaveProfileEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgSaveProfileEncodeObject): 
Creates/updates the user's Desmos profile.
* [MsgDeleteProfileEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgDeleteProfileEncodeObject): 
Deletes the user's Desmos profile.
* [MsgLinkApplicationEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgLinkApplicationEncodeObject): 
Link a centralized application to the user's Desmos profile
* [MsgUnlinkApplicationEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgUnlinkApplicationEncodeObject): 
Unlink a centralized application from the user's Desmos profile
* [MsgLinkChainAccountEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgLinkChainAccountEncodeObject): 
Link an external blockchain address to the user's Desmos profile
* [MsgUnlinkChainAccountEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgUnlinkChainAccountEncodeObject):
Unlink an external blockchain address from the user's Desmos profile
* [MsgRequestDTagTransferEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgRequestDTagTransferEncodeObject):
Create a DTag transfer request
* [MsgAcceptDTagTransferRequestEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgAcceptDTagTransferRequestEncodeObject):
Accept a DTag transfer request
* [MsgRefuseDTagTransferRequestEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgRefuseDTagTransferRequestEncodeObject):
Refuse a DTag transfer request
* [MsgCancelDTagTransferRequestEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgCancelDTagTransferRequestEncodeObject):
Cancel a DTag transfer initiate from the user

### Relationships

* [MsgCreateRelationshipEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgCreateRelationshipEncodeObject):
Create a relationship between two users (A follow B)
* [MsgDeleteRelationshipEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgDeleteRelationshipEncodeObject):
Delete a relationship between two users (A unfollow B)
* [MsgBlockUserEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgBlockUserEncodeObject): 
Block a user
* [MsgUnblockUserEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgUnblockUserEncodeObject):
Unblock a user

### Subspaces

* [MsgCreateSubspaceEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgCreateSubspaceEncodeObject):
Creates a subspace
* [MsgEditSubspaceEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgEditSubspaceEncodeObject):
Edit a previously created subspace
* [MsgDeleteSubspaceEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgDeleteSubspaceEncodeObject):
Delete a subspace
* [MsgCreateSectionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgCreateSectionEncodeObject):
Create a new section
* [MsgDeleteSectionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgDeleteSectionEncodeObject):
Delete a section
* [MsgEditSectionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgEditSectionEncodeObject):
Edit a previously created section
* [MsgMoveSectionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgMoveSectionEncodeObject):
Move a section to another section
* [MsgCreateUserGroupEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgCreateUserGroupEncodeObject):
Create a user group
* [MsgEditUserGroupEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgEditUserGroupEncodeObject):
Edit a previously created user group
* [MsgDeleteUserGroupEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgDeleteUserGroupEncodeObject):
Delete a user group
* [MsgMoveUserGroupEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgMoveUserGroupEncodeObject):
Move a user group to another section
* [MsgAddUserToUserGroupEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgAddUserToUserGroupEncodeObject): 
Add a user to a user group
* [MsgRemoveUserFromUserGroupEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgRemoveUserFromUserGroupEncodeObject): 
Remove a user from a user group
* [MsgSetUserPermissionsEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgSetUserPermissionsEncodeObject):
Set the permissions of a user inside a subspace
* [MsgSetUserGroupPermissionsEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgSetUserGroupPermissionsEncodeObject):
Set the permissions that all members of a group will inherit

### Posts

* [MsgCreatePostEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgCreatePostEncodeObject):
Create a new post
* [MsgDeletePostEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgDeletePostEncodeObject):
Delete a post
* [MsgEditPostEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgEditPostEncodeObject):
Edit a previously created post
* [MsgAddPostAttachmentEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgAddPostAttachmentEncodeObject):
Add an attachment to a post
* [MsgRemovePostAttachmentEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgRemovePostAttachmentEncodeObject):
Remove an attachment from a post
* [MsgAnswerPollEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgAnswerPollEncodeObject):
Answer a poll

### Reactions

* [MsgAddReactionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgAddReactionEncodeObject):
Add a reaction to a post
* [MsgRemoveReactionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgRemoveReactionEncodeObject):
Remove a reaction from a post
* [MsgAddRegisteredReactionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgAddRegisteredReactionEncodeObject):
Register a new supported reaction for a subspace
* [MsgRemoveRegisteredReactionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgRemoveRegisteredReactionEncodeObject):
Remove a registered reaction from a subspace
* [MsgEditRegisteredReactionEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgEditRegisteredReactionEncodeObject):
Edit a previously registered reaction
* [MsgSetReactionsParamsEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgSetReactionsParamsEncodeObject):
Set the reactions params for a subspace

### Reports

* [MsgCreateReportEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgCreateReportEncodeObject):
Create a report inside a subspace
* [MsgDeleteReportEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgDeleteReportEncodeObject):
Delete a previously created report from a subspace
* [MsgSupportStandardReasonEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgSupportStandardReasonEncodeObject):
Support one reason from the module params
* [MsgAddReasonEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgAddReasonEncodeObject):
Add a new supported reason to a subspace
* [MsgRemoveReasonEncodeObject](../api/interfaces/desmoslabs_desmjs.MsgRemoveReasonEncodeObject):
Remove a previously created reason

## Examples

Here are some example that showcase how to interact with the various Desmos modules.

### Create a profile

Here an example that showcase how to create a Desmos profile:

```js
import { DesmosClient, GasPrice, MsgSaveProfileEncodeObject } from "@desmoslabs/desmjs";


const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const saveProfile: MsgSaveProfileEncodeObject = {
  typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
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

Here an example that showcase how to create a relationships:

```js
import Long from "long";
import { DesmosClient, GasPrice, MsgCreateRelationshipEncodeObject } from "@desmoslabs/desmjs";


const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const createRelationship: MsgCreateRelationshipEncodeObject = {
  typeUrl: "/desmos.relationships.v1.MsgCreateRelationship",
  value: {
    signer: "desmos...",
    subspaceId: Long.fromNumber(1),
    counterparty: "desmos..."
  }
};

await client.signAndBroadcast(createRelationship.value.signer, [createRelationship], "auto");
```

### Create a subspace

Here an example that showcase how to create a subspace:

```js
import { DesmosClient, GasPrice, MsgCreateSubspaceEncodeObject } from "@desmoslabs/desmjs";


const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const createSubspace: MsgCreateSubspaceEncodeObject = {
  typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace",
  value: {
    creator: "desmos...",
    name: "Desmos subspace",
    owner: "desmos...",
    treasury: "desmos...",
    description: "Subspace where to store my app contente"
  }
};

await client.signAndBroadcast(createSubspace.value.creator, [createSubspace], "auto");
```


### Create a post

Here an example that showcase how to create a post:

```js
import Long from "long";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import { MsgCreatePost } from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";
import { DesmosClient, GasPrice, MsgCreatePostEncodeObject } from "@desmoslabs/desmjs";

const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const createPost: MsgCreatePostEncodeObject = {
  typeUrl: "/desmos.posts.v2.MsgCreatePost",
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

Here an example that showcase how to react to a post:

```js
import Long from "long";
import { FreeTextValue } from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import { DesmosClient, GasPrice, MsgAddReactionEncodeObject } from "@desmoslabs/desmjs";

const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const addReaction: MsgAddReactionEncodeObject = {
  typeUrl: "/desmos.reactions.v1.MsgAddReaction",
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

Here an example that showcase how to react to a post:

```js
import Long from "long";
import { RegisteredReactionValue } from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import { DesmosClient, GasPrice, MsgAddReactionEncodeObject } from "@desmoslabs/desmjs";

const signer = ...; // Your signer
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

const addReaction: MsgAddReactionEncodeObject = {
  typeUrl: "/desmos.reactions.v1.MsgAddReaction",
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

Here an example that showcase how to report a user inside a subspace:

```js
import Long from "long";
import { DesmosClient, GasPrice, MsgCreateReportEncodeObject } from "@desmoslabs/desmjs";
import { UserTarget } from "@desmoslabs/desmjs-types/desmos/reports/v1/models";

const signer =...; // Your signer
const client = await DesmosClient.connectWithSigner("https://rpc.mainnet.desmos.network", signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm")
});

const reportUser: MsgCreateReportEncodeObject = {
  typeUrl: "/desmos.reports.v1.MsgCreateReport",
  value: {
    reporter: "desmos...",
    subspaceId: Long.fromNumber(1),
    message: "This user have a bad behaviour",
    reasonsIds: [1],
    target: {
      typeUrl: "/desmos.reports.v1.UserTarget",
      value: UserTarget.encode({
        user: "desmos..."
      }).finish()
    }
  }
};

await client.signAndBroadcast(reportUser.value.reporter, [reportUser], "auto");
```

### Report another user post

Here an example that showcase how to report another user post:

```js
import Long from "long";
import { DesmosClient, GasPrice, MsgCreateReportEncodeObject } from "@desmoslabs/desmjs";
import { PostTarget } from "@desmoslabs/desmjs-types/desmos/reports/v1/models";

const signer =...; // Your signer
const client = await DesmosClient.connectWithSigner("https://rpc.mainnet.desmos.network", signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm")
});

const reportPost: MsgCreateReportEncodeObject = {
  typeUrl: "/desmos.reports.v1.MsgCreateReport",
  value: {
    reporter: "desmos...",
    subspaceId: Long.fromNumber(1),
    message: "This user have a bad behaviour",
    reasonsIds: [1],
    target: {
      typeUrl: "/desmos.reports.v1.UserTarget",
      value: PostTarget.encode({
        postId: Long.fromNumber(1)
      }).finish()
    }
  }
};

await client.signAndBroadcast(reportPost.value.reporter, [reportPost], "auto");
```
