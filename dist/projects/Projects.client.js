"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsClient = void 0;
const ProjectList_io_1 = require("./ProjectList.io");
const validate_1 = require("../util/validate");
class ProjectsClient {
    constructor(digestAuth) {
        this.digestAuth = digestAuth;
    }
    async list() {
        const resp = await this.digestAuth.request({
            method: "GET",
            url: "https://cloud.mongodb.com/api/atlas/v1.0/groups",
        });
        return validate_1.validate(ProjectList_io_1.ProjectList, resp.data);
    }
}
exports.ProjectsClient = ProjectsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdHMuY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb2plY3RzL1Byb2plY3RzLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxxREFBK0M7QUFDL0MsK0NBQTRDO0FBRTVDLE1BQWEsY0FBYztJQUV6QixZQUFvQixVQUEyQjtRQUEzQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLElBQUk7UUFDZixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3pDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLGlEQUFpRDtTQUN2RCxDQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFRLENBQUMsNEJBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUVGO0FBWkQsd0NBWUMifQ==