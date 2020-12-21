"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBackupsClient = void 0;
const validate_1 = require("../util/validate");
const CloudBackupsList_io_1 = require("./CloudBackupsList.io");
class CloudBackupsClient {
    constructor(digestAuth) {
        this.digestAuth = digestAuth;
    }
    async list(input) {
        const { clusterName, projectId } = input;
        const resp = await this.digestAuth.request({
            method: "GET",
            url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}/backup/snapshots`,
        });
        return validate_1.validate(CloudBackupsList_io_1.CloudBackupsList, resp.data);
    }
}
exports.CloudBackupsClient = CloudBackupsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXBzQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Nsb3VkYmFja3Vwcy9DbG91ZEJhY2t1cHNDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsK0NBQTRDO0FBRzVDLCtEQUF5RDtBQUV6RCxNQUFhLGtCQUFrQjtJQUU3QixZQUFvQixVQUEyQjtRQUEzQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUE0QjtRQUM1QyxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUN6QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3pDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLG1EQUFtRCxTQUFTLGFBQWEsV0FBVyxtQkFBbUI7U0FDN0csQ0FBQyxDQUFBO1FBQ0YsT0FBTyxtQkFBUSxDQUFDLHNDQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBRUY7QUFiRCxnREFhQyJ9