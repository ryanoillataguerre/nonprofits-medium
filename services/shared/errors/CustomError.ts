class CustomError extends Error {
  constructor(message: string, code: Number, details: Object) {
    super(message || String(code));
    this.code = code;
    this.name = "CustomError";

    if (details) {
      this.details = details;
    }
  }

  code: Number;
  details?: Object;
}

export default CustomError;
