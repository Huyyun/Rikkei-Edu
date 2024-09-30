let a = +prompt("Nhập cạnh a: ");
let b = +prompt("Nhập cạnh b: ");
let c = +prompt("Nhập cạnh c: ");

if (a <= 0 || b <= 0 || c <= 0){
    console.log("Độ dài các cạnh phải lớn hơn 0");
} else if (a + b > c && b + c > a && c + a > b) {
    console.log("Đây là hình tam giác");
} else {
    console.log("Đây không phải là hình tam giác");
}