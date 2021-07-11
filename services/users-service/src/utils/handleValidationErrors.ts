import { BadRequestError } from "@pfapp/errors";
import { Request } from "express";
import { validationResult } from "express-validator";

export default (req: Request) => {
	const validationErrors = validationResult(req);
	if (validationErrors.errors.length) {
		throw new BadRequestError("Validation Error", 400, validationErrors.errors);
	}
};
