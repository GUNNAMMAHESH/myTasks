
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const jsonData = {
        message: 'This is a custom JSON response!',
        example: {
            key: 'value',
            number: 42,
            isAwesome: true,
        },
        status: 'OK',
    };

    res.end(JSON.stringify(jsonData));  //parse data into json
    // res.end('Server created');

});





const port = 3040;

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);

});
