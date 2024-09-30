let weight = +prompt("Nhập cân nặng (kg): ");
let height = +prompt("Nhập chiều cao (m): ");

let bmi = weight / (height ** 2);
console.log(`Chỉ số BMI là ${bmi.toFixed(1)}`);

if (bmi < 18.5){
    console.log("Cân nặng thấp (gầy)");
} else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("Bình thường");
} else if (bmi >= 25){
    console.log("Thừa cân");
} else if (bmi >= 25 && bmi <= 29.9){
    console.log("Tiền béo phì");
} else if (bmi >= 30 && bmi <= 34.9){
    console.log("Béo phì độ I");
} else if (bmi >= 35 && bmi <= 39.9){
    console.log("Béo phì độ II");
} else {
    console.log("Béo phì độ III");
}