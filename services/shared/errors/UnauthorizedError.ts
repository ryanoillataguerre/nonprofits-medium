import CustomError from "./CustomError";

class UnauthorizedError extends CustomError {
  constructor(message: string, code: Number, details: Object) {
    super(message, code, details);
    this.name = "UnauthorizedError";
  }
}

export default UnauthorizedError;
