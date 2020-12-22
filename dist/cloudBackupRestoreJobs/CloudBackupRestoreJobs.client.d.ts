import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";
import { CreateCloudBackupRestoreDownloadJobInput } from "./CloudBackupRestoreJob.createDownload.dto";
import { GetCloudBackupRestoreJobInput } from "./CloudBackupRestoreJob.get.dto";
import { CloudBackupRestoreJob } from "./CloudBackupRestoreJob.io";
import { ListCloudBackupRestoreJobsInput } from "./CloudBackupRestoreJob.list.dto";
import { CloudBackupRestoreJobList } from "./CloudBackupRestoreJobList.io";
export declare class CloudBackupRestoreJobsClient {
    private digestAuth;
    constructor(digestAuth: AxiosDigestAuth);
    createDownload(input: CreateCloudBackupRestoreDownloadJobInput): Promise<io.TypeOf<typeof CloudBackupRestoreJob>>;
    get(input: GetCloudBackupRestoreJobInput): Promise<io.TypeOf<typeof CloudBackupRestoreJob>>;
    list(input: ListCloudBackupRestoreJobsInput): Promise<io.TypeOf<typeof CloudBackupRestoreJobList>>;
}
