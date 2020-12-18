"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtlasClient = void 0;
const axios_digest_auth_1 = require("@mhoc/axios-digest-auth");
const ClustersClient_1 = require("./clusters/ClustersClient");
const ProjectsClient_1 = require("./projects/ProjectsClient");
class AtlasClient {
    constructor({ privateKey, publicKey }) {
        this.axiosDigestAuth = new axios_digest_auth_1.default({
            password: privateKey,
            username: publicKey,
        });
        this.clusters = new ClustersClient_1.ClustersClient(this.axiosDigestAuth);
        this.projects = new ProjectsClient_1.ProjectsClient(this.axiosDigestAuth);
    }
}
exports.AtlasClient = AtlasClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQXNEO0FBRXRELDhEQUEyRDtBQUMzRCw4REFBMkQ7QUFPM0QsTUFBYSxXQUFXO0lBV3RCLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFtQjtRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksMkJBQWUsQ0FBQztZQUN6QyxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsU0FBUztTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FFRjtBQXBCRCxrQ0FvQkMifQ==