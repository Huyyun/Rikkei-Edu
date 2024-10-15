const users = [];

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateUserInput(user_name, email, password) {
  if (!user_name || !email || !password) {
    console.log("Tên, email và mật khẩu không được để trống.");
    return false;
  }
  
  if (user_name.length < 3) {
    console.log("Tên phải dài ít nhất 3 ký tự.");
    return false;
  }

  if (!isValidEmail(email)) {
    console.log("Email không đúng định dạng.");
    return false;
  }

  if (password.length < 8) {
    console.log("Mật khẩu phải có ít nhất 8 ký tự.");
    return false;
  }

  return true;
}

function addUser() {
  let id = 1; 
  while (true) {
    const user_name = prompt("Nhập tên người dùng:");
    const email = prompt("Nhập email:");
    const password = prompt("Nhập mật khẩu:");

    if (validateUserInput(user_name, email, password)) {
      const user = {
        id: id++,
        user_name: user_name,
        email: email,
        password: password
      };
      users.push(user);
      console.log("Đã thêm người dùng:", user);
      break; 
    } else {
      console.log("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
    }
  }
}
addUser();
console.log("Danh sách người dùng:", users);