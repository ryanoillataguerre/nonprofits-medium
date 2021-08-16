import BadRequestError from "./BadRequestError";
import CustomError from "./CustomError";
import InternalError from "./InternalError";
import NotFoundError from "./NotFoundError";
import UnauthorizedError from "./UnauthorizedError";

export interface Error
  extends CustomError,
    BadRequestError,
    InternalError,
    NotFoundError,
    UnauthorizedError {}
