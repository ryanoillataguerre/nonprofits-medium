import { Request, Response } from "express";
import { Error } from "@nonprofits/shared/errors/types";
import { Logger } from "@nonprofits/shared/types/utils";
import PrettyError from "pretty-error";
import {
	NotFoundError,
	BadRequestError,
	UnauthorizedError,
} from "@nonprofits/shared/errors";

const pe = new PrettyError();
export default (logger: Logger) =>
	(error: Error, req: Request, res: Response) => {
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
