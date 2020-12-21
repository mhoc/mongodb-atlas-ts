import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";

import { validate } from "../util/validate";

import { ListCloudBackupsInput } from "./ListCloudBackups.dto";
import { CloudBackupsList } from "./CloudBackupsList.io";

export class CloudBackupsClient {

  constructor(private digestAuth: AxiosDigestAuth) {}

  public async list(input: ListCloudBackupsInput): Promise<io.TypeOf<typeof CloudBackupsList>> {
    const { clusterName, projectId } = input;
    const resp = await this.digestAuth.request({
      method: "GET",
      url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}/backup/snapshots`,
    })
    return validate(CloudBackupsList, resp.data);
  }

}
