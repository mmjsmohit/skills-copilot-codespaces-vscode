// Create web server
// Run: node comments.js
// Test: http://localhost:3000/comments

// Load modules
var http = require('http');
var fs = require('fs');

// Create web server
http.createServer(function (req, res) {
    // Open file
    fs.readFile('comments.json', 'utf-8', function (err, data) {
        // Parse JSON
        var comments = JSON.parse(data);
        // Set response header
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        });
        // Set response content    
        res.end(JSON.stringify(comments));
    });
}).listen(3000);
console.log('Server running at http://localhost:3000/comments');