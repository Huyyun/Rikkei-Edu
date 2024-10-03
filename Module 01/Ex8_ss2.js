let n = +prompt("Nhập số nguyên dương bất kỳ:");

while(true){
    if (n > 1) {
        console.log(`${n} số nguyên tố đầu tiên là:`);
        let count = 0;   
        let num = 2;    
        while (count < n) { 
            let prime = true;
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) {
                console.log(num);
                count++;  
            }
            num++;  
        }
        break;  
    } else {
        alert("Đây không phải là số nguyên dương. Vui lòng nhập lại");
    }
    n = +prompt("Nhập số nguyên dương bất kỳ:");
}