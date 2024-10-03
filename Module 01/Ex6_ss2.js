let n = +prompt("Nhập vào số nguyên dương n bất kỳ:")
let sum = 0;

while (true) {
    if (n > 0){
        for (let i = 1; i <= n; i++) {
            sum = sum + 1/(i**3);
        }
        console.log(`S = ${sum.toFixed(5)}`);
        break;
    } else {
        alert("Số không hợp lệ. Vui lòng nhập lại.");
    }
    n = +prompt("Nhập vào số nguyên dương n bất kỳ:")
}