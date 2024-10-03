let n = +prompt("Nhập vào số hàng của tam giác:");

while(true){
    if(n >= 1){
        for (let i = 1; i <= n; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
            console.log(row);
        }
        console.log("\n\n");
        for (let i = n; i >= 1; i--) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
            console.log(row);
        }
        break;
    } else {
        alert ("Số không hợp lệ. Vui lòng nhập lại.");
    }
    n = +prompt("Nhập vào số hàng của tam giác:");
}