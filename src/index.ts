import AxiosDigestAuth from "@mhoc/axios-digest-auth";

import { CloudBackupRestoreJobsClient } from "./cloudBackupRestoreJobs/CloudBackupRestoreJobs.client";
import { CloudBackupsClient } from "./cloudBackups/CloudBackups.client";
import { ClustersClient } from "./clusters/Clusters.client";
import { ProjectsClient } from "./projects/Projects.client";

export interface AtlasClientOpts {
  privateKey: string;
  publicKey: string;
}

export class AtlasClient {
  /**
   * this is provided so you can form manual untyped calls to the atlas api for endpoints that 
   * aren't implemented in this package yet. Check out https://github.com/mhoc/axios-digest-auth
   * for information on how to use it.
   */
  public readonly axiosDigestAuth: AxiosDigestAuth;

  public readonly cloudBackupRestoreJobs: CloudBackupRestoreJobsClient;
  public readonly cloudBackups: CloudBackupsClient;
  public readonly clusters: ClustersClient;
  public readonly projects: ProjectsClient;

  constructor({ privateKey, publicKey }: AtlasClientOpts) {
    this.axiosDigestAuth = new AxiosDigestAuth({
      password: privateKey,
      username: publicKey,
    });
    this.cloudBackupRestoreJobs = new CloudBackupRestoreJobsClient(this.axiosDigestAuth);
    this.cloudBackups = new CloudBackupsClient(this.axiosDigestAuth);
    this.clusters = new ClustersClient(this.axiosDigestAuth);
    this.projects = new ProjectsClient(this.axiosDigestAuth);
  }

}
