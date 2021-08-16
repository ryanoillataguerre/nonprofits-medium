import CustomError from "./CustomError";

class InternalError extends CustomError {
  constructor(message: string, code: Number, details: Object) {
    super(message, code, details);
    this.name = "InternalError";
  }
}

export default InternalError;
