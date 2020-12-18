import * as io from "io-ts";

import { Link } from "../util/Link.io";

export const Project = io.type({
  clusterCount: io.number,
  created: io.string,
  id: io.string,
  links: io.array(Link),
  name: io.string,
  orgId: io.string,
});
