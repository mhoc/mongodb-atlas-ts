"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtlasClient = void 0;
const axios_digest_auth_1 = require("@mhoc/axios-digest-auth");
const CloudBackupsClient_1 = require("./cloudbackups/CloudBackupsClient");
const ClustersClient_1 = require("./clusters/ClustersClient");
const ProjectsClient_1 = require("./projects/ProjectsClient");
class AtlasClient {
    constructor({ privateKey, publicKey }) {
        this.axiosDigestAuth = new axios_digest_auth_1.default({
            password: privateKey,
            username: publicKey,
        });
        this.cloudBackups = new CloudBackupsClient_1.CloudBackupsClient(this.axiosDigestAuth);
        this.clusters = new ClustersClient_1.ClustersClient(this.axiosDigestAuth);
        this.projects = new ProjectsClient_1.ProjectsClient(this.axiosDigestAuth);
    }
}
exports.AtlasClient = AtlasClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQXNEO0FBRXRELDBFQUF1RTtBQUN2RSw4REFBMkQ7QUFDM0QsOERBQTJEO0FBTzNELE1BQWEsV0FBVztJQVl0QixZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBbUI7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDJCQUFlLENBQUM7WUFDekMsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLFNBQVM7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FFRjtBQXRCRCxrQ0FzQkMifQ==