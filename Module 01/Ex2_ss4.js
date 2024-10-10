let a = "hello world";
let b = "olds";
function check(string1, string2){
    let count = 0;
    let satisfied = string2.length;
    for (let i = 0; i < string2.length; i++) {
        for (let j = 0; j < string1.length; j++) {
            if (string2[i] === string1[j]) {
                count++;
                if (count === satisfied){
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
}
console.log(check(a, b));