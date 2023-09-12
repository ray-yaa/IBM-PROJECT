import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [responseFromCouchDB, setResponseFromCouchDB] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5984/headcount/_design/dashboard/_view/dash5a?group=true', {
        auth: {
          username: 'reya',
          password: 'watch',
        }
      })
      .then((response) => {
        // Process the response and extract the data you need
        const responseData = response.data; // Modify this based on your actual response structure
        setResponseFromCouchDB(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setResponseFromCouchDB('Error fetching data from CouchDB.');
      });
  }, []); // Fetch data when the component mounts

  return (
    <div className="App">
      <h1>CouchDB Response</h1>
      <div>
        <strong>Response from CouchDB:</strong>
        <pre>{JSON.stringify(responseFromCouchDB, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
