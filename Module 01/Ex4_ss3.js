let input = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7, 10];
let positiveNumbers = []; 

for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
        positiveNumbers.push(input[i]);
    }
}

for (let i = 0; i < positiveNumbers.length - 1; i++) {
    for (let j = 0; j < positiveNumbers.length - i - 1; j++) {
        if (positiveNumbers[j] > positiveNumbers[j + 1]) {
            let temp = positiveNumbers[j];
            positiveNumbers[j] = positiveNumbers[j + 1];
            positiveNumbers[j + 1] = temp;
        }
    }
}

let min = 1; 

for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] === min) {
        min++; 
    }
}
console.log("Phần tử dương nhỏ nhất chưa xuất hiện là:", min);