import CustomError from "./CustomError";
declare class BadRequestError extends CustomError {
    constructor(message: string, code: Number | undefined, details: Object);
}
export default BadRequestError;
