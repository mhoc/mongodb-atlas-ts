import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";
import { ListCloudBackupsInput } from "./ListCloudBackups.dto";
import { CloudBackupsList } from "./CloudBackupsList.io";
export declare class CloudBackupsClient {
    private digestAuth;
    constructor(digestAuth: AxiosDigestAuth);
    list(input: ListCloudBackupsInput): Promise<io.TypeOf<typeof CloudBackupsList>>;
}
