let string1: string = "banana";
let string2: string = "hello world";

function removeDuplicateCharacters(input: string): string {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (result.indexOf(char) === -1) {
            result += char;
        }
    }
    return result;
}

let result1: string = removeDuplicateCharacters(string1);
console.log(`Chuỗi gốc: "${string1}"`);
console.log(`Kết quả sau khi lọc: "${result1}"`);

let result2: string = removeDuplicateCharacters(string2);
console.log(`Chuỗi gốc: "${string2}"`);
console.log(`Kết quả sau khi lọc: "${result2}"`);