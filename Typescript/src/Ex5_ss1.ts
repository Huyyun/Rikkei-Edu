function parseNumber(value: number | string): number | null {
    if (typeof value === "number") {
        return value; 
    }
    if (typeof value === "string" && !isNaN(Number(value))) {
        return Number(value); 
    }
    return null; 
}

function add(a: number | string, b: number | string): string {
    let num1 = parseNumber(a);
    let num2 = parseNumber(b);

    if (num1 === null || num2 === null) {
        return "Tham số không hợp lệ!";
    }
    return `Kết quả: ${num1 + num2}`;
}

function subtract(a: number | string, b: number | string): string {
    const num1 = parseNumber(a);
    const num2 = parseNumber(b);

    if (num1 === null || num2 === null) {
        return "Tham số không hợp lệ!";
    }
    return `Kết quả: ${num1 - num2}`;
}

function multiply(a: number | string, b: number | string): string {
    const num1 = parseNumber(a);
    const num2 = parseNumber(b);

    if (num1 === null || num2 === null) {
        return "Tham số không hợp lệ!";
    }
    return `Kết quả: ${num1 * num2}`;
}

function divide(a: number | string, b: number | string): string {
    const num1 = parseNumber(a);
    const num2 = parseNumber(b);

    if (num1 === null || num2 === null) {
        return "Tham số không hợp lệ!";
    }
    if (num2 === 0) {
        return "Không thể chia cho 0!";
    }
    return `Kết quả: ${num1 / num2}`;
}

console.log(add(5, "10")); 
console.log(subtract("20", "5")); 
console.log(multiply("3", 4)); 
console.log(divide("15", "3")); 
console.log(add("abc", 10)); 
console.log(divide(10, 0)); 