let n = +prompt("Nhập số nguyên dương bất kỳ:");

while(true){
    if (n > 1) {
        console.log(`Các số nguyên tố nhỏ hơn ${n} là:`);
        for (let i = 2; i < n; i++) {
            let prime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0){
                    prime = false;
                    break;
                }
            }
            if (prime) {
                console.log(i);
            }
        }
        break;
    } else {
        alert("Đây không phải là số nguyên dương. Vui lòng nhập lại");
    }
    n = +prompt("Nhập số nguyên dương bất kỳ:");
}