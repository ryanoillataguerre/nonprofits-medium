import rateLimit from "express-rate-limit";

const searchRateLimiter = rateLimit({
	windowMs: 1500,
	max: 15,
});

export default searchRateLimiter;
