import { createLogger, format, transports } from "winston";

const {
  combine,
  timestamp,
  printf,
  json,
  colorize,
} = format;

// Custom format for console logging with colors
const consoleLogFormat = combine(
  colorize(),
  printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }),
  ],
});

export default logger;
