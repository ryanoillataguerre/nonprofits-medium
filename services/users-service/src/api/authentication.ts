import { Request, Response, NextFunction, Router } from "express";

const router: Router = Router();

// API
router.post(
	"/signup",
	async (req: Request, res: Response, next: NextFunction) => {
		try {
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
