"use strict";
function swap(arr) {
    return [arr[1], arr[0]];
}
console.log(swap([1, 2]));
console.log(swap(["a", "b"]));
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "Hanoi", country: "Vietnam" };
const merged = mergeObjects(obj1, obj2);
console.log(merged);
function pluck(arr, key) {
    return arr.map(item => item[key]);
}
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];
console.log(pluck(users, "name"));
console.log(pluck(users, "id"));
function filterByProperty(arr, key, value) {
    return arr.filter(item => item[key] === value);
}
const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Phone", category: "Electronics" },
    { id: 3, name: "Shoes", category: "Fashion" },
];
console.log(filterByProperty(products, "category", "Electronics"));
function sumByProperty(arr, key) {
    return arr.reduce((sum, item) => sum + item[key], 0);
}
const orders = [
    { id: 1, total: 100 },
    { id: 2, total: 200 },
    { id: 3, total: 300 },
];
const totalRevenue = sumByProperty(orders, "total");
console.log(totalRevenue);
