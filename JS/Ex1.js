// Bài 1: 
let str = prompt("Nhập 1 chuỗi bất kỳ:");
let subString = [];

for (let i = str.length - 1; i >= 0; i--) {
    subString += str[i];
}
console.log(subString);
