const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define your endpoint
app.get('/api/myendpoint', (req, res) => {
  // Handle the request and send a response
  res.send('Hello, this is your endpoint response!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
