"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseUserRole = void 0;
const io = require("io-ts");
exports.DatabaseUserRole = io.type({
    collectionName: io.union([io.string, io.null, io.undefined]),
    databaseName: io.string,
    roleName: io.string,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2VVc2VyUm9sZS5pby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZVVzZXJzL0RhdGFiYXNlVXNlclJvbGUuaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQTRCO0FBRWYsUUFBQSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3RDLGNBQWMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQztJQUM5RCxZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU07SUFDdkIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNO0NBQ3BCLENBQUMsQ0FBQyJ9