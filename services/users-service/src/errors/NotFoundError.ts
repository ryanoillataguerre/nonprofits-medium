import CustomError from "./CustomError";

class NotFoundError extends CustomError {
	constructor(message: String, code: Number, details: Object) {
		super(message, code, details);
		this.name = "NotFoundError";
	}
}

export default NotFoundError;
