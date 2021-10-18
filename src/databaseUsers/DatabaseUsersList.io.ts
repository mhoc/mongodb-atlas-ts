import * as io from "io-ts";

import { Link } from "../util/Link.io";
import { DatabaseUser } from "./DatabaseUser.io";

export const DatabaseUsersList = io.type({
  links: io.array(Link),
  results: io.array(DatabaseUser),
  totalCount: io.number,
});
