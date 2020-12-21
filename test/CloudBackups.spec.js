const assert = require("assert");
const { AtlasClient } = require("../dist");

const publicKey = process.env.ATLAS_PUBLIC_KEY;
const privateKey = process.env.ATLAS_PRIVATE_KEY;
if (!publicKey || !privateKey) {
  throw new Error("must provide environment variables ATLAS_PUBLIC_KEY & ATLAS_PRIVATE_KEY");
}

describe("CloudBackupsClient", function() {
  const client = new AtlasClient({ privateKey, publicKey });

  describe("#list()", function() {
    it("should list at least one cloud backup", async function() {
      const projectsResult = await client.projects.list();
      // pick the first project at "random"
      const project = projectsResult.results[0];
      const clustersResult = await client.clusters.list({
        projectId: project.id,
      });
      // pick the first cluster at "random"
      // truly, these tests are the least brittle
      const cluster = clustersResult.results[0];
      const cloudBackupsResult = await client.cloudBackups.list({
        clusterName: cluster.name,
        projectId: project.id,
      });
      assert.ok(
        cloudBackupsResult.results.length > 0 && cloudBackupsResult.totalCount > 0,
        "found zero cloud backups"
      );
    });
  });
});
