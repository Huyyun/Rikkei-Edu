"use strict";
class Person {
    constructor(name) {
        this._id = ++Person.idCounter;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
Person.idCounter = 0;
class Customer extends Person {
    constructor(name, email, phone) {
        super(name);
        this._email = email;
        this._phone = phone;
    }
    get email() {
        return this._email;
    }
    get phone() {
        return this._phone;
    }
}
class Employee extends Person {
    constructor(name, position) {
        super(name);
        this._position = position;
    }
    get position() {
        return this._position;
    }
}
class Product {
    constructor(name, price, quantity) {
        this._id = ++Product.idCounter;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    getDetails() {
        return `Product [ID: ${this._id}, Name: ${this._name}, Price: ${this._price}, Quantity: ${this._quantity}]`;
    }
    sell(quantity) {
        if (this._quantity >= quantity) {
            this._quantity -= quantity;
        }
        else {
            console.log("Không đủ sản phẩm trong kho.");
        }
    }
    restock(quantity) {
        this._quantity += quantity;
    }
}
Product.idCounter = 0;
class Invoice {
    constructor(customer, employee, products) {
        this._customer = customer;
        this._employee = employee;
        this._products = products;
        this._totalAmount = 0;
        this.calculateTotal();
    }
    calculateTotal() {
        this._totalAmount = this._products.reduce((total, item) => {
            return total + item.product.getDetails().price * item.quantity;
        }, 0);
    }
    getInvoiceDetails() {
        return `Invoice [Customer: ${this._customer.name}, Employee: ${this._employee.name}, Total: ${this._totalAmount}]`;
    }
}
class StoreManager {
    constructor() {
        this.customers = [];
        this.employees = [];
        this.products = [];
        this.invoices = [];
    }
    addCustomer(name, email, phone) {
        let customer = new Customer(name, email, phone);
        this.customers.push(customer);
        console.log(`Thêm khách hàng ${name} thành công.`);
        console.log("*************************");
        if (this.customers.length === 0) {
            console.log("Không có bất kỳ thủ thư nào");
        }
        else {
            this.customers.forEach(function (element, index) {
                console.log(`${index + 1}.${element.name} - ${element.email} - ${element.phone}`);
            });
        }
    }
    addEmployee(name, position) {
        let employee = new Employee(name, position);
        this.employees.push(employee);
        console.log(`Thêm nhân viên ${name} thành công.`);
        console.log("*************************");
        if (this.employees.length === 0) {
            console.log("Không có bất kỳ thủ thư nào");
        }
        else {
            this.employees.forEach(function (element, index) {
                console.log(`${index + 1}.${element.name} - ${element.position}`);
            });
        }
    }
    addProduct(name, price, quantity) {
        let product = new Product(name, price, quantity);
        this.products.push(product);
        console.log(`Thêm sản phẩm ${name} thành công.`);
        console.log("*************************");
        if (this.products.length === 0) {
            console.log("Không có bất kỳ thủ thư nào");
        }
        else {
            this.products.forEach(function (element, index) {
                console.log(`${index + 1}.${element.name} - ${element.price} - ${element.quantity}`);
            });
        }
    }
    sellProduct(customerId, employeeId, productId, quantity) {
        let customer = this.customers.find(c => c.id === customerId);
        let employee = this.employees.find(e => e.id === employeeId);
        let product = this.products.find(p => p.id === productId);
        if (!customer) {
            console.log("Không tìm thấy khách hàng.");
            return;
        }
        if (!employee) {
            console.log("Không tìm thấy nhân viên.");
            return;
        }
        if (!product) {
            console.log("Không tìm thấy sản phẩm.");
            return;
        }
        product.sell(quantity);
        let invoice = new Invoice(customer, employee, [{ product, quantity }]);
        this.invoices.push(invoice);
        console.log("Hóa đơn đã được tạo.");
    }
    restockProduct(productId, quantity) {
        let product = this.products.find(p => p.id === productId);
        if (!product) {
            console.log("Không tìm thấy sản phẩm.");
            return;
        }
        product.restock(quantity);
        console.log(`Đã nhập hàng ${quantity} cho sản phẩm ${product.getDetails()}`);
    }
    listInvoices() {
        console.log("Danh sách hóa đơn:");
        this.invoices.forEach(invoice => {
            console.log(invoice.getInvoiceDetails());
        });
    }
}
class Main {
    constructor() {
        this._storeManager = new StoreManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("\nMenu chức năng:");
            console.log("1. Thêm khách hàng");
            console.log("2. Thêm nhân viên");
            console.log("3. Thêm sản phẩm");
            console.log("4. Bán hàng");
            console.log("5. Nhập hàng bổ sung");
            console.log("6. Hiển thị danh sách hóa đơn");
            console.log("7. Dừng chương trình");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1 - 7)");
            switch (choice) {
                case "1":
                    const customerName = prompt("Nhập tên khách hàng: ");
                    const email = prompt("Nhập email khách hàng: ");
                    const phone = prompt("Nhập số điện thoại khách hàng: ");
                    this._storeManager.addCustomer(customerName, email, phone);
                    break;
                case "2":
                    const employeeName = prompt("Nhập tên nhân viên: ");
                    const position = prompt("Nhập vị trí công việc của nhân viên: ");
                    this._storeManager.addEmployee(employeeName, position);
                    break;
                case "3":
                    const productName = prompt("Nhập tên sản phẩm: ");
                    const price = parseFloat(prompt("Nhập giá sản phẩm: "));
                    const quantity = parseInt(prompt("Nhập số lượng sản phẩm: "));
                    this._storeManager.addProduct(productName, price, quantity);
                    break;
                case "4":
                    const customerId = parseInt(prompt("Nhập ID khách hàng: "));
                    const employeeId = parseInt(prompt("Nhập ID nhân viên: "));
                    const productId = parseInt(prompt("Nhập ID sản phẩm: "));
                    const quantityToSell = parseInt(prompt("Nhập số lượng sản phẩm: "));
                    this._storeManager.sellProduct(customerId, employeeId, productId, quantityToSell);
                    break;
                case "5":
                    const productIdRestock = parseInt(prompt("Nhập ID sản phẩm cần nhập hàng: "));
                    const quantityToRestock = parseInt(prompt("Nhập số lượng hàng nhập vào: "));
                    this._storeManager.restockProduct(productIdRestock, quantityToRestock);
                    break;
                case "6":
                    this._storeManager.listInvoices();
                    break;
                case "7":
                    loop = false;
                    console.log("Chương trình kết thúc.");
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
                    break;
            }
        }
    }
}
const app = new Main();
app.bootstrap();
