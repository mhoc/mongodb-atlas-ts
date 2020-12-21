import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";
import { CloudBackupsList } from "./CloudBackupList.io";
import { ListCloudBackupsInput } from "./CloudBackups.list.dto";
export declare class CloudBackupsClient {
    private digestAuth;
    constructor(digestAuth: AxiosDigestAuth);
    list(input: ListCloudBackupsInput): Promise<io.TypeOf<typeof CloudBackupsList>>;
}
