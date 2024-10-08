let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = input.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}

console.log("Mảng sau khi trộn là:", input);
