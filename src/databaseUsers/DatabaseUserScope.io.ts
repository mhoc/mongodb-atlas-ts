import * as io from "io-ts";

export const DatabaseUserScope = io.type({
  name: io.string,
  type: io.string,
});
