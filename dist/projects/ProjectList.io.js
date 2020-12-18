"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectList = void 0;
const io = require("io-ts");
const Project_io_1 = require("./Project.io");
const Link_io_1 = require("../util/Link.io");
exports.ProjectList = io.type({
    links: io.array(Link_io_1.Link),
    results: io.array(Project_io_1.Project),
    totalCount: io.number,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdExpc3QuaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJvamVjdHMvUHJvamVjdExpc3QuaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQTRCO0FBRTVCLDZDQUF1QztBQUN2Qyw2Q0FBdUM7QUFFMUIsUUFBQSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNqQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFJLENBQUM7SUFDckIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQU8sQ0FBQztJQUMxQixVQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU07Q0FDdEIsQ0FBQyxDQUFDIn0=