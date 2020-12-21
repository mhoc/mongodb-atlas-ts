# `@mhoc/mongodb-atlas`

This is a type-safe API wrapper around the [MongoDB Atlas API](https://docs.atlas.mongodb.com/api) for NodeJS.

## Disclaimers

- Use at your own risk.
- This is very pre-release, not well tested, the API could change at any time, and its missing a lot of functionality. 
- Mongo, MongoDB, and Atlas are registered trademarks of MongoDB, Inc. This project is not affiliated with them in any way.
- This library **is not** for querying data in a Mongo database; its for accessing deployed clusters and associated resources on [MongoDB's Atlas service](https://www.mongodb.com/cloud/atlas).

## Installing

```
npm i @mhoc/mongodb-atlas
```

## Usage

```ts
import { AtlasClient } from "@mhoc/mongodb-atlas";

const atlasClient = new AtlasClient({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
});
const projects = await atlasClient.projects.list();
```

## Supported APIs

- `.clusters.list({ projectId })`: list clusters in a project.
- `.projects.list()`: list projects the api key has access to.
