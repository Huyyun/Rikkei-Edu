let result = 9;
let number = +prompt("Nhập số may mắn của bạn từ 1-10:");
while(number !== result){
    if (number >= 1 && number <= 10){
        if (number > result) {
            alert("Lớn quá !!!");
        } else if (number < result){
            alert("Bé quá");
        }
    } else {
        alert("Số không hợp lệ, vui lòng nhập lại");
    }
    number = +prompt("Nhập số may mắn của bạn từ 1-10:");
}
alert("Bingoooo!!!");