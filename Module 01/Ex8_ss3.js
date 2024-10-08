let input = [1, 2, 3, 1, 2, 3, 4, 5, 5, 6];
let uniqueElement = -1; 

for (let i = 0; i < input.length; i++) {
    let isUnique = true; 
    for (let j = 0; j < input.length; j++) {
        if (i !== j && input[i] === input[j]) { 
            isUnique = false; 
            break; 
        }
    }
    if (isUnique) {
        uniqueElement = input[i];
        console.log("Phần tử độc nhất đầu tiên là:", uniqueElement);
        break;
    }
}

if (uniqueElement === -1) {
    console.log("Trong mảng không có phần tử độc nhất");
}
