"use strict";
function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    let maxIndex = 0;
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return { max, min, maxIndex, minIndex };
}
function main() {
    let numbers = [];
    console.log(`Nhập vào 10 số nguyên khác nhau:`);
    for (let i = 0; i < 10; i++) {
        let input = prompt(`Nhập số thứ ${i + 1}:`);
        if (input !== null) {
            let num = parseInt(input, 10);
            if (!isNaN(num)) {
                if (numbers.includes(num)) {
                    console.error("Số đã có trong mảng, vui lòng nhập số khác!");
                    i--;
                }
                else {
                    numbers[i] = num;
                }
            }
            else {
                console.error("Giá trị không hợp lệ, vui lòng nhập số nguyên!");
                i--;
            }
        }
    }
    let { max, min, maxIndex, minIndex } = findMaxMin(numbers);
    console.log(`Mảng đã nhập: [${numbers.join(", ")}]`);
    console.log(`Giá trị lớn nhất là ${max} ở vị trí ${maxIndex}`);
    console.log(`Giá trị nhỏ nhất là ${min} ở vị trí ${minIndex}`);
}
main();
