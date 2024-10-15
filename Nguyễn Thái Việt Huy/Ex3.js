let arr = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];
let subArr =[];

function output(array){
    for(let i=0; i<array.length; i++) {
        if (subArr.indexOf(array[i]) === -1) {
            subArr.push(array[i]);
        }
    }
    return subArr;
}
console.log(output(arr));