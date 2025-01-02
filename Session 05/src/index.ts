// // Tính trừu tượng (Abstraction )

// class Animal {
//     private _name: string;
//     constructor(name: string) {
//         this._name = name;
//     }

//     introduce() {
//         console.log(`Hello, may name is ${this._name}`);
//     }
// }

// // Khởi tạo ra instance (Đối tượng) từ lớp (class)
// let animal01 = new Animal("Donald Duck");

// // Không cần quan tâm đến logic của các phương thức 
// // được triển khai trong lớp Animal

// // Hiểu và nắm được cách sử dụng các phương thức trong lớp Animal




// // Tính trừu tượng trong lập trình hướng đối tượngtượng
// animal01.introduce(); 

// abstract class Rikkei {
//     private _taxCode: string;
//     private stakeholders: any[];

//     constructor(taxCode: string) {
//         this._taxCode = taxCode;
//         this.stakeholders = [{name: "Huy", share: "100%"}];
//     }

//     protected showTaxCode() {
//         console.log(`Rikkei Tax Code is ${this._taxCode}`);
//     }

//     abstract payTaxes(): void;
// }

// // Nhiệm vụ của trừu tượng là đưa ra các chỉ dẫn 
// // dành cho các lớp con kế thừa 

// // --> KHÔNG THỂ khởi tạ instance (đối tượng) từ lớp trừu tượng

// // let rikkei01 = new Rikkei("102512151312151");

// // Khi tiến hành kế thừa từ 1 lớp trừu tượng 

// class RikkeiEducation extends Rikkei {
//     private _bod: string[];

//     constructor(bod: string[]) {
//         super("102512151312151");
//         this._bod = bod;
//     }

//     override payTaxes() {
//         console.log("Đi đóng thuế !!!!");
//     }
// }


// // Khởi tạo ra các instance từ lớp RikkeiEducation
// let rikkeiEducation = new RikkeiEducation(["Huy", "Huyền"]);

// abstract class Human {
//     private _gene: string;
//     constructor(gene: string) {
//         this._gene = gene;
//     }

//     abstract reproduce(): void;
// }

// abstract class Person extends Human {
//     private _gender: boolean;

//     constructor(gender: boolean, gene: string) {
//         super(gene);
//         this._gender = gender;
//     }
//     abstract hunt(): void;
// }

// class Student extends Person {
//     private _name: string;

//     constructor(name: string, gender: boolean, gene: string) {
//         super(gender, gene);
//         this._name = name;
//     }

//     study() {
//         console.log("Làm bài tập, work work, work !!!");
//     }
//     reproduce(): void {
//         console.log("Sinh sản điiii !!!!");
//     }
//     hunt(): void {
//         console.log("Cần cù bù siêng năngggg !!!! Không làm đòi có ăn");
//     }
// }



// interface Sales {
//     name: string;
//     sale(): void;
// }

// interface Marketing {
//     name: string;
//     marketing(): void;
// }

// class RK implements Sales, Marketing {
//     public name: string;

//     constructor (name: string) {
//         this.name = name;
//     }

//     marketing(): void {
//         console.log("Doing marketing");
//     }

//     sale(): void {
//         console.log("Doing sale");
//     }
// }

// class Phenikaa implements Sales, Marketing {
//     public name: string;
//     constructor (name: string) {
//         this.name = name;
//     }

//     marketing(): void {
//         console.log("Doing marketing");
//     }

//     sale(): void {
//         console.log("Doing sale");
//     }
// }


// //

// interface Mkt {
//     marketing(): void;
// }

// interface DigitalMkt extends Mkt {
//     // 
//     doingMkt(): void;
// }

// class EnglishCenter implements DigitalMkt {
//     private _name: string;

//     constuctor(name: string) {
//         this._name = name;
//     }

//     doingMkt(): void {
//         console.log("Doing digital marketing");
//     }

//     marketing(): void {
//         console.log("Doing traditional marketing !!!!");
//     }
// }


// interface Person {
//     name: string;
//     age: number;
// }

// type Human = {
//     name: string;
//     age: number;
// };

// let p1: Person = {name: "Huy", age: 18};
// let p2: Human = {name: "Huy", age: 18};