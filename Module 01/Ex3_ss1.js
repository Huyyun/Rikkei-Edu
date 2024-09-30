let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

if (b > a && b > c){
    console.log(`Số lớn nhất là ${b}`);
} else if (c > a && c > b){
    console.log(`Số lớn nhất là ${c}`);
} else {
    console.log(`Số lớn nhất là ${a}`);
}
