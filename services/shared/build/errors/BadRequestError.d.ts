import CustomError from "./CustomError";
declare class BadRequestError extends CustomError {
    constructor(message: string, code: Number, details: Object);
}
export default BadRequestError;
