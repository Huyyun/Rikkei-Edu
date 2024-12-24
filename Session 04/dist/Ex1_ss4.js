"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Không thể chia cho 0");
        }
        return a / b;
    }
}
class main {
    constructor() {
        this._calculator = new Calculator();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Menu chức năng:");
            console.log("1. Cộng hai số.");
            console.log("2. Trừ hai số.");
            console.log("3. Nhân hai số.");
            console.log("4. Chia hai số.");
            console.log("5. Dừng chương trình.");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1-5) để điều khiển chương trình:");
            switch (choice) {
                case "1":
                    let num1 = Number(prompt("Nhập số thứ nhất:"));
                    let num2 = Number(prompt("Nhập số thứ hai:"));
                    console.log(`Kết quả cộng: ${this._calculator.add(num1, num2)}`);
                    break;
                case "2":
                    let num3 = Number(prompt("Nhập số thứ nhất:"));
                    let num4 = Number(prompt("Nhập số thứ hai:"));
                    console.log(`Kết quả trừ: ${this._calculator.subtract(num3, num4)}`);
                    break;
                case "3":
                    let num5 = Number(prompt("Nhập số thứ nhất:"));
                    let num6 = Number(prompt("Nhập số thứ hai:"));
                    console.log(`Kết quả nhân: ${this._calculator.multiply(num5, num6)}`);
                    break;
                case "4":
                    let num7 = Number(prompt("Nhập số thứ nhất:"));
                    let num8 = Number(prompt("Nhập số thứ hai:"));
                    let result = this._calculator.divide(num7, num8);
                    if (!isNaN(result)) {
                        console.log(`Kết quả chia: ${result}`);
                    }
                    break;
                case "5":
                    loop = false;
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
                    break;
            }
        }
    }
}
const app = new Main();
app.bootstrap();
