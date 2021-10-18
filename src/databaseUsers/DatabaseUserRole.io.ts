import * as io from "io-ts";

export const DatabaseUserRole = io.type({
  collectionName: io.union([ io.string, io.null, io.undefined ]),
  databaseName: io.string,
  roleName: io.string,
});
