import * as io from "io-ts";

import { Link } from "../util/Link.io";

export const CloudBackup = io.type({
  cloudProvider: io.string,
  createdAt: io.string,
  expiresAt: io.union([ io.string, io.undefined, io.null ]),
  id: io.string,
  links: io.array(Link),
  mongodVersion: io.string,
  replicaSetName: io.string,
  snapshotType: io.string,
  status: io.string,
  storageSizeBytes: io.number,
  type: io.string,
});
