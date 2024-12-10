"use strict";
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
function main() {
    let numbers = [];
    console.log(`Nhập vào các số nguyên:`);
    let numElements = parseInt(prompt("Nhập số phần tử mảng:") || "0", 10);
    for (let i = 0; i < numElements; i++) {
        let input = prompt(`Nhập số thứ ${i + 1}:`);
        if (input !== null) {
            let num = parseInt(input, 10);
            if (!isNaN(num)) {
                numbers.push(num);
            }
            else {
                console.error("Giá trị không hợp lệ, vui lòng nhập số nguyên!");
                i--;
            }
        }
    }
    console.log(`Mảng đã nhập: [${numbers.join(", ")}]`);
    let reversedArray = reverseArray(numbers);
    console.log(`Mảng sau khi đảo ngược: [${reversedArray.join(", ")}]`);
}
main();
