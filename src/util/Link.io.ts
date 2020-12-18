import * as io from "io-ts";

export const Link = io.type({
  href: io.string,
  rel: io.string,
});
