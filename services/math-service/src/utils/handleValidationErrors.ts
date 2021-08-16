import { BadRequestError } from "@nonprofits/shared/errors";
import { Request } from "express";
import { Result, ValidationError, validationResult } from "express-validator";

export default (req: Request) => {
	const validationErrors: Result<ValidationError> = validationResult(req);
	if (!validationErrors.isEmpty()) {
		throw new BadRequestError(
			"Validation Error",
			400,
			validationErrors.array()
		);
	}
};
