import CustomError from "./CustomError";
declare class InternalError extends CustomError {
    constructor(message: string, code: Number, details: Object);
}
export default InternalError;
