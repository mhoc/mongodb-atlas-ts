"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBackupRestoreJobList = void 0;
const io = require("io-ts");
const Link_io_1 = require("../util/Link.io");
const CloudBackupRestoreJob_io_1 = require("./CloudBackupRestoreJob.io");
exports.CloudBackupRestoreJobList = io.type({
    links: io.array(Link_io_1.Link),
    results: io.array(CloudBackupRestoreJob_io_1.CloudBackupRestoreJob),
    totalCount: io.number,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXBSZXN0b3JlSm9iTGlzdC5pby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZEJhY2t1cFJlc3RvcmVKb2JzL0Nsb3VkQmFja3VwUmVzdG9yZUpvYkxpc3QuaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQTRCO0FBRTVCLDZDQUF1QztBQUV2Qyx5RUFBbUU7QUFFdEQsUUFBQSx5QkFBeUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQy9DLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQUksQ0FBQztJQUNyQixPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxnREFBcUIsQ0FBQztJQUN4QyxVQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU07Q0FDdEIsQ0FBQyxDQUFDIn0=