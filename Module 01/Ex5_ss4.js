let n = +prompt("Nhập vào số nguyên dương bất kỳ:");

function printOddNumbers(n) {
    let oddNumbers = [];
    let sum = 0;

    for (let i = 1; i <= n; i += 2) {
        oddNumbers.push(i);
        sum += i;
    }

    if (sum % 2 === 0) {
        oddNumbers.pop(); 
    }
    console.log(oddNumbers.join(", "));
}

while(true) {
    if (n > 0) {
        printOddNumbers(n);
        break;
    } else {
        alert("Vui lòng nhập một số nguyên dương hợp lệ.");
    }
    n = +prompt("Nhập vào số nguyên dương bất kỳ:");
}