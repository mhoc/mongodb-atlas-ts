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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXBMaXN0LmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Nsb3VkQmFja3Vwcy9DbG91ZEJhY2t1cExpc3QuaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQTRCO0FBRTVCLDZDQUF1QztBQUV2QyxxREFBK0M7QUFFbEMsUUFBQSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3RDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQUksQ0FBQztJQUNyQixPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBVyxDQUFDO0lBQzlCLFVBQVUsRUFBRSxFQUFFLENBQUMsTUFBTTtDQUN0QixDQUFDLENBQUMifQ==