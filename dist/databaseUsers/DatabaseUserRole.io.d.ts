import * as io from "io-ts";
export declare const DatabaseUserRole: io.TypeC<{
    collectionName: io.UnionC<[io.StringC, io.NullC, io.UndefinedC]>;
    databaseName: io.StringC;
    roleName: io.StringC;
}>;
