// function getFirstNumber(numbers: number[]): number {
//     return numbers[0];
// }
// console.log(getFirstNumber([10, 20, 30]));

// function getFirstString(strings: string[]): string {
//     return strings[0];
// }
// console.log(getFirstString(["hello world !!!"]));

// interface User {
//     id: number;
//     name: string;
// }
// function getFirstUser(users: User[]): User {
//     return users[0];
// }
// console.log(
//     getFirstUser([
//         {id: 1, name: "Peter"}, 
//         {id: 2, name: "Tony"},
//     ])
// );

// type InputType = number | User;
// type TotalInputType = InputType[] | string;
// type RType = number | string | User;
// function getFirst(input: TotalInputType): RType {
//     return input[0];
// }
// console.log(getFirst([1, 2, 3, 4, 5]));
// console.log(getFirst("Hello world !!!"));
// console.log(
//     getFirstUser([
//         {id: 1, name: "Peter"}, 
//         {id: 2, name: "Tony"},
//     ])
// );
// // Input: number | string | User[]
// // Output: number | string | User

// // type InputType = number | string | User;
// // function getFirst(input: InputType[]): InputType {
// //     return input[0];
// // }
// // console.log(getFirst([1, 2, 3, 4, 5]));
// // console.log(getFirst(["Hello world !!!", "World!"]));
// // console.log(
// //     getFirstUser([
// //         {id: 1, name: "Peter"}, 
// //         {id: 2, name: "Tony"},
// //     ])
// // );

// // Tham số kiểu (Type parameter)
// // Định nghĩa tham số kiểu cho hàm
// function getFirst2<T>(input: T[]): T {
//     return input[0];
// }
// getFirst2<number>([1, 2, 3, 4, 5]);
// getFirst2<string>(["Hello world"]);
// getFirst2<User>([
//     {id: 1, name: "Peter"}, 
//     {id: 2, name: "Tony"},
// ]);
// // Input: input
// // Output: input[0]

// function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: "Hyun"}, {age: 22});
// const mergedObj2 = merge<{ status: boolean }, { number: number }>(
//     {status: true}, 
//     {number: 2201}
// );
// console.log(mergedObj.name);


// // function count<K>(input: K[] | string): void {
// //     if (input.length === 0) {
// //         console.log("No element");
// //     } else {
// //         console.log(`Got ${input.length} elements`)
// //     }
// // }
// // count([1, 2, 3]);
// // count("adfjs");

// interface Length {
//     length: number;
// }
// function count<T extends Length>(input: T): string {
//     let result = "";
//     if (input.length === 0) {
//         result = "No element";
//     } else if (input.length === 1) {
//         result = "Got 1 element";
//     } else {
//         result = `Got ${input.length} elements`;
//     }
//     return result;
// }
// console.log(count([1, 2, 3]));
// console.log(count("adfjs"));

// // function extractAndConvert<K extends object, O extends keyof K>(obj: K, key: O): void {
// //     console.log(obj[key]);
// // }
// // extractAndConvert({name: "Hyun", age: 18}, "age");

// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U): string {
//     return `value: ${obj[key]}`;
// }
// console.log(extractAndConvert({name: "Hyun", age: 18}, "age"));

// // Partial<T>
// interface User {
//     id: number;
//     name: string;
//     age: number;
// }

// const updateUser : Partial<User> = {
//     name: "Alice", // Không cần cung cấp tất cả các thuộc tính
// };

// // Required<T>
// interface User2 {
//     id?: number;
//     name?: string;
// }

// const user2: Required<User> = {
//     id: 1,
//     name = "Alice", // Tất cả các thuộc tính phải có
// };

// // Readonly<T>
// interface User3 {
//     id: number;
//     name: string;
// }

// const user3: Required<User> = {
//     id: 1,
//     name = "Alice",
// };

// // user3.id = 2; // Lỗi: Thuộc tính chỉ đọc hông thể đc thay đổi.