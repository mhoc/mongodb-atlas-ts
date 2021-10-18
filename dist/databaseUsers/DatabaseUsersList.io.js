"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseUsersList = void 0;
const io = require("io-ts");
const Link_io_1 = require("../util/Link.io");
const DatabaseUser_io_1 = require("./DatabaseUser.io");
exports.DatabaseUsersList = io.type({
    links: io.array(Link_io_1.Link),
    results: io.array(DatabaseUser_io_1.DatabaseUser),
    totalCount: io.number,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2VVc2Vyc0xpc3QuaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2VVc2Vycy9EYXRhYmFzZVVzZXJzTGlzdC5pby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0QkFBNEI7QUFFNUIsNkNBQXVDO0FBQ3ZDLHVEQUFpRDtBQUVwQyxRQUFBLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdkMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBSSxDQUFDO0lBQ3JCLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLDhCQUFZLENBQUM7SUFDL0IsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNO0NBQ3RCLENBQUMsQ0FBQyJ9