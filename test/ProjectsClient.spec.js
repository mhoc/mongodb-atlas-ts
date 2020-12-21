const assert = require("assert");
const { AtlasClient } = require("../dist");

const publicKey = process.env.ATLAS_PUBLIC_KEY;
const privateKey = process.env.ATLAS_PRIVATE_KEY;
if (!publicKey || !privateKey) {
  throw new Error("must provide environment variables ATLAS_PUBLIC_KEY & ATLAS_PRIVATE_KEY");
}

describe("ProjectsClient", function() {
  const client = new AtlasClient({ privateKey, publicKey });

  describe("#list()", function() {
    it("should list at least one project", async function() {
      const projectsResult = await client.projects.list();
      assert.ok(
        projectsResult.results.length > 0 && projectsResult.totalCount > 0,
        "found zero projects"
      );
    });
  });
});
