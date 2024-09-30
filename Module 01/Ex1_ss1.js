let month = +prompt("Nhập số tháng: ");

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10: 
    case 12:
        console.log(`Tháng ${month} có 31 ngày`);
    break;

    case 4:
    case 6: 
    case 9:
    case 11:
        console.log(`Tháng ${month} có 30 ngày`);
    break;

    case 2:
        let year = +prompt("Nhập năm: ");
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            console.log(`Tháng ${month} có 29 ngày`);
        } else {
            console.log(`Tháng ${month} có 28 ngày`);
        }
        break;
    
    default:
        console.log(`Tháng ${month} không hợp lệ!`);
        break;
}
