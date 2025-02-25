// npm init -- initialization (Khởi tạo) package.json
// npm install nodemon cài đặt gói thư viện tên nodemon trên chợ ntn
// nodemon tên file 

const { createServer } = require('node:http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  // Bài 7
  if (req.url === "/" || req.url === "/overview") {
    // Lấy đc toàn bộ dl trong file data.json
    let data = JSON.parse(fs.readFileSync("./Express_Node_Session01-main/dev-data/data.json", { encoding: 'utf8' }));
    console.log(data);

    // Đổ dl đó ra thành các phần tử html
    // Map (ánh xạ, chuyển đổi) mảng đối tượng dl data ---> 
    // Mảng các phàn tử figure HTML đã đc đổ dl từ các đối tượng trong data
    let singleProductTemplate = fs.readFileSync("./Express_Node_Session01-main/templates/single-product.html", { encoding: 'utf8' });
    
    data = data.map(function (element, index) {
      return singleProductTemplate
        .replaceAll("{{productName}}", element.productName)
        .replaceAll("{{quantity}}", element.quantity)
        .replaceAll("{{image}}", element.image)
        .replaceAll("{{image1}}", element.image)
        .replaceAll("{{price}}", element.price)
        .replaceAll("{{id}}", element.id);
    });
    console.log(data);

    // response về trang product.html
    let overviewTemplate = fs.readFileSync("./Express_Node_Session01-main/templates/overview.html", { encoding: 'utf8' });
    overviewTemplate = overviewTemplate.replaceAll("{{content}}", data.join(""));
    res.statusCodev = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(overviewTemplate);
  } else if (req.url === "/product") {
    let productTemplate = fs.readFileSync("./Express_Node_Session01-main/templates/product.html", { encoding: 'utf8' });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(productTemplate);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 NOT FOUND</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

