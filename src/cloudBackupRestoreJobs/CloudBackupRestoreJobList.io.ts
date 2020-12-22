import * as io from "io-ts";

import { Link } from "../util/Link.io";

import { CloudBackupRestoreJob } from "./CloudBackupRestoreJob.io";

export const CloudBackupRestoreJobList = io.type({
  links: io.array(Link),
  results: io.array(CloudBackupRestoreJob),
  totalCount: io.number,
});
