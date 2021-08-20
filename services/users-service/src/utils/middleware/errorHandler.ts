import { BadRequestError, UnauthorizedError, NotFoundError } from "@errors";
import { Request, Response } from "express";
import PrettyError from "pretty-error";
import { Logger } from "@nptypes";

const pe = new PrettyError();
export default (logger: Logger) => (error: any, req: Request, res: Response) => {
	logger.error(`${req.method} - ${req.path}`);
	logger.error(
		process.env.NODE_ENV === "production" ? error : pe.render(error)
	);

	const { name, message, details } = error;

	if (error instanceof NotFoundError) {
		return res.status(404).send({
			name,
			message,
			details,
		});
	}

	if (error instanceof BadRequestError) {
		return res.status(400).send({
			name,
			message,
			details,
		});
	}

	if (error instanceof UnauthorizedError) {
		return res.status(403).send({
			name,
			message,
			details,
		});
	}

	return res.status(500).send({
		name,
		message,
		details,
	});
};
