let Arr=[5, 2, 3, 4, 1];
for (let i = 0; i<Arr.length - 1; i++) {
    for (j = 0; j < Arr.length - i - 1; j++) {
        if (Arr[j] > Arr[j + 1]) {
            let temp = Arr[j];
            Arr[j] = Arr[j + 1];
            Arr[j + 1] = temp;
        }
    }
}
console.log(Arr);