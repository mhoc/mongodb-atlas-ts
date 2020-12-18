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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2x1c3RlcnNDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2x1c3RlcnMvQ2x1c3RlcnNDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsK0NBQTRDO0FBQzVDLHFEQUErQztBQUcvQyxNQUFhLGNBQWM7SUFFekIsWUFBb0IsVUFBMkI7UUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBRyxDQUFDO0lBRTVDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBd0I7UUFDeEMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUM1QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3pDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLG1EQUFtRCxTQUFTLFdBQVc7U0FDN0UsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxtQkFBUSxDQUFDLDRCQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FFRjtBQWJELHdDQWFDIn0=