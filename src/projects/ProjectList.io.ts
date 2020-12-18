import * as io from "io-ts";

import { Project } from "./Project.io";
import { Link } from "../util/Link.io";

export const ProjectList = io.type({
  links: io.array(Link),
  results: io.array(Project),
  totalCount: io.number,
});
