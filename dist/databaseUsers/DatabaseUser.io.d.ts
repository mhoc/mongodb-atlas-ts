import * as io from "io-ts";
export declare const DatabaseUser: io.TypeC<{
    awsIAMType: io.UnionC<[io.StringC, io.NullC, io.UndefinedC]>;
    databaseName: io.UnionC<[io.StringC, io.NullC, io.UndefinedC]>;
    deleteAfterDate: io.UnionC<[io.StringC, io.NullC, io.UndefinedC]>;
    groupId: io.StringC;
    labels: io.ArrayC<io.UnknownC>;
    ldapAuthType: io.UnionC<[io.StringC, io.NullC, io.UndefinedC]>;
    links: io.ArrayC<io.TypeC<{
        href: io.StringC;
        rel: io.StringC;
    }>>;
    roles: io.ArrayC<io.TypeC<{
        collectionName: io.UnionC<[io.StringC, io.NullC, io.UndefinedC]>;
        databaseName: io.StringC;
        roleName: io.StringC;
    }>>;
    scopes: io.ArrayC<io.TypeC<{
        name: io.StringC;
        type: io.StringC;
    }>>;
    username: io.StringC;
    x509Type: io.UnionC<[io.StringC, io.NullC, io.UndefinedC]>;
}>;
