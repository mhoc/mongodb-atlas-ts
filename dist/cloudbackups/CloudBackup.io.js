"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBackup = void 0;
const io = require("io-ts");
const Link_io_1 = require("../util/Link.io");
exports.CloudBackup = io.type({
    cloudProvider: io.string,
    createdAt: io.string,
    expiresAt: io.string,
    id: io.string,
    links: io.array(Link_io_1.Link),
    mongodVersion: io.string,
    replicaSetName: io.string,
    snapshotType: io.string,
    status: io.string,
    storageSizeBytes: io.number,
    type: io.string,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRCYWNrdXAuaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWRCYWNrdXBzL0Nsb3VkQmFja3VwLmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUE0QjtBQUU1Qiw2Q0FBdUM7QUFFMUIsUUFBQSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNqQyxhQUFhLEVBQUUsRUFBRSxDQUFDLE1BQU07SUFDeEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNO0lBQ3BCLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTTtJQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU07SUFDYixLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFJLENBQUM7SUFDckIsYUFBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNO0lBQ3hCLGNBQWMsRUFBRSxFQUFFLENBQUMsTUFBTTtJQUN6QixZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU07SUFDdkIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxNQUFNO0lBQzNCLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtDQUNoQixDQUFDLENBQUMifQ==