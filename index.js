// Import required modules
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

// Define the port number
const port = 3000;

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

