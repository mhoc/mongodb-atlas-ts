"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBackupRestoreJobsClient = void 0;
const validate_1 = require("../util/validate");
const CloudBackupRestoreJob_io_1 = require("./CloudBackupRestoreJob.io");
class CloudBackupRestoreJobsClient {
    constructor(digestAuth) {
        this.digestAuth = digestAuth;
    }
    async createDownload(input) {
        const { clusterName, projectId, snapshotId } = input;
        const body = { deliveryType: "download", snapshotId };
        const response = await this.digestAuth.request({
            data: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
            method: "POST",
            url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}/backup/restoreJobs`,
        });
        return validate_1.validate(CloudBackupRestoreJob_io_1.CloudBackupRestoreJob, response.data);
    }
}
exports.CloudBackupRestoreJobsClient = CloudBackupRestoreJobsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXBSZXN0b3JlSm9icy5jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWRCYWNrdXBSZXN0b3JlSm9icy9DbG91ZEJhY2t1cFJlc3RvcmVKb2JzLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrQ0FBNEM7QUFHNUMseUVBQW1FO0FBRW5FLE1BQWEsNEJBQTRCO0lBRXZDLFlBQW9CLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQUcsQ0FBQztJQUU1QyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQStDO1FBQ3pFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNyRCxNQUFNLElBQUksR0FBRyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDdEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLG1EQUFtRCxTQUFTLGFBQWEsV0FBVyxxQkFBcUI7U0FDL0csQ0FBQyxDQUFDO1FBQ0gsT0FBTyxtQkFBUSxDQUFDLGdEQUFxQixFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBRUY7QUFoQkQsb0VBZ0JDIn0=