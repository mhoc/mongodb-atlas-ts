import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";

import { ProjectList } from "./ProjectList.io";
import { validate } from "../util/validate";

export class ProjectsClient {

  constructor(private digestAuth: AxiosDigestAuth) {}

  public async list(): Promise<io.TypeOf<typeof ProjectList>> {
    const resp = await this.digestAuth.request({
      method: "GET",
      url: "https://cloud.mongodb.com/api/atlas/v1.0/groups",
    });
    return validate(ProjectList, resp.data);
  }

}
