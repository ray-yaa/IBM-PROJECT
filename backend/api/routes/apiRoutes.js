const express = require('express');
const router = express.Router();
const dbConfig = require('../../config/dbConfig'); // Adjust the path as needed
const validation = require('../../helpers/validation'); // Import validation functions
const logger = require('../../helpers/logger'); // Import your logger module

// Define a route that fetches data from the database
router.get('/fetchId', async (req, res) => {
  try {
    const { name } = req.query;

    // Perform input validation
    if (!validation.isValidName(name)) {
      logger.error('Invalid input: Name is required.');
      return res.status(400).json({ message: 'Invalid input: Name is required.' });
    }

    // Query the database (replace with your database query)
    const response = await db.view('dashboard', 'dash1a', { group: true });

    // Process the response and extract the data you need (replace with your data extraction logic)
    const matchedRow = response.rows.find((row) => row.key === name);

    if (matchedRow) {
      res.status(200).json({ id: matchedRow.value });
    } else {
      logger.error('Name not found in the CouchDB view');
      res.status(404).json({ message: 'Name not found in the CouchDB view' });
    }
  } catch (error) {
    logger.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data from CouchDB.' });
  }
});

module.exports = router;
