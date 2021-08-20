import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 1500,
  max: 15,
});

export default rateLimiter;
