"use strict";
function bubbleSortDescending(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function main() {
    let numbers = [];
    console.log(`Nhập vào 10 số nguyên:`);
    for (let i = 0; i < 10; i++) {
        let input = prompt(`Nhập số thứ ${i + 1}:`);
        if (input !== null) {
            let num = parseInt(input, 10);
            if (!isNaN(num)) {
                numbers[i] = num;
            }
            else {
                console.error("Giá trị không hợp lệ, vui lòng nhập số nguyên!");
                i--;
            }
        }
    }
    console.log(`Mảng đã nhập: [${numbers.join(", ")}]`);
    const sortedArray = bubbleSortDescending(numbers);
    console.log(`Mảng sau khi sắp xếp theo thứ tự giảm dần: [${sortedArray.join(", ")}]`);
}
main();
