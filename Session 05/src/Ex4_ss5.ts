// class Person {
//     private _id: number;
//     private _name: string;
//     static idCounter: number = 0;

//     constructor(name: string) {
//         this._id = ++Person.idCounter;
//         this._name = name;
//     }

//     get id() {
//         return this._id;
//     }

//     get name() {
//         return this._name;
//     }
// }

// class Customer extends Person {
//     private _email: string;
//     private _phone: string;

//     constructor(name: string, email: string, phone: string) {
//         super(name);
//         this._email = email;
//         this._phone = phone;
//     }

//     get email() {
//         return this._email;
//     }

//     get phone() {
//         return this._phone;
//     }
// }

// class Employee extends Person {
//     private _position: string;

//     constructor(name: string, position: string) {
//         super(name);
//         this._position = position;
//     }

//     get position() {
//         return this._position;
//     }
// }

// class Product {
//     private _id: number;
//     private _name: string;
//     private _price: number;
//     private _quantity: number;
//     static idCounter: number = 0;

//     constructor(name: string, price: number, quantity: number) {
//         this._id = ++Product.idCounter;
//         this._name = name;
//         this._price = price;
//         this._quantity = quantity;
//     }

//     get id() {
//         return this._id;
//     }

//     get name() { 
//         return this._name; 
//     }

//     get price() {
//         return this._price;
//     }

//     get quantity() {
//         return this._quantity;
//     }

//     getDetails() {
//         return `Product [ID: ${this._id}, Name: ${this._name}, Price: ${this._price}, Quantity: ${this._quantity}]`;
//     }

//     sell(quantity: number) {
//         if (this._quantity >= quantity) {
//             this._quantity -= quantity;
//         } else {
//             console.log("Không đủ sản phẩm trong kho.");
//         }
//     }

//     restock(quantity: number) {
//         this._quantity += quantity;
//     }
// }

// class Invoice {
//     private _customer: Customer;
//     private _employee: Employee;
//     private _products: { product: Product, quantity: number }[];
//     private _totalAmount: number;

//     constructor(customer: Customer, employee: Employee, products: { product: Product, quantity: number }[]) {
//         this._customer = customer;
//         this._employee = employee;
//         this._products = products;
//         this._totalAmount = 0;
//         this.calculateTotal();
//     }

//     calculateTotal() {
//         this._totalAmount = this._products.reduce((total, item) => {
//             return total + (item.product.getDetails() as any).price * item.quantity;
//         }, 0);
//     }

//     getInvoiceDetails() {
//         return `Invoice [Customer: ${this._customer.name}, Employee: ${this._employee.name}, Total: ${this._totalAmount}]`;
//     }
// }

// class StoreManager {
//     private customers: Customer[] = [];
//     private employees: Employee[] = [];
//     private products: Product[] = [];
//     private invoices: Invoice[] = [];

//     addCustomer(name: string, email: string, phone: string) {
//         let customer = new Customer(name, email, phone);
//         this.customers.push(customer);
//         console.log(`Thêm khách hàng ${name} thành công.`);
//         console.log("*************************");
//         if (this.customers.length === 0) {
//             console.log("Không có bất kỳ thủ thư nào");
//         } else {
//             this.customers.forEach(function(element: Customer, index: number){
//                 console.log(`${index + 1}.${element.name} - ${element.email} - ${element.phone}`);
//             });
//         }
//     }

//     addEmployee(name: string, position: string) {
//         let employee = new Employee(name, position);
//         this.employees.push(employee);
//         console.log(`Thêm nhân viên ${name} thành công.`);
//         console.log("*************************");
//         if (this.employees.length === 0) {
//             console.log("Không có bất kỳ thủ thư nào");
//         } else {
//             this.employees.forEach(function(element: Employee, index: number){
//                 console.log(`${index + 1}.${element.name} - ${element.position}`);
//             });
//         }
//     }

//     addProduct(name: string, price: number, quantity: number) {
//         let product = new Product(name, price, quantity);
//         this.products.push(product);
//         console.log(`Thêm sản phẩm ${name} thành công.`);
//         console.log("*************************");
//         if (this.products.length === 0) {
//             console.log("Không có bất kỳ thủ thư nào");
//         } else {
//             this.products.forEach(function(element: Product, index: number){
//                 console.log(`${index + 1}.${element.name} - ${element.price} - ${element.quantity}`);
//             });
//         }
//     }

//     sellProduct(customerId: number, employeeId: number, productId: number, quantity: number) {
//         let customer = this.customers.find(c => c.id === customerId);
//         let employee = this.employees.find(e => e.id === employeeId);
//         let product = this.products.find(p => p.id === productId);

//         if (!customer) {
//             console.log("Không tìm thấy khách hàng.");
//             return;
//         }

//         if (!employee) {
//             console.log("Không tìm thấy nhân viên.");
//             return;
//         }

//         if (!product) {
//             console.log("Không tìm thấy sản phẩm.");
//             return;
//         }

//         product.sell(quantity);

//         let invoice = new Invoice(customer, employee, [{ product, quantity }]);
//         this.invoices.push(invoice);

//         console.log("Hóa đơn đã được tạo.");
//     }

//     restockProduct(productId: number, quantity: number) {
//         let product = this.products.find(p => p.id === productId);

//         if (!product) {
//             console.log("Không tìm thấy sản phẩm.");
//             return;
//         }

//         product.restock(quantity);
//         console.log(`Đã nhập hàng ${quantity} cho sản phẩm ${product.getDetails()}`);
//     }

//     listInvoices() {
//         console.log("Danh sách hóa đơn:");
//         this.invoices.forEach(invoice => {
//             console.log(invoice.getInvoiceDetails());
//         });
//     }
// }

// // Lớp Main (Chương trình chính)
// class Main {
//     private _storeManager: StoreManager;

//     constructor() {
//         this._storeManager = new StoreManager();
//     }

//     bootstrap() {
//         let loop: boolean = true;

//         while (loop) {
//             console.log("\nMenu chức năng:");
//             console.log("1. Thêm khách hàng");
//             console.log("2. Thêm nhân viên");
//             console.log("3. Thêm sản phẩm");
//             console.log("4. Bán hàng");
//             console.log("5. Nhập hàng bổ sung");
//             console.log("6. Hiển thị danh sách hóa đơn");
//             console.log("7. Dừng chương trình");

//             let choice = prompt("Mời bạn nhập vào lựa chọn (1 - 7)");

//             switch (choice) {
//                 case "1":
//                     const customerName = prompt("Nhập tên khách hàng: ");
//                     const email = prompt("Nhập email khách hàng: ");
//                     const phone = prompt("Nhập số điện thoại khách hàng: ");
//                     this._storeManager.addCustomer(customerName!, email!, phone!);
//                     break;

//                 case "2":
//                     const employeeName = prompt("Nhập tên nhân viên: ");
//                     const position = prompt("Nhập vị trí công việc của nhân viên: ");
//                     this._storeManager.addEmployee(employeeName!, position!);
//                     break;

//                 case "3":
//                     const productName = prompt("Nhập tên sản phẩm: ");
//                     const price = parseFloat(prompt("Nhập giá sản phẩm: ")!);
//                     const quantity = parseInt(prompt("Nhập số lượng sản phẩm: ")!);
//                     this._storeManager.addProduct(productName!, price, quantity);
//                     break;

//                 case "4":
//                     const customerId = parseInt(prompt("Nhập ID khách hàng: ")!);
//                     const employeeId = parseInt(prompt("Nhập ID nhân viên: ")!);
//                     const productId = parseInt(prompt("Nhập ID sản phẩm: ")!);
//                     const quantityToSell = parseInt(prompt("Nhập số lượng sản phẩm: ")!);
//                     this._storeManager.sellProduct(customerId, employeeId, productId, quantityToSell);
//                     break;

//                 case "5":
//                     const productIdRestock = parseInt(prompt("Nhập ID sản phẩm cần nhập hàng: ")!);
//                     const quantityToRestock = parseInt(prompt("Nhập số lượng hàng nhập vào: ")!);
//                     this._storeManager.restockProduct(productIdRestock, quantityToRestock);
//                     break;

//                 case "6":
//                     this._storeManager.listInvoices();
//                     break;

//                 case "7":
//                     loop = false;
//                     console.log("Chương trình kết thúc.");
//                     break;

//                 default:
//                     console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
//                     break;
//             }
//         }
//     }
// }

// const app = new Main();
// app.bootstrap();
