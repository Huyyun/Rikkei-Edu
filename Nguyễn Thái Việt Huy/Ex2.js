//Bài 2:
let str = "hello world";
let subStr = str.split(" ");
let output = " ";
function upCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

for (let i = 0; i < subStr.length; i++) {
    output += upCase(subStr[i]);
}
console.log(output);

