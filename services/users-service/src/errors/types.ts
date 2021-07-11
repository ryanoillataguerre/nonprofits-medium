import BadRequestError from "@pfapp/errors/BadRequestError";
import CustomError from "@pfapp/errors/CustomError";
import InternalError from "@pfapp/errors/InternalError";
import NotFoundError from "@pfapp/errors/NotFoundError";
import UnauthorizedError from "@pfapp/errors/UnauthorizedError";

export interface Error
	extends CustomError,
		BadRequestError,
		InternalError,
		NotFoundError,
		UnauthorizedError {}
