const express = require('express');
const app = express();

// Serve static files (like index.html)
app.use(express.static('public'));

// Middleware to parse JSON
app.use(express.json());

// Endpoint to handle form data
app.post('/send-text', (req, res) => {
  const receivedText = req.body.text;
  console.log('Received text:', receivedText);
  res.send('Text received: ' + receivedText);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
