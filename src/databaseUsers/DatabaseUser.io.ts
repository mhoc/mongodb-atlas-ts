import * as io from "io-ts";

import { Link } from "../util/Link.io";

import { DatabaseUserRole } from "./DatabaseUserRole.io";
import { DatabaseUserScope } from "./DatabaseUserScope.io";

export const DatabaseUser = io.type({
  awsIAMType: io.union([ io.string, io.null, io.undefined ]),
  databaseName: io.union([ io.string, io.null, io.undefined ]),
  deleteAfterDate: io.union([ io.string, io.null, io.undefined ]),
  groupId: io.string,
  labels: io.array(io.unknown),
  ldapAuthType: io.union([ io.string, io.null, io.undefined ]),
  links: io.array(Link),
  roles: io.array(DatabaseUserRole),
  scopes: io.array(DatabaseUserScope),
  username: io.string,
  x509Type: io.union([ io.string, io.null, io.undefined ]),
});
