let n = +prompt("Nhập số nguyên dương bất kỳ:");

if (n > 0) {
    console.log(`Dãy Fibonacci có tổng nhỏ hơn ${n} là:`);
    let fib1 = 0, fib2 = 1;
    console.log(fib1);  
    if (fib2 < n) {
        console.log(fib2);  
    }

    while (true) {
        let nextFib = fib1 + fib2;  
        if (nextFib >= n) {
            break;  
        }
        console.log(nextFib);  
        fib1 = fib2;
        fib2 = nextFib;  
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
}