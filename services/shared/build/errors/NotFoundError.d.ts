import CustomError from "./CustomError";
declare class NotFoundError extends CustomError {
    constructor(message: string, code: Number, details: Object);
}
export default NotFoundError;
