import CustomError from "./CustomError";

class UnauthorizedError extends CustomError {
  constructor(message: string, code: Number = 401, details: Object) {
    super(message, code, details);
    this.name = "UnauthorizedError";
  }
}

export default UnauthorizedError;
