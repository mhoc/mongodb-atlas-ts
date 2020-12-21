import * as io from "io-ts";

import { Link } from "../util/Link.io";

import { CloudBackup } from "./CloudBackup.io";

export const CloudBackupsList = io.type({
  links: io.array(Link),
  results: io.array(CloudBackup),
  totalCount: io.number,
});
