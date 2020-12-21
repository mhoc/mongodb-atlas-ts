"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const Either_1 = require("fp-ts/lib/Either");
const io_ts_reporters_1 = require("io-ts-reporters");
function validate(spec, obj) {
    const result = spec.decode(obj);
    if (Either_1.isLeft(result)) {
        throw new Error(io_ts_reporters_1.default.report(result)[0]);
    }
    return result.right;
}
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMEM7QUFFMUMscURBQXVDO0FBRXZDLFNBQWdCLFFBQVEsQ0FBMEIsSUFBTyxFQUFFLEdBQVE7SUFDakUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0M7SUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDdEIsQ0FBQztBQU5ELDRCQU1DIn0=