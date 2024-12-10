"use strict";
let numberList;
numberList = [10, 20, 30];
numberList = [10, 20, 30];
let studentList;
studentList = ["Nguyen Van A", "Tran Van B", "Ta Van C"];
let phoneList;
phoneList = ["04452424245", "09535344424", "09535344424"];
let randomArr;
randomArr = ["123", 123];
studentList[0];
for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i]);
}
for (let student of studentList) {
    console.log(student);
}
for (let index in studentList) {
    console.log(index, studentList[index]);
}
studentList.push("Le Van D");
console.log(studentList);
studentList[0] = "Nguyen Van Peter";
studentList.shift();
console.log(studentList);
let person = {
    name: "Nguyen Van A",
    age: 18,
    hobbies: ["Going out", "Reading books"],
    gender: true,
};
let students = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 18
    },
    {
        id: 2,
        name: "Nguyen Van B",
        age: 19
    }
];
let roles;
roles = ["ADMIN", "MODERATOR", "USER"];
console.log(roles[1]);
for (let role of roles) {
    console.log(role);
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["MODERATOR"] = 11] = "MODERATOR";
    Role[Role["USER"] = 12] = "USER";
})(Role || (Role = {}));
let role = {
    ADMIN: 0,
    MODERATOR: 1,
    USER: 2,
};
console.log(Role.ADMIN);
console.log(Role.MODERATOR);
console.log(Role.USER);
console.log(role.ADMIN);
console.log(role.MODERATOR);
console.log(role.USER);
var Language;
(function (Language) {
    Language["hello"] = "xin ch\u00E0o";
    Language["language"] = "ng\u00F4n ng\u1EEF";
})(Language || (Language = {}));
console.log(Language);
let randomValue;
randomValue = "Hello world";
randomValue = 123;
randomValue = false;
function sum(number1, number2) {
    return number1 + number2;
}
let numbers = [10, 20, 30, 40, 50];
let newArr = numbers.map(function (element, index) {
    return element * element;
});
console.log(newArr);
function map(arr, fn) {
    let result = [];
    for (let i in arr) {
        let mapElement = fn(arr[i], +i);
        result.push(mapElement);
    }
    return result;
}
let resultArr = map([3, 5, 7, 9, 11], function (element, index) {
    return element * element;
});
console.log(resultArr);
