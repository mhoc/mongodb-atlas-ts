const assert = require("assert");
const { AtlasClient } = require("../dist");

const publicKey = process.env.ATLAS_PUBLIC_KEY;
const privateKey = process.env.ATLAS_PRIVATE_KEY;
if (!publicKey || !privateKey) {
  throw new Error("must provide environment variables ATLAS_PUBLIC_KEY & ATLAS_PRIVATE_KEY");
}

describe("DatabaseUsersClient", function() {
  const client = new AtlasClient({ privateKey, publicKey });

  describe("#list()", function() {
    it("should list at least one database user", async function() {
      const projectsResult = await client.projects.list();
      // pick the first project at "random"
      const project = projectsResult.results[0];
      const users = await client.databaseUsers.list({ projectId: project.id });
      console.log(users);
      assert.ok(
        users.results.length > 0 && users.totalCount > 0,
        `found zero users in the ${project.id} project`,
      );
    });
  });
});
