import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log("request recive, nice!");

    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    response.end("<html><body><h1>Welcome to my page with server</h1></body></html>")
})

server.listen(3000, () => {
    console.log(`My own server is running at http://localhost:3000`);
})