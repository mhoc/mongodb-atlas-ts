import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";
import { ProjectList } from "./ProjectList.io";
export declare class ProjectsClient {
    private digestAuth;
    constructor(digestAuth: AxiosDigestAuth);
    list(): Promise<io.TypeOf<typeof ProjectList>>;
}
