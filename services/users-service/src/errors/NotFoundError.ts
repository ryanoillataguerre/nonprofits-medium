import CustomError from "./CustomError";

class NotFoundError extends CustomError {
  constructor(message: string, code: Number = 404, details: Object) {
    super(message, code, details);
    this.name = "NotFoundError";
  }
}

export default NotFoundError;
