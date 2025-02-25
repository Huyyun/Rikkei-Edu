const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoutes = require('./routers/user.routers');
const todoRouters = require('./routers/todo.routes');

// Cấu trúc middleware
// Kiểm tra xem request được gửi trên server 
// có tồn tại 1 trạng thái status = 1 hay không
// - Nếu có thì tiếp tục response về phía client
// - Nếu không ngay lập tức dừng quá trình req - res cycle
function checkStatus(req, res, next) {
    let status = req.query.status;
    if (status === "1") {
        next(); // Chuyển tiếp request đến middleware tiếp theo
    } else {
        res.json({
            message: "No status being send to server",
        });
    }
}

function catchError(err, req, res, next) {
    console.log("hahahaha");
    console.log(err);
    res.json({
        error: err,
    });
}

function checkRole(req, res, next) {
    let role = req.query.role;
    if(role === "1") {
        next() 
    } else {
        res.json({
            message: "Invalid role"
        })
    }
}

// app.use(checkStatus);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(catchError);
app.use(morgan("dev")); // Thư viện mỗi khi req gửi lên server, sẽ log ra màn hình console để xem lỗi
app.use("/users", userRoutes);
app.use(express.static("public"));
app.use("/todos", todoRouters);

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/todo-list-layout.html');
    // res.sendFile('todo-list-layout.html', { root: __dirname });
});

// app.get("/about", function(req, res) {
//     res.json({
//         message: "Hello world",
//     });
// });

// app.get("/user", function(req, res) {
//     res.json({
//         message: "Hello world",
//     });
// });

// Trả về dữ liệu dùng json
// Trả về html dùng send

app.get("/test-middleware", checkStatus, checkRole, function(req, res) {
    res.json({
        message: "Test middleware successfully",
    });
});



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});