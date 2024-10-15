let day = +prompt("Hãy nhập ngày:");
let month = +prompt("Hãy nhập tháng:");
let year = +prompt("Hãy nhập năm:");

console.log(`${day}/${month}/${year}`);
if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10: 
        case 12:
            console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ!`);
        break;
    
        case 4:
        case 6: 
        case 9:
        case 11:
            console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ!`);
        break;
    
        case 2:
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
                console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ!`);
            } else {
                console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ!`);
            }
            break;
        
        default:
            console.log(`Ngày ${day}/${month}/${year} không hợp lệ!`);
            break;
    }
}
