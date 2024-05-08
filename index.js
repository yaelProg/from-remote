// Import required modules
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') { // Added line
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found\n');
    }
});

// Define the port number
const port = 3000;

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
