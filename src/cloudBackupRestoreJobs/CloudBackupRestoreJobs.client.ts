import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";

import { validate } from "../util/validate";

import { CreateCloudBackupRestoreDownloadJobInput } from "./CloudBackupRestoreJob.createDownload.dto";
import { CloudBackupRestoreJob } from "./CloudBackupRestoreJob.io";

export class CloudBackupRestoreJobsClient {

  constructor(private digestAuth: AxiosDigestAuth) {}

  public async createDownload(input: CreateCloudBackupRestoreDownloadJobInput): Promise<io.TypeOf<typeof CloudBackupRestoreJob>> {
    const { clusterName, projectId, snapshotId } = input;
    const body = { deliveryType: "download", snapshotId };
    const response = await this.digestAuth.request({
      data: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      method: "POST",
      url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}/backup/restoreJobs`,
    });
    return validate(CloudBackupRestoreJob, response.data);
  }

}
