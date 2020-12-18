"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterList = void 0;
const io = require("io-ts");
const Link_io_1 = require("../util/Link.io");
const Cluster_io_1 = require("./Cluster.io");
exports.ClusterList = io.type({
    links: io.array(Link_io_1.Link),
    results: io.array(Cluster_io_1.Cluster),
    totalCount: io.number,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2x1c3Rlckxpc3QuaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2x1c3RlcnMvQ2x1c3Rlckxpc3QuaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQTRCO0FBRTVCLDZDQUF1QztBQUN2Qyw2Q0FBdUM7QUFFMUIsUUFBQSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNqQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFJLENBQUM7SUFDckIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQU8sQ0FBQztJQUMxQixVQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU07Q0FDdEIsQ0FBQyxDQUFDIn0=