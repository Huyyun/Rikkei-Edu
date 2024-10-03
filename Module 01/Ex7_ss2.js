let n = parseInt(prompt("Nhập vào một số nguyên dương: "));
let reverse = 0;
let original = n; 

if (n <= 0 || isNaN(n)) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    while (n > 0) { 
        let last = n % 10; 
        reverse = reverse * 10 + last;  
        n = Math.floor(n / 10);  
    }
    console.log("Số ban đầu: " + original);
    console.log("Số đảo ngược là: " + reverse);
}
