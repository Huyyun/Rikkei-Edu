let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

if (a > b){
    [a, b] = [b , a];
} else if (b > c){
    [b , c] = [c, b];
} else if (a > c){
    [a, c] = [c, a];
} 
console.log(`Sắp xếp theo thứ tự tăng dần: ${a}, ${b}, ${c}`);