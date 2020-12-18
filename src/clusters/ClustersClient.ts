import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";

import { validate } from "../util/validate";
import { ClusterList } from "./ClusterList.io";
import { ListClustersInput } from "./ListClusters.dto";

export class ClustersClient {

  constructor(private digestAuth: AxiosDigestAuth) {}

  public async list(input: ListClustersInput): Promise<io.TypeOf<typeof ClusterList>> {
    const { projectId } = input;
    const resp = await this.digestAuth.request({
      method: "GET",
      url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters`,
    })
    return validate(ClusterList, resp.data);
  }

}
