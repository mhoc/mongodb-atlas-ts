"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClustersClient = void 0;
const validate_1 = require("../util/validate");
const ClusterList_io_1 = require("./ClusterList.io");
class ClustersClient {
    constructor(digestAuth) {
        this.digestAuth = digestAuth;
    }
    async list(input) {
        const { projectId } = input;
        const resp = await this.digestAuth.request({
            method: "GET",
            url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters`,
        });
        return validate_1.validate(ClusterList_io_1.ClusterList, resp.data);
    }
}
exports.ClustersClient = ClustersClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2x1c3RlcnMuY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsdXN0ZXJzL0NsdXN0ZXJzLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrQ0FBNEM7QUFFNUMscURBQStDO0FBRy9DLE1BQWEsY0FBYztJQUV6QixZQUFvQixVQUEyQjtRQUEzQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUF3QjtRQUN4QyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzVCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDekMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsbURBQW1ELFNBQVMsV0FBVztTQUM3RSxDQUFDLENBQUE7UUFDRixPQUFPLG1CQUFRLENBQUMsNEJBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUVGO0FBYkQsd0NBYUMifQ==