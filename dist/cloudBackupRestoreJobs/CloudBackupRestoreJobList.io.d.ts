import * as io from "io-ts";
export declare const CloudBackupRestoreJobList: io.TypeC<{
    links: io.ArrayC<io.TypeC<{
        href: io.StringC;
        rel: io.StringC;
    }>>;
    results: io.ArrayC<io.TypeC<{
        cancelled: io.BooleanC;
        deliveryType: io.StringC;
        deliveryUrl: io.UnionC<[io.NullC, io.UndefinedC, io.ArrayC<io.StringC>]>;
        expired: io.BooleanC;
        expiresAt: io.UnionC<[io.NullC, io.UndefinedC, io.StringC]>;
        failed: io.BooleanC;
        finishedAt: io.UnionC<[io.NullC, io.UndefinedC, io.StringC]>;
        id: io.StringC;
        links: io.ArrayC<io.TypeC<{
            href: io.StringC;
            rel: io.StringC;
        }>>;
        snapshotId: io.StringC;
        targetGroupId: io.UnionC<[io.NullC, io.UndefinedC, io.StringC]>;
        targetClusterName: io.UnionC<[io.NullC, io.UndefinedC, io.StringC]>;
        timestamp: io.StringC;
    }>>;
    totalCount: io.NumberC;
}>;
