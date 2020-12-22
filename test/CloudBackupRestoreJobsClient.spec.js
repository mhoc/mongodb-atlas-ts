const assert = require("assert");
const { AtlasClient } = require("../dist");

const publicKey = process.env.ATLAS_PUBLIC_KEY;
const privateKey = process.env.ATLAS_PRIVATE_KEY;
if (!publicKey || !privateKey) {
  throw new Error("must provide environment variables ATLAS_PUBLIC_KEY & ATLAS_PRIVATE_KEY");
}

describe("CloudBackupRestoreJobsClient", function() {
  const client = new AtlasClient({ privateKey, publicKey });

  describe("#createDownload()", function() {
    it("should create a cloud backup", async function() {
      const projectsResult = await client.projects.list();
      // pick a project that isn't named "production" lol
      const project = projectsResult.results.find(r => r.name.toLowerCase() !== "production");
      if (!project) {
        throw new Error("no viable test project found");
      }
      const clustersResult = await client.clusters.list({ projectId: project.id });
      // pick a cluster, any cluster, why not
      const cluster = clustersResult.results[0];
      const cloudBackupsResult = await client.cloudBackups.list({
        clusterName: cluster.name,
        projectId: project.id,
      });
      // pick the most recent cloud backup on this page.
      const backupsSorted = cloudBackupsResult.results.sort((a, b) => a.createdAt - b.createdAt);
      const backup = backupsSorted[backupsSorted.length - 1];
      await client.cloudBackupRestoreJobs.createDownload({
        clusterName: cluster.name,
        projectId: project.id,
        snapshotId: backup.id,
      });
      assert.ok(
        cloudBackupsResult.results.length > 0 && cloudBackupsResult.totalCount > 0,
        "found zero cloud backups"
      );
    });
  });

});
