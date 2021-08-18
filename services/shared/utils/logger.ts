import winston from "winston";

const logger = winston.createLogger({
	level: process.env.WINSTON_LOGGER_LEVEL || "info",
	format: winston.format.simple(),
	transports: [new winston.transports.Console()],
});

export default logger;
