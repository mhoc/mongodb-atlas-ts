import { isLeft } from "fp-ts/lib/Either";
import * as io from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";

export function validate<T extends io.TypeC<any>>(spec: T, obj: any): io.TypeOf<T> {
  const result = spec.decode(obj);
  if (isLeft(result)) {
    throw new Error(`${spec.name}: ${PathReporter.report(result).reduce((p, c, i) => i === 0 ? c : `${p}, ${c}`)}`);
  }
  return result.right;
}
