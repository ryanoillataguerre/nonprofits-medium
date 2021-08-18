import CustomError from "./CustomError";
declare class InternalError extends CustomError {
    constructor(message: string, code: Number | undefined, details: Object);
}
export default InternalError;
