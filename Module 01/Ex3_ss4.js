let input = [-1, 2, 3, 5, -6, 4, 2, 9];
function sumMax(array) {
    let maxCurrent = array[0]; 
    let maxGlobal = array[0];   
    let start = 0;            
    let end = 0;              
    let tempStart = 0;        

    for (let i = 1; i < array.length; i++) {
        if (arr[i] > maxCurrent + arr[i]) {
            maxCurrent = arr[i];
            tempStart = i;
        } else {
            maxCurrent += arr[i];
        }

        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
            start = tempStart;
            end = i;
        }
    }
    return arr.slice(start, end + 1);
}
console.log(findMaxSubarray(input));