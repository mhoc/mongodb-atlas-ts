import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";
import { DatabaseUsersList } from "./DatabaseUsersList.io";
import { ListDatabaseUsersInput } from "./DatabaseUsers.list.dto";
export declare class DatabaseUsersClient {
    private digestAuth;
    constructor(digestAuth: AxiosDigestAuth);
    list(input: ListDatabaseUsersInput): Promise<io.TypeOf<typeof DatabaseUsersList>>;
}
