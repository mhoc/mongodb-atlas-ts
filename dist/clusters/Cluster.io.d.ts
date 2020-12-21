import * as io from "io-ts";
export declare const Cluster: io.TypeC<{
    autoScaling: io.TypeC<{
        autoIndexingEnabled: io.BooleanC;
        compute: io.TypeC<{
            enabled: io.BooleanC;
            scaleDownEnabled: io.BooleanC;
        }>;
        diskGBEnabled: io.BooleanC;
    }>;
    backupEnabled: io.BooleanC;
    biConnector: io.TypeC<{
        enabled: io.BooleanC;
        readPreference: io.StringC;
    }>;
    clusterType: io.StringC;
    connectionStrings: io.TypeC<{
        standard: io.StringC;
        standardSrv: io.StringC;
    }>;
    createDate: io.StringC;
    diskSizeGB: io.NumberC;
    encryptionAtRestProvider: io.StringC;
    groupId: io.StringC;
    id: io.StringC;
    links: io.ArrayC<io.TypeC<{
        href: io.StringC;
        rel: io.StringC;
    }>>;
    mongoDBMajorVersion: io.StringC;
    mongoDBVersion: io.StringC;
    mongoURI: io.StringC;
    mongoURIUpdated: io.StringC;
    mongoURIWithOptions: io.StringC;
    name: io.StringC;
    numShards: io.NumberC;
    paused: io.BooleanC;
    pitEnabled: io.BooleanC;
    providerBackupEnabled: io.BooleanC;
    providerSettings: io.TypeC<{
        providerName: io.StringC;
        autoScaling: io.TypeC<{
            compute: io.TypeC<{
                maxInstanceSize: io.UnionC<[io.NullC, io.UndefinedC, io.StringC]>;
                minInstanceSize: io.UnionC<[io.NullC, io.UndefinedC, io.StringC]>;
            }>;
        }>;
        diskIOPS: io.NumberC;
        encryptEBSVolume: io.BooleanC;
        instanceSizeName: io.StringC;
        regionName: io.StringC;
        volumeType: io.StringC;
    }>;
    replicationFactor: io.NumberC;
    replicationSpec: io.RecordC<io.StringC, io.TypeC<{
        analyticsNodes: io.NumberC;
        electableNodes: io.NumberC;
        priority: io.NumberC;
        readOnlyNodes: io.NumberC;
    }>>;
    replicationSpecs: io.ArrayC<io.TypeC<{
        id: io.StringC;
        numShards: io.NumberC;
        regionsConfig: io.RecordC<io.StringC, io.TypeC<{
            analyticsNodes: io.NumberC;
            electableNodes: io.NumberC;
            priority: io.NumberC;
            readOnlyNodes: io.NumberC;
        }>>;
        zoneName: io.StringC;
    }>>;
    srvAddress: io.StringC;
    stateName: io.StringC;
}>;
