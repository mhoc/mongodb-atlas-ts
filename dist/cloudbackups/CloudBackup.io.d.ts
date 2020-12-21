import * as io from "io-ts";
export declare const CloudBackup: io.TypeC<{
    cloudProvider: io.StringC;
    createdAt: io.StringC;
    expiresAt: io.StringC;
    id: io.StringC;
    links: io.ArrayC<io.TypeC<{
        href: io.StringC;
        rel: io.StringC;
    }>>;
    mongodVersion: io.StringC;
    replicaSetName: io.StringC;
    snapshotType: io.StringC;
    status: io.StringC;
    storageSizeBytes: io.NumberC;
    type: io.StringC;
}>;
