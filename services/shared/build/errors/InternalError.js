"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CustomError_1 = tslib_1.__importDefault(require("./CustomError"));
class InternalError extends CustomError_1.default {
    constructor(message, code, details) {
        super(message, code, details);
        this.name = "InternalError";
    }
}
exports.default = InternalError;
//# sourceMappingURL=InternalError.js.map