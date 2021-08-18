import { Request, Response, NextFunction, Router } from "express";
import { body } from "express-validator";
import { handleValidationErrors } from "@nonprofits/shared/utils";

const router: Router = Router();

// API
router.post(
	"/signup",
	[body("email").exists().isEmail(), body("password").exists()],
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			handleValidationErrors(req);
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
