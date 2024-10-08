let input = prompt("Nhập vào một chuỗi bất kỳ:");
let substrings = [];

for (let i = 0; i < input.length; i++) {
    let subArr = ""; 
    for (let j = i; j < input.length; j++) {
        subArr += input[j]; 
        substrings.push(subArr); 
    }
}

console.log("Mảng chứa tất cả các chuỗi con là:", substrings);
