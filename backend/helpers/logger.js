const winston = require('winston');

// Define the logger configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
  ],
});

// Log an info message
function info(message) {
  logger.info(message);
}

// Log an error message
function error(message) {
  logger.error(message);
}

module.exports = {
  info,
  error,
};
