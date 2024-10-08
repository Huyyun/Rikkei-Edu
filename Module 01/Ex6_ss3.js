let input = [1, 3, 2, 3, 6, 7, 10, 8, 9];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
        evenNumbers.push(input[i]); 
    } else {
        oddNumbers.push(input[i]); 
    }
}

for (let i = 0; i < evenNumbers.length - 1; i++) {
    for (let j = 0; j < evenNumbers.length - i - 1; j++) {
        if (evenNumbers[j] > evenNumbers[j + 1]) {
            let temp = evenNumbers[j];
            evenNumbers[j] = evenNumbers[j + 1];
            evenNumbers[j + 1] = temp;
        }
    }
}

for (let i = 0; i < oddNumbers.length - 1; i++) {
    for (let j = 0; j < oddNumbers.length - i - 1; j++) {
        if (oddNumbers[j] > oddNumbers[j + 1]) {
            let temp = oddNumbers[j];
            oddNumbers[j] = oddNumbers[j + 1];
            oddNumbers[j + 1] = temp;
        }
    }
}

let sortedNumbers = evenNumbers.concat(oddNumbers);
console.log("Mảng sau khi sắp xếp là:", sortedNumbers);
