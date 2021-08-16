"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CustomError_1 = tslib_1.__importDefault(require("./CustomError"));
class NotFoundError extends CustomError_1.default {
    constructor(message, code, details) {
        super(message, code, details);
        this.name = "NotFoundError";
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map