const rateLimit = require('express-rate-limit');

// Define the rate limiting options
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.API_RATE_LIMIT, // Maximum number of requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

module.exports = apiLimiter;
