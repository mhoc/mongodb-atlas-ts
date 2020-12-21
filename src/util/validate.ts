import { isLeft } from "fp-ts/lib/Either";
import * as io from "io-ts";
import reporter from "io-ts-reporters";

export function validate<T extends io.TypeC<any>>(spec: T, obj: any): io.TypeOf<T> {
  const result = spec.decode(obj);
  if (isLeft(result)) {
    throw new Error(reporter.report(result)[0]);
  }
  return result.right;
}
