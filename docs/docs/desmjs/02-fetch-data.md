# Fetch data from the chain

To fetch data from the chain you need to have a properly initialized `DesmosClient`.  
Then with the [`querier`](../api/classes/desmoslabs_desmjs.DesmosClient.md#querier) method you can get
a `DesmosQueryClient`
that exposes the methods to query the data.

Here you can find the functions exposed from `DesmosQueryClient` divided by modules:

* [Profile](../api/interfaces/desmoslabs_desmjs.ProfilesExtension.md)
* [Relationships](../api/interfaces/desmoslabs_desmjs.RelationshipsExtension.md)
* [Subspaces](../api/interfaces/desmoslabs_desmjs.SubspacesExtension.md)
* [Posts](../api/interfaces/desmoslabs_desmjs.PostsExtension.md)
* [Reactions](../api/interfaces/desmoslabs_desmjs.ReactionsExtension.md)
* [Reports](../api/interfaces/desmoslabs_desmjs.ReportsExtension.md)

***NOTE** Fetching data directly from the chain can be to slow for certain use cases. For such
cases we provide some GraphQL endpoint to query the data from the chain. Here you can find the
endpoints for the [Mainnet](https://github.com/desmos-labs/mainnet#graphql) and
[Testnet](https://github.com/desmos-labs/morpheus/tree/main/morpheus-apollo-3#graphql)

## Examples

Here are some example that showcase how query data from the chain.

### Fetch a Desmos profile

Here an example that showcase how to query a Desmos profile from the chain:

```js
import { DesmosClient } from "@desmoslabs/desmjs";

// You can also use connectWithSigner
const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const querier = client.querier;

// Get the profile by address
const profile = await querier.profiles.profile("desmos...");
```

### Fetch all the posts from a subspace

Here an example that showcase how to fetch all the posts created inside the subspace 1.

```js
import { DesmosClient } from "@desmoslabs/desmjs";

// You can also use connectWithSigner
const client = await DesmosClient.connect("https://rpc.mainnet.desmos.network");
const querier = client.querier;

const ITEM_PER_PAGE = 20;
let pageRequest: PageRequest | undefined = PageRequest.fromPartial({
  limit: ITEM_PER_PAGE
});
do {
  const { posts, pagination } = await querier.posts.subspacePosts(1, pageRequest);
  
  // Do the operations with the posts...
  
  if (pagination !== undefined) {
    // We have another page, use the nextKey to fetch the next page.
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
