import { BadRequestError } from "@errors";
import { handleValidationErrors } from "@utils";
import { Request, Response, NextFunction, Router } from "express";
import { body } from "express-validator";

const router: Router = Router();

// API
router.post(
	"/signup",
	[body("email").exists().isEmail(), body("password").exists()],
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			handleValidationErrors(req);
			throw new BadRequestError("Throwing a 404 error here", undefined, {
				hello: "world",
			});
			res.status(200).send({
				success: true,
			});
		} catch (err) {
			next(err);
		}
	}
);

router.post("/login", async (_: Request, res: Response, next: NextFunction) => {
	try {
		res.status(200).send({
			success: true,
		});
	} catch (err) {
		next(err);
	}
});

export default router;
