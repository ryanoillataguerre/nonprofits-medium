import CustomError from "./CustomError";
declare class UnauthorizedError extends CustomError {
    constructor(message: string, code: Number, details: Object);
}
export default UnauthorizedError;
