"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CustomError_1 = tslib_1.__importDefault(require("./CustomError"));
class BadRequestError extends CustomError_1.default {
    constructor(message, code = 400, details) {
        super(message, code, details);
        this.name = "BadRequestError";
    }
}
exports.default = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map