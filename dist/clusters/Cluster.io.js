"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = void 0;
const io = require("io-ts");
const Link_io_1 = require("../util/Link.io");
exports.Cluster = io.type({
    autoScaling: io.type({
        autoIndexingEnabled: io.boolean,
        compute: io.type({
            enabled: io.boolean,
            scaleDownEnabled: io.boolean,
        }),
        diskGBEnabled: io.boolean,
    }),
    backupEnabled: io.boolean,
    biConnector: io.type({
        enabled: io.boolean,
        readPreference: io.string,
    }),
    clusterType: io.string,
    connectionStrings: io.type({
        standard: io.string,
        standardSrv: io.string,
    }),
    createDate: io.string,
    diskSizeGB: io.number,
    encryptionAtRestProvider: io.string,
    groupId: io.string,
    id: io.string,
    links: io.array(Link_io_1.Link),
    mongoDBMajorVersion: io.string,
    mongoDBVersion: io.string,
    mongoURI: io.string,
    mongoURIUpdated: io.string,
    mongoURIWithOptions: io.string,
    name: io.string,
    numShards: io.number,
    paused: io.boolean,
    pitEnabled: io.boolean,
    providerBackupEnabled: io.boolean,
    providerSettings: io.type({
        providerName: io.string,
        autoScaling: io.type({
            compute: io.type({
                maxInstanceSize: io.union([io.null, io.undefined, io.string]),
                minInstanceSize: io.union([io.null, io.undefined, io.string]),
            }),
        }),
        diskIOPS: io.number,
        encryptEBSVolume: io.boolean,
        instanceSizeName: io.string,
        regionName: io.string,
        volumeType: io.string,
    }),
    replicationFactor: io.number,
    replicationSpec: io.record(io.string, io.type({
        analyticsNodes: io.number,
        electableNodes: io.number,
        priority: io.number,
        readOnlyNodes: io.number,
    })),
    replicationSpecs: io.type({
        id: io.string,
        numShards: io.number,
        regionsConfig: io.record(io.string, io.type({
            analyticsNodes: io.number,
            electableNodes: io.number,
            priority: io.number,
            readOnlyNodes: io.number,
        })),
    }),
    srvAddress: io.string,
    stateName: io.string,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2x1c3Rlci5pby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbHVzdGVycy9DbHVzdGVyLmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUE0QjtBQUU1Qiw2Q0FBdUM7QUFFMUIsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUM3QixXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNuQixtQkFBbUIsRUFBRSxFQUFFLENBQUMsT0FBTztRQUMvQixPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTztZQUNuQixnQkFBZ0IsRUFBRSxFQUFFLENBQUMsT0FBTztTQUM3QixDQUFDO1FBQ0YsYUFBYSxFQUFFLEVBQUUsQ0FBQyxPQUFPO0tBQzFCLENBQUM7SUFDRixhQUFhLEVBQUUsRUFBRSxDQUFDLE9BQU87SUFDekIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDbkIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPO1FBQ25CLGNBQWMsRUFBRSxFQUFFLENBQUMsTUFBTTtLQUMxQixDQUFDO0lBQ0YsV0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNO0lBQ3RCLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDekIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1FBQ25CLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTTtLQUN2QixDQUFDO0lBQ0YsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNO0lBQ3JCLFVBQVUsRUFBRSxFQUFFLENBQUMsTUFBTTtJQUNyQix3QkFBd0IsRUFBRSxFQUFFLENBQUMsTUFBTTtJQUNuQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU07SUFDbEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNO0lBQ2IsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBSSxDQUFDO0lBQ3JCLG1C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