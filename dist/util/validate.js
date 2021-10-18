"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const Either_1 = require("fp-ts/lib/Either");
const io_ts_reporters_1 = require("io-ts-reporters");
function validate(spec, obj) {
    const result = spec.decode(obj);
    if ((0, Either_1.isLeft)(result)) {
        throw new Error(io_ts_reporters_1.default.report(result)[0]);
    }
    return result.right;
}
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMEM7QUFFMUMscURBQXVDO0FBRXZDLFNBQWdCLFFBQVEsQ0FBMEIsSUFBTyxFQUFFLEdBQVE7SUFDakUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLElBQUEsZUFBTSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN0QixDQUFDO0FBTkQsNEJBTUMifQ==