const http = require('http');

http.createServer((req, resp) => {
    resp.write("<h1>Hello, I am Rahul Sharma.<h1>");
    resp.end();
}).listen(4500);



// Without using arrow function
// const dataControl = (req,resp) => {
//     resp.write("<h1>Hello, It's Rahul this side.");
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);