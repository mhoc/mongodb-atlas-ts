"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const io = require("io-ts");
const Link_io_1 = require("../util/Link.io");
exports.Project = io.type({
    clusterCount: io.number,
    created: io.string,
    id: io.string,
    links: io.array(Link_io_1.Link),
    name: io.string,
    orgId: io.string,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdC5pby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9qZWN0cy9Qcm9qZWN0LmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUE0QjtBQUU1Qiw2Q0FBdUM7QUFFMUIsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUM3QixZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU07SUFDdkIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNO0lBQ2xCLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTTtJQUNiLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQUksQ0FBQztJQUNyQixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07SUFDZixLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU07Q0FDakIsQ0FBQyxDQUFDIn0=