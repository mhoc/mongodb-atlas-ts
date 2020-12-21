import * as io from "io-ts";

import { Link } from "../util/Link.io";

export const Cluster = io.type({
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
  links: io.array(Link),
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
        maxInstanceSize: io.union([ io.null, io.undefined, io.string ]),
        minInstanceSize: io.union([ io.null, io.undefined, io.string ]),
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
  replicationSpecs: io.array(io.type({
    id: io.string,
    numShards: io.number,
    regionsConfig: io.record(io.string, io.type({
      analyticsNodes: io.number,
      electableNodes: io.number,
      priority: io.number,
      readOnlyNodes: io.number,
    })),
    zoneName: io.string,
  })),
  srvAddress: io.string,
  stateName: io.string,
});
