let arr1 = [1, 2, 3, 4, 5];
let arr2 = [-3, -1, 0, 1, 5];
let arr3 = [1, 5, 6, 7];

let i = 0, j = 0, k = 0; 
let commonElements = []; 

while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        commonElements.push(arr1[i]); 
        i++;
        j++;
        k++;
    }
    else if (arr1[i] < arr2[j]) {
        i++;
    }
    else if (arr2[j] < arr3[k]) {
        j++;
    }
    else {
        k++;
    }
}

console.log("Các phần tử chung của 3 mảng là:", commonElements);
