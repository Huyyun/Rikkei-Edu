let input = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let elementCount = {}; 
let duplicates = []; 

for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (elementCount[element]) {
        elementCount[element]++;
    } else {
        elementCount[element] = 1;
    }
}

for (let element in elementCount) {
    if (elementCount[element] > 1) {
        duplicates.push(+(element));
    }
}

console.log("Các phần tử trùng lặp là:", duplicates);