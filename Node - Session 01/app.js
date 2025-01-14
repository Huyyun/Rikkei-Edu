const { createServer } = require('node:http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    // console.log(req);
    // console.log(res);
    res.statusCode = 200;
    // Text
//   res.setHeader('Content-Type', 'text/plain'); // Kiểu dữ liệu dạng văn bản trả về cho client
//   res.end('Hello Won Hyun');

// fs.readFileSync() // Đọc file trên server
// fs.writeFileSync() // Ghi file trên server
    // let indexTemplate = fs.readFileSync("./templates/index.html", {
    //     encoding: "utf8"
    // });
    // console.log(indexTemplate);
    // // HTML
    // res.setHeader('Content-Type', 'text/html'); // Kiểu dữ liệu dạng văn bản trả về cho client
    // res.end(indexTemplate);

    // JSON: (Javascript Object Notation)
    // let userData = fs.readFileSync("./data/users.json", {encoding: "utf8"});
    // res.setHeader('Content-Type', 'application/json'); 
    // res.end(userData);

    // console.log(req.url);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (req.url === "/") {
        // Gửi về tài nguyên của trang chủ
        res.end("<h1>Đây là trang chủ</h1>");
    } else if (req.url === "/users") {
        // Gửi về tài nguyên của trang users
        res.end("<h1>Đây là trang users</h1>");
    } else {
        // Gửi về 404 not found
        res.end("<h1>404 NOT FOUND</h1>");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
