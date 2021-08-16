declare class CustomError extends Error {
    constructor(message: string, code: Number, details: Object);
    code: Number;
    details?: Object;
}
export default CustomError;
