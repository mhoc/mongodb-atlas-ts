const assert = require("assert");
const { AtlasClient } = require("../dist");

const publicKey = process.env.ATLAS_PUBLIC_KEY;
const privateKey = process.env.ATLAS_PRIVATE_KEY;
if (!publicKey || !privateKey) {
  throw new Error("must provide environment variables ATLAS_PUBLIC_KEY & ATLAS_PRIVATE_KEY");
}

describe("ClustersClient", function() {
  const client = new AtlasClient({ privateKey, publicKey });

  describe("#list()", function() {
    it("should list at least one cluster in a project", async function() {
      const projectsResult = await client.projects.list();
      // pick the first project at "random"
      const project = projectsResult.results[0];
      const clustersResult = await client.clusters.list({
        projectId: project.id,
      });
      assert.ok(
        clustersResult.results.length > 0 && clustersResult.totalCount > 0,
        "found zero clusters"
      );
    });
  });
});
