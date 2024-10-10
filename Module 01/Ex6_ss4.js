let inputString = prompt("Nhập vào chuỗi bất kỳ:");

function sortString(str) {
    let letters = [];    
    let numbers = [];    
    let specialChars = []; 

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            letters.push(char); 
        } else if (/[0-9]/.test(char)) {
            numbers.push(char); 
        } else {
            specialChars.push(char); 
        }
    }

    return [...letters, ...numbers, ...specialChars];
}

console.log(sortString(inputString).join(""));
