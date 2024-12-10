// Hàm đếm số lượng phần tử lớn hơn hoặc bằng 10
function countNumbersGreaterOrEqualToTen(arr: number[]): number {
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            count++; 
        }
    }
    return count; 
}

function main() {
    let numbers: number[] = []; 

    console.log(`Nhập vào 10 số nguyên:`);

    for (let i = 0; i < 10; i++) {
        let input = prompt(`Nhập số thứ ${i + 1}:`);
        if (input !== null) {
            let num = parseInt(input, 10);
            if (!isNaN(num)) {
                numbers[i] = num; 
            } else {
                console.error("Giá trị không hợp lệ, vui lòng nhập số nguyên!");
                i--; 
            }
        }
    }

    let count = countNumbersGreaterOrEqualToTen(numbers);

    console.log(`Mảng đã nhập: [${numbers.join(", ")}]`);
    console.log(`Số lượng số lớn hơn hoặc bằng 10: ${count}`);
}

main();