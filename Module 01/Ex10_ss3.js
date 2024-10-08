let input = [1, 2, 5, 3, 1, 2, 3, 6, 7, 2];
let distinctArray = [];

for (let i = 0; i < input.length; i++) {
    let isDistinct = true; 
    for (let j = 0; j < input.length; j++) {
        if (i !== j && input[i] === input[j]) {
            isDistinct = false; 
            break; 
        }
    }
    if (isDistinct) {
        distinctArray.push(input[i]);
    }
}
console.log("Mảng chứa các phần tử phân biệt là:", distinctArray);
