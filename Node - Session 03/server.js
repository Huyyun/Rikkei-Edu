const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Thiết lập endpoint (url) dành cho trang "/"
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// Create (POST)
// Read (GET)
// Update (PUT / PATCH)
// Delete (DELETE)

// Server có lưu trữ dữ liệu về các users có trong hệ thống
// "/users"
// GET - Lấy toàn bộ users có trong hệ thônhs
app.get("/users", function (req, res) {
  let users = fs.readFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 03/data/users.json", { encoding: "utf8" });
  // res.send("ALL USERS");
  users = JSON.parse(users);
  res.json(users);
});

// GET ONE - Lấy về 1 user có trong hệ thống
app.get("/users/:id", function (req, res) {
  let id = req.params.id;
  // Tìm kiếm user có id client đính kèm vào request trong CSDL
  let users = fs.readFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 03/data/users.json", { encoding: "utf8" });
  users = JSON.parse(users);

  let findUser = users.find(function (e, i) {
    return e.id === +id;
  });
  if (findUser) {
    res.json(findUser);
  } else {
    res.json({
      message: "User not found",
    });
  }
});

// POST - Thêm mới 1 user vào trong hệ thống
app.post("/users", function (req, res) {
  console.log(req.body);
  // Tạo ra 1 user mới --> Thêm user đó 
  let newUser = { ...req.body, id: Math.random() };
  // Đọc file 
  let users = fs.readFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 03/data/users.json", { encoding: "utf8" });
  users = JSON.parse(users);
  users.push(newUser);

  // Ghi đè
  fs.writeFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 03/data/users.json", JSON.stringify(users));

  res.json({
    message: "ADD USERS SUCCESSFULLY",
  });
  // res.send("ADD USERS SUCCESSFULLY");
});

// PUT - Cập nhật toàn bộ user trong hệ thống
app.put("/users/:id", function (req, res) {
  // req.body --> Toàn bộ thông tin cập nhật về đối tượng
  console.log(req.body);
  // req.params.id --> Thông tin về id của user cần phần phải cập nhật
  let id = req.params.id;
  // Tìm kiếm user với id client gửi lên
  let users = fs.readFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 03/data/users.json", { encoding: "utf8" });
  users = JSON.parse(users);
  // Nếu không thấy --> response --> User not found
  let findUser = users.find(function (e, i) {
    return e.id === +id;
  });
  if (findUser) {
    findUser.name = req.body.name;
    findUser.username = req.body.username;
    findUser.email = req.body.email;
  } else {
    res.json({
      message: "User not found",
    });
  }
  // Nếu tìm thấy --> Tiến hành cập nhật lại user đó với thông
  // tin nằm trong req.body
  fs.writeFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 03/data/users.json", JSON.stringify(users));
  // response message --> Cập nhật thành công
  res.send("UPDATE ALL USERS SUCCESSFULLY");
});

// DELETE - Xóa 1 user trong hệ thống
app.delete("/users/:id", function (req, res) {
  // Trích xuất id từ req.params.id
  let id = req.params.id;
  // Tìm kiếm xem có tồn tại user với id client gửi lên không
  let users = fs.readFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 03/data/users.json", { encoding: "utf8" });
  users = JSON.parse(users);
  // Nếu không --> User not found
  let findUser = users.findIndex(function (e, i) {
    return e.id === +id;
  });
  if (findUser) {
    users.splice(findUser, 1);
  } else {
    res.json({
      message: "User not found",
    });
  }
  // Nếu có --> Tiến hành xoá user
  fs.writeFileSync("C:/Rikkei Edu/Rikkei-Edu/Node - Session 03/data/users.json", JSON.stringify(users));
  // Response về 1 message --> Xoá thành công
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})