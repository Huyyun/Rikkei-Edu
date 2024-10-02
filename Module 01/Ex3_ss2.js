let n = +prompt("Nhập số nguyên dương bất kỳ:");

while(true){
    if (n > 0) {
        console.log(`Các số nguyên tố nhỏ hơn ${n} là:`);
        for (let i = 1; i < n; i++) {
            if (i % 1 === 0 && i % i === 0){
                console.log(i);
            }
        }
        break;
    } else {
        console.log("Đây không phải là số nguyên dương. Vui lòng nhập lại");
    }
    n = +prompt("Nhập số nguyên dương bất kỳ:");
}