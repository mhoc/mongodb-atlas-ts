"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseUsersClient = void 0;
const validate_1 = require("../util/validate");
const DatabaseUsersList_io_1 = require("./DatabaseUsersList.io");
class DatabaseUsersClient {
    constructor(digestAuth) {
        this.digestAuth = digestAuth;
    }
    async list(input) {
        const { projectId } = input;
        const resp = await this.digestAuth.request({
            method: "GET",
            url: `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/databaseUsers`,
        });
        return (0, validate_1.validate)(DatabaseUsersList_io_1.DatabaseUsersList, resp.data);
    }
}
exports.DatabaseUsersClient = DatabaseUsersClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2VVc2Vycy5jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2VVc2Vycy9EYXRhYmFzZVVzZXJzLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrQ0FBNEM7QUFFNUMsaUVBQTJEO0FBRzNELE1BQWEsbUJBQW1CO0lBRTlCLFlBQW9CLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQUcsQ0FBQztJQUU1QyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQTZCO1FBQzdDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxtREFBbUQsU0FBUyxnQkFBZ0I7U0FDbEYsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFBLG1CQUFRLEVBQUMsd0NBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FFRjtBQWJELGtEQWFDIn0=