function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b]; 
    }
    return a;
}

let a = +prompt("Nhập số nguyên a:");
let b = +prompt("Nhập số nguyên b:");
let c = +prompt("Nhập số nguyên c:");
let d = +prompt("Nhập số nguyên d:");

while (true) {
    if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d)) {
        let ucln = gcd(gcd(a, b), gcd(c, d));
        console.log(`Ước chung lớn nhất của ${a}, ${b}, ${c}, ${d} là: ${ucln}`);
        break; 
    } else {
        alert("Vui lòng nhập các số nguyên hợp lệ.");
        a = +prompt("Nhập số nguyên a:");
        b = +prompt("Nhập số nguyên b:");
        c = +prompt("Nhập số nguyên c:");
        d = +prompt("Nhập số nguyên d:");
    }
}