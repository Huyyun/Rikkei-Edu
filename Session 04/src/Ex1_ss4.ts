// Xây dựng một ứng dụng máy tính cầm tay đơn giản với các chức năng cơ bản như cộng, trừ, nhân, chia hai số.

// 1. Lớp Calculator:
// Thuộc tính: Không cần thuộc tính.
// Phương thức:
// add(a: number, b: number): number - Tính tổng hai số.
// subtract(a: number, b: number): number - Tính hiệu hai số.
// multiply(a: number, b: number): number - Tính tích hai số.
// divide(a: number, b: number): number - Tính thương hai số (tránh chia cho 0).
// 2. Lớp Main:
// Khởi tạo một đối tượng Calculator.
// Chạy chương trình theo menu lựa chọn trong vòng lặp while.
// Menu chức năng:
// Cộng hai số.
// Trừ hai số.
// Nhân hai số.
// Chia hai số.
// Dừng chương trình.
// Yêu cầu bổ sung:

// Nhập hai số từ người dùng thông qua prompt.
// Hiển thị kết quả tính toán trên màn hình.
// In thông báo lỗi nếu người dùng nhập số không hợp lệ hoặc chia cho 0.

class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Không thể chia cho 0");
        }
        return a / b;
    }
}

class main {
    private _calculator: Calculator;
    constructor() {
        this._calculator = new Calculator();
    }

    bootstrap(): void {
        let loop: boolean = true;

        while(loop) {
            console.log("Menu chức năng:");
            console.log("1. Cộng hai số.");
            console.log("2. Trừ hai số.");
            console.log("3. Nhân hai số.");
            console.log("4. Chia hai số.");
            console.log("5. Dừng chương trình.");

            let choice = prompt("Mời bạn nhập vào lựa chọn (1-5) để điều khiển chương trình:");

            switch(choice) {
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

// Khởi tạo và chạy ứng dụng
const app = new Main();
app.bootstrap();