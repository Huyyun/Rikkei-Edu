let inputString = prompt("Nhập vào chuỗi bất kỳ:");

function capitalizeLastChar(str) {
    let words = str.split(" ");
    let modifiedWords = words.map(word => {
        if (word.length > 1) {
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
        }
        return word.toUpperCase(); 
    });
    return modifiedWords.join(" ");
}
console.log(capitalizeLastChar(inputString));
