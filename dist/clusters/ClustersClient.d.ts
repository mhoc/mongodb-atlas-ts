import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";
import { ClusterList } from "./ClusterList.io";
import { ListClustersInput } from "./ListClusters.dto";
export declare class ClustersClient {
    private digestAuth;
    constructor(digestAuth: AxiosDigestAuth);
    list(input: ListClustersInput): Promise<io.TypeOf<typeof ClusterList>>;
}
