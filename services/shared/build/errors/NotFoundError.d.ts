import CustomError from "./CustomError";
declare class NotFoundError extends CustomError {
    constructor(message: string, code: Number | undefined, details: Object);
}
export default NotFoundError;
