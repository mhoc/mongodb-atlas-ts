"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtlasClient = void 0;
const axios_digest_auth_1 = require("@mhoc/axios-digest-auth");
const CloudBackupRestoreJobs_client_1 = require("./cloudBackupRestoreJobs/CloudBackupRestoreJobs.client");
const CloudBackups_client_1 = require("./cloudBackups/CloudBackups.client");
const Clusters_client_1 = require("./clusters/Clusters.client");
const DatabaseUsers_client_1 = require("./databaseUsers/DatabaseUsers.client");
const Projects_client_1 = require("./projects/Projects.client");
class AtlasClient {
    constructor({ privateKey, publicKey }) {
        this.axiosDigestAuth = new axios_digest_auth_1.default({
            password: privateKey,
            username: publicKey,
        });
        this.cloudBackupRestoreJobs = new CloudBackupRestoreJobs_client_1.CloudBackupRestoreJobsClient(this.axiosDigestAuth);
        this.cloudBackups = new CloudBackups_client_1.CloudBackupsClient(this.axiosDigestAuth);
        this.clusters = new Clusters_client_1.ClustersClient(this.axiosDigestAuth);
        this.databaseUsers = new DatabaseUsers_client_1.DatabaseUsersClient(this.axiosDigestAuth);
        this.projects = new Projects_client_1.ProjectsClient(this.axiosDigestAuth);
    }
}
exports.AtlasClient = AtlasClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQXNEO0FBRXRELDBHQUFzRztBQUN0Ryw0RUFBd0U7QUFDeEUsZ0VBQTREO0FBQzVELCtFQUEyRTtBQUMzRSxnRUFBNEQ7QUFPNUQsTUFBYSxXQUFXO0lBY3RCLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFtQjtRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksMkJBQWUsQ0FBQztZQUN6QyxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsU0FBUztTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSw0REFBNEIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHdDQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDBDQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUVGO0FBMUJELGtDQTBCQyJ9