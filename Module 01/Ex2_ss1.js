let math = +prompt("Nhập điểm Toán: ");
let literature = +prompt("Nhập điểm Văn: ");
let english = +prompt("Nhập điểm Anh: ");

let average = (math + literature + english) / 3;
console.log(`Điểm trung bình của bạn là: ${average.toFixed(2)}`);

if (average >= 8 && average <= 10){
    console.log("Xếp loại GIỎI");
} else if (average >= 6.5 && average <= 7.9){
    console.log("Xếp loại KHÁ");
} else if (average >= 5 && average <= 6.4){
    console.log("Xếp loại TRUNG BÌNH");
} else if (average < 5) {
    console.log("Xếp loại YẾU");
} else {
    console.log("Điểm không hợp lệ.");
}