// Load the http module to create an HTTP server.
const http = require('http');

// Define the port to listen on
const port = process.env.PORT || 3000;

// Create an HTTP server and listen for requests
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
