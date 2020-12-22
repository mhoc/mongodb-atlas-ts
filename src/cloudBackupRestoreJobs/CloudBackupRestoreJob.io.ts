import * as io from "io-ts";

import { Link } from "../util/Link.io";

export const CloudBackupRestoreJob = io.type({
  cancelled: io.union([ io.null, io.undefined, io.boolean ]),
  deliveryType: io.string,
  deliveryUrl: io.union([ io.null, io.undefined, io.array(io.string) ]),
  expired: io.boolean,
  expiresAt: io.union([ io.null, io.undefined, io.string ]),
  failed: io.boolean,
  finishedAt: io.union([ io.null, io.undefined, io.string ]),
  id: io.string,
  links: io.array(Link),
  snapshotId: io.string,
  targetGroupId: io.union([ io.null, io.undefined, io.string ]),
  targetClusterName: io.union([ io.null, io.undefined, io.string ]),
  timestamp: io.string,
});
