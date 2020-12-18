"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const Either_1 = require("fp-ts/lib/Either");
const PathReporter_1 = require("io-ts/lib/PathReporter");
function validate(spec, obj) {
    const result = spec.decode(obj);
    if (Either_1.isLeft(result)) {
        throw new Error(`${spec.name}: ${PathReporter_1.PathReporter.report(result).reduce((p, c, i) => i === 0 ? c : `${p}, ${c}`)}`);
    }
    return result.right;
}
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMEM7QUFFMUMseURBQXNEO0FBRXRELFNBQWdCLFFBQVEsQ0FBMEIsSUFBTyxFQUFFLEdBQVE7SUFDakUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqSDtJQUNELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN0QixDQUFDO0FBTkQsNEJBTUMifQ==