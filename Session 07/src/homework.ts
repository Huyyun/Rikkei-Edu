function swap<T>(arr: [T, T]): [T, T] {
    return [arr[1], arr[0]];
}

// Sử dụng:
console.log(swap([1, 2])); // [2, 1]
console.log(swap(["a", "b"])); // ["b", "a"]


function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Use:
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined


function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Sử dụng:
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "Hanoi", country: "Vietnam" };

const merged = mergeObjects(obj1, obj2);
console.log(merged); // { name: "Alice", age: 25, city: "Hanoi", country: "Vietnam" }


function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
    return arr.map(item => item[key]);
}

// Use:
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

console.log(pluck(users, "name")); // ["Alice", "Bob"]
console.log(pluck(users, "id"));   // [1, 2]

function filterByProperty<T, K extends keyof T>(arr: T[], key: K, value: T[K]): T[] {
    return arr.filter(item => item[key] === value);
}

// Use:
const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Phone", category: "Electronics" },
    { id: 3, name: "Shoes", category: "Fashion" },
];

console.log(filterByProperty(products, "category", "Electronics"));
// [{ id: 1, name: "Laptop", category: "Electronics" }, { id: 2, name: "Phone", category: "Electronics" }]

function sumByProperty<T, K extends keyof T>(arr: T[], key: K): number {
    return arr.reduce((sum, item) => sum + (item[key] as unknown as number), 0);
}

// Use:
const orders = [
    { id: 1, total: 100 },
    { id: 2, total: 200 },
    { id: 3, total: 300 },
];

const totalRevenue = sumByProperty(orders, "total");

console.log(totalRevenue); // 600