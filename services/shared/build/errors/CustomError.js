"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, code, details) {
        super(message || String(code));
        this.code = code;
        this.name = "CustomError";
        if (details) {
            this.details = details;
        }
    }
}
exports.default = CustomError;
//# sourceMappingURL=CustomError.js.map