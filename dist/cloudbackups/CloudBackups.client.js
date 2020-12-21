"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBackupsClient = void 0;
const validate_1 = require("../util/validate");
const CloudBackupList_io_1 = require("./CloudBackupList.io");
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
        return validate_1.validate(CloudBackupList_io_1.CloudBackupsList, resp.data);
    }
}
exports.CloudBackupsClient = CloudBackupsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXBzLmNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZEJhY2t1cHMvQ2xvdWRCYWNrdXBzLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrQ0FBNEM7QUFFNUMsNkRBQXdEO0FBR3hELE1BQWEsa0JBQWtCO0lBRTdCLFlBQW9CLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQUcsQ0FBQztJQUU1QyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQTRCO1FBQzVDLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDekMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsbURBQW1ELFNBQVMsYUFBYSxXQUFXLG1CQUFtQjtTQUM3RyxDQUFDLENBQUE7UUFDRixPQUFPLG1CQUFRLENBQUMscUNBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FFRjtBQWJELGdEQWFDIn0=