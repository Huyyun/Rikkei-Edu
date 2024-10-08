let input = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let userInput = +prompt("Nhập vào 1 số bất kỳ:");

for (let k = 1; k <= input.length - 1; k++){
    for (let i = 0; i <= input.length - k; i++){
        let subArray = [];
        for (let j = i; j < i + k; j++){
            subArray.push(input[j]);
        }
        let total = 0;
        for (let index in subArray) {
            total = total + subArray[index];
        }
        if (total === userInput){
            console.log(subArray);
            userInput = false;
        }
    }
}