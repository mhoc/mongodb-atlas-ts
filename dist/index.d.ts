import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import { ClustersClient } from "./clusters/ClustersClient";
import { ProjectsClient } from "./projects/ProjectsClient";
export interface AtlasClientOpts {
    privateKey: string;
    publicKey: string;
}
export declare class AtlasClient {
    /**
     * this is provided so you can form manual untyped calls to the atlas api for endpoints that
     * aren't implemented in this package yet. Check out https://github.com/mhoc/axios-digest-auth
     * for information on how to use it.
     */
    readonly axiosDigestAuth: AxiosDigestAuth;
    readonly clusters: ClustersClient;
    readonly projects: ProjectsClient;
    constructor({ privateKey, publicKey }: AtlasClientOpts);
}
