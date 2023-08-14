---
sidebar_label: "Querying data from the chain"
sidebar_position: 3
---

# Querying data from the chain

## Overview

To fetch data from the chain you need to have a properly initialized `DesmosClient`.  
Then with the [`querier`](api/desmjs/classes/DesmosClient.md#querier) method you can get
a [`DesmosQueryClient`](api/desmjs/modules.md#desmosqueryclient)
that exposes the methods to query the chain.

Here you can find the functions exposed from `DesmosQueryClient` divided by modules:

* [Profile v3](api/desmjs/interfaces/Profiles.v3.ProfilesV3Extension.md)
* [Relationships v1](api/desmjs/interfaces/Relationships.v1.RelationshipsV1Extension.md)
* [Subspaces v3](api/desmjs/interfaces/Subspaces.v3.SubspacesV3Extension.md)
* [Posts v3](api/desmjs/interfaces/Posts.v3.PostsExtension.md)
* [Reactions v1](api/desmjs/interfaces/Reactions.v1.ReactionsExtension.md)
* [Reports v1](api/desmjs/interfaces/Reports.v1.ReportsV1Extension.md)

**NOTE** Fetching data directly from the chain can be to slow for certain use cases. For such
cases we provide some GraphQL endpoint to query the data from the chain. Here you can find the
endpoints for the [Mainnet](https://github.com/desmos-labs/mainnet#graphql) and
[Testnet](https://github.com/desmos-labs/morpheus/tree/main/morpheus-apollo-3#graphql)

## Examples

Here are some examples that showcase how to query data from the chain.

### Fetch a Desmos profile

Here an example that showcase how to query a Desmos profile from the chain:

```js
import { DesmosClient } from "@desmoslabs/desmjs";

const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");

// Get the profile by address
const profile = await client.querier.profiles.profile("desmos...");
```

### Fetch relationships created from a user

Here an example that showcase how to query all the relationships created from a user inside a subspace:

```js
import { DesmosClient } from "@desmoslabs/desmjs";
import { PageRequest } from "@desmoslabs/desmjs-types/cosmos/base/query/v1beta1/pagination";
import Long from "long";

const ITEM_PER_PAGE = 20;
const SUBSPACE_ID = Long.fromNumber(1);


const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const querier = client.querier;

let pageRequest: PageRequest | undefined = PageRequest.fromPartial({
  limit: ITEM_PER_PAGE
});

do {
  const { relationships, pagination } = await querier.relationships.relationships(SUBSPACE_ID, "desmos...");
  
  // Process the relationships...

  if (pagination !== undefined) {
    // We have another page, use nextKey to fetch the next page.
    // NOTE: Is more efficent to use the key base pagination instead of offset.
    pageRequest = PageRequest.fromPartial({
      key: pagination.nextKey,
      limit: ITEM_PER_PAGE,
    })
  } else {
    // No other pages, set to undefined to exit from the loop.
    pageRequest = undefined;
  }
} while (pageRequest === undefined);
```

### Fetch the details of a subspace

Here an example that showcase how to fetch the details of a subspace:

```js
import { DesmosClient } from "@desmoslabs/desmjs";
import Long from "long";

const SUBSPACE_ID = Long.fromNumber(1);


const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const { subspace } = await client.querier.subspaces.subspace(SUBSPACE_ID);

if (subspace !== undefined) {
  // Subspace found, do operations with it...
}
```

### Fetch a post from a subspace

Here an example that showcase how to fetch a specific post from a subspace:

```js
import { DesmosClient } from "@desmoslabs/desmjs";
import Long from "long";

const SUBSPACE_ID = Long.fromNumber(1);
const POST_ID = Long.fromNumber(1);


const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const post = await client.querier.posts.post(SUBSPACE_ID, POST_ID);

if (post !== undefined) {
  // Subspace found, do operations with it...
}
```


### Iterate over the posts of a subspace

Here an example that showcase how to iterate over alle the posts created inside a subspace:

```js
import { DesmosClient } from "@desmoslabs/desmjs";
import { PageRequest } from "@desmoslabs/desmjs-types/cosmos/base/query/v1beta1/pagination";
import Long from "long";

const ITEM_PER_PAGE = 20;
const SUBSPACE_ID = Long.fromNumber(1);


const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const querier = client.querier;

// Prepare the pagination configs
let pageRequest: PageRequest | undefined = PageRequest.fromPartial({
  limit: ITEM_PER_PAGE
});

do {
  const { posts, pagination } = await querier.posts.subspacePosts(SUBSPACE_ID, pageRequest);
  
  // Process the posts
  
  if (pagination !== undefined) {
    // We have another page, use nextKey to fetch the next page.
    // NOTE: Is more efficent to use the key base pagination instead of offset.
    pageRequest = PageRequest.fromPartial({
      key: pagination.nextKey,
      limit: ITEM_PER_PAGE,
    })
  } else {
    // No other pages, set to undefined to exit from the loop.
    pageRequest = undefined;
  }
} while (pageRequest !== undefined);
```

### Fetch reactions toward a post

Here an example that showcase how to fetch all the reaction toward a post:

```js
import { DesmosClient } from "@desmoslabs/desmjs";
import { PageRequest } from "@desmoslabs/desmjs-types/cosmos/base/query/v1beta1/pagination";
import Long from "long";

const ITEM_PER_PAGE = 20;
const SUBSPACE_ID = Long.fromNumber(1);
const POST_ID = Long.fromNumber(1);


const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const querier = client.querier;

// Prepare the pagination configs
let pageRequest: PageRequest | undefined = PageRequest.fromPartial({
  limit: ITEM_PER_PAGE
});

do {
  const { reactions, pagination } = await querier.reactions.reactions(SUBSPACE_ID, POST_ID, pageRequest);

  // Process the reactions...

  if (pagination !== undefined) {
    // We have another page, use nextKey to fetch the next page.
    // NOTE: Is more efficent to use the key base pagination instead of offset.
    pageRequest = PageRequest.fromPartial({
      key: pagination.nextKey,
      limit: ITEM_PER_PAGE,
    })
  } else {
    // No other pages, set to undefined to exit from the loop.
    pageRequest = undefined;
  }
} while (pageRequest !== undefined);
```

### Fetch reports toward a user

Here an example that showcase how to fetch all the reports toward a user:

```js
import { DesmosClient } from "@desmoslabs/desmjs";
import { PageRequest } from "@desmoslabs/desmjs-types/cosmos/base/query/v1beta1/pagination";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";
import { UserTarget } from "@desmoslabs/desmjs-types/desmos/reports/v1/models";
import Long from "long";

const ITEM_PER_PAGE = 20;
const SUBSPACE_ID = Long.fromNumber(1);


const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const querier = client.querier;

// Prepare the pagination configs
let pageRequest: PageRequest | undefined = PageRequest.fromPartial({
  limit: ITEM_PER_PAGE
});

const target = Any.fromPartial({
  typeUrl: "/desmos.reports.v1.UserTarget",
  value: UserTarget.encode({
    user: "desmos...",
  }).finish(),
});

do {
  const { reports, pagination } = await querier.reports.reports(SUBSPACE_ID, target, undefined, pageRequest);

  // Process the reports...

  if (pagination !== undefined) {
    // We have another page, use nextKey to fetch the next page.
    // NOTE: Is more efficent to use the key base pagination instead of offset.
    pageRequest = PageRequest.fromPartial({
      key: pagination.nextKey,
      limit: ITEM_PER_PAGE,
    })
  } else {
    // No other pages, set to undefined to exit from the loop.
    pageRequest = undefined;
  }
} while (pageRequest !== undefined);
```

### Fetch reports toward a post

Here an example that showcase how to fetch all the reports toward a post:

```js
import { DesmosClient } from "@desmoslabs/desmjs";
import { PageRequest } from "@desmoslabs/desmjs-types/cosmos/base/query/v1beta1/pagination";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";
import { PostTarget } from "@desmoslabs/desmjs-types/desmos/reports/v1/models";
import Long from "long";

const ITEM_PER_PAGE = 20;
const SUBSPACE_ID = Long.fromNumber(1);


const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const querier = client.querier;

// Prepare the pagination configs
let pageRequest: PageRequest | undefined = PageRequest.fromPartial({
  limit: ITEM_PER_PAGE
});

const target = Any.fromPartial({
  typeUrl: "/desmos.reports.v1.PostTarget",
  value: PostTarget.encode({
    postId: Long.fromNumber(1),
  }).finish(),
});

do {
  const { reports, pagination } = await querier.reports.reports(SUBSPACE_ID, target, undefined, pageRequest);

  // Process the reports...

  if (pagination !== undefined) {
    // We have another page, use nextKey to fetch the next page.
    // NOTE: Is more efficent to use the key base pagination instead of offset.
    pageRequest = PageRequest.fromPartial({
      key: pagination.nextKey,
      limit: ITEM_PER_PAGE,
    })
  } else {
    // No other pages, set to undefined to exit from the loop.
    pageRequest = undefined;
  }
} while (pageRequest !== undefined);
```
