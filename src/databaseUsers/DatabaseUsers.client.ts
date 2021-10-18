import AxiosDigestAuth from "@mhoc/axios-digest-auth";
import * as io from "io-ts";

import { validate } from "../util/validate";

import { DatabaseUsersList } from "./DatabaseUsersList.io";
import { ListDatabaseUsersInput } from "./DatabaseUsers.list.dto";

export class DatabaseUsersClient {

  constructor(private digestAuth: AxiosDigestAuth) {}

  public async list(input: ListDatabaseUsersInput): Promise<io.TypeOf<typeof DatabaseUsersList>> {
    const { projectId } = input;
    const resp = await this.digestAuth.request({
      method: "GET",
      url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/databaseUsers`,
    });
    return validate(DatabaseUsersList, resp.data);
  }

}
