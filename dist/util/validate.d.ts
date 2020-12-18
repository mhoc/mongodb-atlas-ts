import * as io from "io-ts";
export declare function validate<T extends io.TypeC<any>>(spec: T, obj: any): io.TypeOf<T>;
