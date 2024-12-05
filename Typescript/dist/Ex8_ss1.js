"use strict";
let result = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
while (attempts < 3) {
    let userInput = prompt("Nhập số may mắn của bạn từ 1-10 (Bạn có 3 lượt đoán):");
    if (userInput === null) {
        alert("Bạn đã hủy trò chơi!");
        break;
    }
    let number = +userInput;
    if (isNaN(number)) {
        alert("Vui lòng nhập số hợp lệ!");
        continue;
    }
    attempts++;
    if (number === result) {
        alert("Bingoooo!!! Bạn đã đoán đúng số!");
        break;
    }
    else if (number > result) {
        alert("Lớn quá !!!");
    }
    else {
        alert("Bé quá !!!");
    }
    if (attempts === 3) {
        alert(`Bạn đã thua! Số may mắn là ${result}.`);
    }
}
