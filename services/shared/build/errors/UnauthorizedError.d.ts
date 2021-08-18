import CustomError from "./CustomError";
declare class UnauthorizedError extends CustomError {
    constructor(message: string, code: Number | undefined, details: Object);
}
export default UnauthorizedError;
