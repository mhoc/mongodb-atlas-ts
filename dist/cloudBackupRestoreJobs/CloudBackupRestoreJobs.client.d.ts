import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";
import { CreateCloudBackupRestoreDownloadJobInput } from "./CloudBackupRestoreJob.createDownload.dto";
import { CloudBackupRestoreJob } from "./CloudBackupRestoreJob.io";
export declare class CloudBackupRestoreJobsClient {
    private digestAuth;
    constructor(digestAuth: AxiosDigestAuth);
    createDownload(input: CreateCloudBackupRestoreDownloadJobInput): Promise<io.TypeOf<typeof CloudBackupRestoreJob>>;
}
