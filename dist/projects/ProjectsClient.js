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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdHNDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJvamVjdHMvUHJvamVjdHNDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EscURBQStDO0FBQy9DLCtDQUE0QztBQUU1QyxNQUFhLGNBQWM7SUFFekIsWUFBb0IsVUFBMkI7UUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBRyxDQUFDO0lBRTVDLEtBQUssQ0FBQyxJQUFJO1FBQ2YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxpREFBaUQ7U0FDdkQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxtQkFBUSxDQUFDLDRCQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FFRjtBQVpELHdDQVlDIn0=