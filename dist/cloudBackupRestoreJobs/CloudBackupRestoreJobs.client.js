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
        return validate_1.validate(CloudBackupRestoreJob_io_1.CloudBackupRestoreJob, response.data);
    }
    async get(input) {
        const { cloudBackupRestoreJobId, clusterName, projectId } = input;
        const response = await this.digestAuth.request({
            method: "GET",
            url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}/backup/restoreJobs/${cloudBackupRestoreJobId}`,
        });
        return validate_1.validate(CloudBackupRestoreJob_io_1.CloudBackupRestoreJob, response.data);
    }
    async list(input) {
        const { clusterName, projectId } = input;
        const response = await this.digestAuth.request({
            method: "GET",
            url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}/backup/restoreJobs`,
        });
        return validate_1.validate(CloudBackupRestoreJobList_io_1.CloudBackupRestoreJobList, response.data);
    }
}
exports.CloudBackupRestoreJobsClient = CloudBackupRestoreJobsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXBSZXN0b3JlSm9icy5jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWRCYWNrdXBSZXN0b3JlSm9icy9DbG91ZEJhY2t1cFJlc3RvcmVKb2JzLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrQ0FBNEM7QUFJNUMseUVBQW1FO0FBRW5FLGlGQUEyRTtBQUUzRSxNQUFhLDRCQUE0QjtJQUV2QyxZQUFvQixVQUEyQjtRQUEzQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUErQztRQUN6RSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ3RELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUMvQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxtREFBbUQsU0FBUyxhQUFhLFdBQVcscUJBQXFCO1NBQy9HLENBQUMsQ0FBQztRQUNILE9BQU8sbUJBQVEsQ0FBQyxnREFBcUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBb0M7UUFDbkQsTUFBTSxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxtREFBbUQsU0FBUyxhQUFhLFdBQVcsdUJBQXVCLHVCQUF1QixFQUFFO1NBQzFJLENBQUMsQ0FBQztRQUNILE9BQU8sbUJBQVEsQ0FBQyxnREFBcUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBc0M7UUFDdEQsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDekMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxtREFBbUQsU0FBUyxhQUFhLFdBQVcscUJBQXFCO1NBQy9HLENBQUMsQ0FBQztRQUNILE9BQU8sbUJBQVEsQ0FBQyx3REFBeUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUVGO0FBbENELG9FQWtDQyJ9