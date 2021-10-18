"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBackupRestoreJobsClient = void 0;
const validate_1 = require("../util/validate");
const CloudBackupRestoreJob_io_1 = require("./CloudBackupRestoreJob.io");
const CloudBackupRestoreJobList_io_1 = require("./CloudBackupRestoreJobList.io");
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
        return (0, validate_1.validate)(CloudBackupRestoreJob_io_1.CloudBackupRestoreJob, response.data);
    }
    async get(input) {
        const { cloudBackupRestoreJobId, clusterName, projectId } = input;
        const response = await this.digestAuth.request({
            method: "GET",
            url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}/backup/restoreJobs/${cloudBackupRestoreJobId}`,
        });
        return (0, validate_1.validate)(CloudBackupRestoreJob_io_1.CloudBackupRestoreJob, response.data);
    }
    async list(input) {
        const { clusterName, projectId } = input;
        const response = await this.digestAuth.request({
            method: "GET",
            url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}/backup/restoreJobs`,
        });
        return (0, validate_1.validate)(CloudBackupRestoreJobList_io_1.CloudBackupRestoreJobList, response.data);
    }
}
exports.CloudBackupRestoreJobsClient = CloudBackupRestoreJobsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXBSZXN0b3JlSm9icy5jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWRCYWNrdXBSZXN0b3JlSm9icy9DbG91ZEJhY2t1cFJlc3RvcmVKb2JzLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrQ0FBNEM7QUFJNUMseUVBQW1FO0FBRW5FLGlGQUEyRTtBQUUzRSxNQUFhLDRCQUE0QjtJQUV2QyxZQUFvQixVQUEyQjtRQUEzQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUErQztRQUN6RSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ3RELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUMvQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxtREFBbUQsU0FBUyxhQUFhLFdBQVcscUJBQXFCO1NBQy9HLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBQSxtQkFBUSxFQUFDLGdEQUFxQixFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFvQztRQUNuRCxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsRSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQzdDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLG1EQUFtRCxTQUFTLGFBQWEsV0FBVyx1QkFBdUIsdUJBQXVCLEVBQUU7U0FDMUksQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFBLG1CQUFRLEVBQUMsZ0RBQXFCLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQXNDO1FBQ3RELE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDN0MsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsbURBQW1ELFNBQVMsYUFBYSxXQUFXLHFCQUFxQjtTQUMvRyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUEsbUJBQVEsRUFBQyx3REFBeUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUVGO0FBbENELG9FQWtDQyJ9