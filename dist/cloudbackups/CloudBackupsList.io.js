"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBackupsList = void 0;
const io = require("io-ts");
const Link_io_1 = require("../util/Link.io");
const CloudBackup_io_1 = require("./CloudBackup.io");
exports.CloudBackupsList = io.type({
    links: io.array(Link_io_1.Link),
    results: io.array(CloudBackup_io_1.CloudBackup),
    totalCount: io.number,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXBzTGlzdC5pby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZGJhY2t1cHMvQ2xvdWRCYWNrdXBzTGlzdC5pby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0QkFBNEI7QUFFNUIsNkNBQXVDO0FBRXZDLHFEQUErQztBQUVsQyxRQUFBLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdEMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBSSxDQUFDO0lBQ3JCLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUFXLENBQUM7SUFDOUIsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNO0NBQ3RCLENBQUMsQ0FBQyJ9