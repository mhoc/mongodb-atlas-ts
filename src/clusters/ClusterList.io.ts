import * as io from "io-ts";

import { Link } from "../util/Link.io";
import { Cluster } from "./Cluster.io";

export const ClusterList = io.type({
  links: io.array(Link),
  results: io.array(Cluster),
  totalCount: io.number,
});
