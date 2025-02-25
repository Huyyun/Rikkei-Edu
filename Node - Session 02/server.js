// npm init -- initialization (Khởi tạo) package.json
// npm install nodemon cài đặt gói thư viện tên nodemon trên chợ ntn
// nodemon tên file 

const { createServer } = require('node:http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  // let readThissContent = fs.readFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 02/Express_Node_Session01-main/txt/read-this.txt", {encoding: "utf8"}).toString();
  // console.log(readThissContent);

  

  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');
  // Bài 6
  // res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // if (req.url === "/") {
  //     res.end("<h1>Đây là trang chủ</h1>");
  // } else if (req.url === "/users") {
  //     res.end("<h1>Đây là trang users</h1>");
  // } else if (req.url === "/overview") {
  //   res.end("<h1>Đây là trang overview</h1>");
  // } else if (req.url === "/products") {
  //   res.end("<h1>Đây là trang products</h1>");
  // } else if (req.url.startsWith("/api")) {
  //   // Tách nhỏ url theo dấu
  //   console.log(req.url.split("/"));
  //   let urlArr = req.url.split("/");
  //   if (urlArr.length === 2) {
  //     let data = JSON.parse(fs.readFileSync("./Express_Node_Session01-main/dev-data/data.json"));
  //     res.setHeader("Content-Type", "application/json");
  //     res.end(JSON.stringify(data));
  //   } else {
  //     let id = urlArr[urlArr.length - 1];
  //     let data = JSON.parse(fs.readFileSync("./Express_Node_Session01-main/dev-data/data.json"));
  //     let productData = data.find(function (element, index) {
  //       return element.id === +id;
  //     });
  //     if (productData) {
  //       res.setHeader("Content-Type", "application/json");
  //       res.end(JSON.stringify(productData));
  //     } else {
  //       res.setHeader("Content-Type", "application/json");
  //       res.end(JSON.stringify({}));
  //     }
  //   }
  // } else {
  //   res.statusCode = 404;
  //   res.end("<h1>404 NOT FOUND</h1>");
  // }

  // Bài 7
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
