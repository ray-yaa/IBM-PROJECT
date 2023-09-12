require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nano = require('nano')(process.env.DATABASE_URL); // CouchDB connection
const apiRoutes = require('./api/routes/apiRoutes'); // Corrected path to apiRoutes.js
const logger = require('./helpers/logger'); // Corrected path to logger.js

//require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rate Limiting Middleware
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.API_RATE_LIMIT,
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api', apiLimiter);

// API Routes
app.use('/api', apiRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

// CouchDB Configuration
const dbName = process.env.DATABASE_NAME;
const db = nano.use(dbName);

// Define a route that fetches data from the database
app.get('/api/fetchId', (req, res) => {
  const { name } = req.query;

  db.view('dashboard', 'dash1a', { group: true }, (err, body) => {
    if (err) {
      console.error('Error fetching ID:', err);
      res.status(500).json({ message: 'Error fetching ID' });
    } else {
      const matchedRow = body.rows.find((row) => row.key === name);
      if (matchedRow) {
        res.status(200).json({ id: matchedRow.value });
      } else {
        res.status(404).json({ message: 'Name not found in the CouchDB view' });
      }
    }
  });
});

