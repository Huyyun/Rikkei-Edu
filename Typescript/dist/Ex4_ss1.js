"use strict";
let string1 = "banana";
let string2 = "hello world";
function removeDuplicateCharacters(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (result.indexOf(char) === -1) {
            result += char;
        }
    }
    return result;
}
let result1 = removeDuplicateCharacters(string1);
console.log(`Chuỗi gốc: "${string1}"`);
console.log(`Kết quả sau khi lọc: "${result1}"`);
let result2 = removeDuplicateCharacters(string2);
console.log(`Chuỗi gốc: "${string2}"`);
console.log(`Kết quả sau khi lọc: "${result2}"`);
