let input = [1, 4, 6, 1, 2, 7, 9, 3, 12];
let n = +prompt("Hãy nhập vào số nguyên bất kỳ:");
function sumArr(array, number){
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] + input[i] === n) {
                return [input[i], input[j]];
            }
        }
    }
}
console.log(sumArr(input, n));