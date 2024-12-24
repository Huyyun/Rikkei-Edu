"use strict";
class GeometryCalculator {
    circleArea(radius) {
        return Math.PI * radius * radius;
    }
    circlePerimeter(radius) {
        return 2 * Math.PI * radius;
    }
    triangleArea(base, height) {
        return 0.5 * base * height;
    }
    trianglePerimeter(a, b, c) {
        return a + b + c;
    }
    rectangleArea(width, height) {
        return width * height;
    }
    rectanglePerimeter(width, height) {
        return 2 * (width + height);
    }
    parallelogramArea(base, height) {
        return base * height;
    }
    parallelogramPerimeter(a, b) {
        return 2 * (a + b);
    }
    rhombusArea(d1, d2) {
        return (d1 * d2) / 2;
    }
    rhombusPerimeter(side) {
        return 4 * side;
    }
}
class Main {
    constructor() {
        this._geometryCalculator = new GeometryCalculator();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Menu chức năng:");
            console.log("1. Tính diện tích và chu vi hình tròn.");
            console.log("2. Tính diện tích và chu vi hình tam giác.");
            console.log("3. Tính diện tích và chu vi hình chữ nhật.");
            console.log("4. Tính diện tích và chu vi hình bình hành.");
            console.log("5. Tính diện tích và chu vi hình thoi.");
            console.log("6. Dừng chương trình.");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1-6) để điều khiển chương trình:");
            switch (choice) {
                case "1":
                    let radius = parseFloat(prompt("Mời bạn nhập bán kính hình tròn:"));
                    if (isNaN(radius) || radius <= 0) {
                        console.log("Giá trị bán kính không hợp lệ!");
                    }
                    else {
                        console.log(`Diện tích hình tròn: ${this._geometryCalculator.circleArea(radius)}`);
                        console.log(`Chu vi hình tròn: ${this._geometryCalculator.circlePerimeter(radius)}`);
                    }
                    break;
                case "2":
                    let base = parseFloat(prompt("Mời bạn nhập đáy hình tam giác:"));
                    let height = parseFloat(prompt("Mời bạn nhập chiều cao hình tam giác:"));
                    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
                        console.log("Giá trị không hợp lệ!");
                    }
                    else {
                        console.log(`Diện tích hình tam giác: ${this._geometryCalculator.triangleArea(base, height)}`);
                        let a = parseFloat(prompt("Mời bạn nhập cạnh a của tam giác:"));
                        let b = parseFloat(prompt("Mời bạn nhập cạnh b của tam giác:"));
                        let c = parseFloat(prompt("Mời bạn nhập cạnh c của tam giác:"));
                        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
                            console.log("Giá trị cạnh không hợp lệ!");
                        }
                        else {
                            console.log(`Chu vi hình tam giác: ${this._geometryCalculator.trianglePerimeter(a, b, c)}`);
                        }
                    }
                    break;
                case "3":
                    let width = parseFloat(prompt("Mời bạn nhập chiều rộng hình chữ nhật:"));
                    let length = parseFloat(prompt("Mời bạn nhập chiều dài hình chữ nhật:"));
                    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
                        console.log("Giá trị không hợp lệ!");
                    }
                    else {
                        console.log(`Diện tích hình chữ nhật: ${this._geometryCalculator.rectangleArea(width, length)}`);
                        console.log(`Chu vi hình chữ nhật: ${this._geometryCalculator.rectanglePerimeter(width, length)}`);
                    }
                    break;
                case "4":
                    let baseParallelogram = parseFloat(prompt("Mời bạn nhập đáy hình bình hành:"));
                    let heightParallelogram = parseFloat(prompt("Mời bạn nhập chiều cao hình bình hành:"));
                    if (isNaN(baseParallelogram) || isNaN(heightParallelogram) || baseParallelogram <= 0 || heightParallelogram <= 0) {
                        console.log("Giá trị không hợp lệ!");
                    }
                    else {
                        console.log(`Diện tích hình bình hành: ${this._geometryCalculator.parallelogramArea(baseParallelogram, heightParallelogram)}`);
                        let side1 = parseFloat(prompt("Mời bạn nhập cạnh thứ nhất hình bình hành:"));
                        let side2 = parseFloat(prompt("Mời bạn nhập cạnh thứ hai hình bình hành:"));
                        if (isNaN(side1) || isNaN(side2) || side1 <= 0 || side2 <= 0) {
                            console.log("Giá trị cạnh không hợp lệ!");
                        }
                        else {
                            console.log(`Chu vi hình bình hành: ${this._geometryCalculator.parallelogramPerimeter(side1, side2)}`);
                        }
                    }
                    break;
                case "5":
                    let d1 = parseFloat(prompt("Mời bạn nhập đường chéo thứ nhất hình thoi:"));
                    let d2 = parseFloat(prompt("Mời bạn nhập đường chéo thứ hai hình thoi:"));
                    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
                        console.log("Giá trị không hợp lệ!");
                    }
                    else {
                        console.log(`Diện tích hình thoi: ${this._geometryCalculator.rhombusArea(d1, d2)}`);
                        let sideRhombus = parseFloat(prompt("Mời bạn nhập cạnh hình thoi:"));
                        if (isNaN(sideRhombus) || sideRhombus <= 0) {
                            console.log("Giá trị cạnh không hợp lệ!");
                        }
                        else {
                            console.log(`Chu vi hình thoi: ${this._geometryCalculator.rhombusPerimeter(sideRhombus)}`);
                        }
                    }
                    break;
                case "6":
                    loop = false;
                    break;
                default:
                    console.log("Lựa chọn của bạn không hợp lệ. Vui lòng nhập lại.");
                    break;
            }
        }
    }
}
const app = new Main();
app.bootstrap();
