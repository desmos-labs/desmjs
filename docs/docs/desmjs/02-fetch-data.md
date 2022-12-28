# Fetch data from the chain

To fetch data from the chain you need to have a properly initialized `DesmosClient`.  
Then with the [`query`](../api/classes/desmoslabs_desmjs.DesmosClient.md#query) method you can get a `DesmosQueryClient`
that exposes the methods to query the data.  

Here you can find the functions exposed from `DesmosQueryClient` divided by modules:
* [Profile](../api/interfaces/desmoslabs_desmjs.ProfilesExtension.md)
* [Relationships](../api/interfaces/desmoslabs_desmjs.RelationshipsExtension.md)
* [Subspaces](../api/interfaces/desmoslabs_desmjs.SubspacesExtension.md)
* [Posts](../api/interfaces/desmoslabs_desmjs.PostsExtension.md)
* [Reactions](../api/interfaces/desmoslabs_desmjs.ReactionsExtension.md)
* [Reports](../api/interfaces/desmoslabs_desmjs.ReportsExtension.md)

## Fetch a Desmos profile

Here an example of how to query a Desmos profile from the chain

