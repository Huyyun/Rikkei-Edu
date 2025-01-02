"use strict";
class Person {
    constructor(name, email, phone) {
        this._id = ++Person.idCounter;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }
    get id() { return this._id; }
    get name() { return this._name; }
    get email() { return this._email; }
    get phone() { return this._phone; }
    getDetails() {
        return ` ${this._name} - ${this._email} - ${this._phone}]`;
    }
}
Person.idCounter = 0;
class Room {
    constructor(type, pricePerNight) {
        this._roomId = ++Room.roomIdCounter;
        this._type = type;
        this._pricePerNight = pricePerNight;
        this._isAvailable = false;
    }
    get roomId() { return this._roomId; }
    get type() { return this._type; }
    get isAvailable() { return this._isAvailable; }
    get pricePerNight() { return this._pricePerNight; }
    getPricePerNight() { return this._pricePerNight; }
    bookRoom() {
        this._isAvailable = false;
        console.log(`Phòng ${this._roomId} đã được đặt`);
    }
    releaseRoom() {
        this._isAvailable = true;
        console.log(`Phòng ${this._roomId} đã được trả`);
    }
}
Room.roomIdCounter = 0;
class StandardRoom extends Room {
    calculateCost(night) {
        return night * this.getPricePerNight();
    }
    getAdditionalServices() {
        return [];
    }
    applyDiscount(discountRate) {
        return this.getPricePerNight() * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Hoàn lại 100% nếu hủy trước 1 ngày.";
    }
}
class DeluxeRoom extends Room {
    calculateCost(night) {
        return night * this.getPricePerNight();
    }
    getAdditionalServices() {
        return ["Bữa sángsáng"];
    }
    applyDiscount(discountRate) {
        return this.getPricePerNight() * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Hoàn lại 50% nếu hủy trước 22 ngày.";
    }
}
class SuiteRoom extends Room {
    calculateCost(night) {
        return night * this.getPricePerNight();
    }
    getAdditionalServices() {
        return ["Spa", "Minibar"];
    }
    applyDiscount(discountRate) {
        return this.getPricePerNight() * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Không hoàn lại chi phí nếu hủyhủy.";
    }
}
class Booking {
    constructor(customer, room, nights, totalCost) {
        this._bookingId = ++Booking.bookingIdCounter;
        this._customer = customer;
        this._room = room;
        this._nights = nights;
        this._totalCost = totalCost;
    }
    get bookingId() { return this._bookingId; }
    get customer() { return this._customer; }
    get room() { return this._room; }
    get nights() { return this._nights; }
    get totalCost() { return this._totalCost; }
    getDetails() {
        return `Booking: [ID: ${this._bookingId}, Customer: ${this._customer.name}, Room: ${this._room.roomId}, Nights: ${this._nights}, Total Cost: ${this._totalCost}]`;
    }
}
Booking.bookingIdCounter = 0;
class HotelManager {
    constructor() {
        this.rooms = [];
        this.bookings = [];
        this.customers = [];
    }
    addRoom(type, pricePerNight) {
        let room;
        if (type === "Standard") {
            room = new StandardRoom(type, pricePerNight);
        }
        else if (type === "Deluxe") {
            room = new DeluxeRoom(type, pricePerNight);
        }
        else if (type === "Suite") {
            room = new SuiteRoom(type, pricePerNight);
        }
        else {
            console.log("Loại phòng không hợp lệ!");
            return;
        }
        this.rooms.push(room);
        console.log(`Phòng ${type} đã được thêm thành công.`);
        if (this.rooms.length === 0) {
            console.log("Không có bất kỳ phòng nào");
        }
        else {
            this.rooms.forEach(function (element, index) {
                console.log(`${index + 1}. ${element.type} - ${element.pricePerNight}`);
            });
        }
    }
    addCustomer(name, email, phone) {
        let customer = new Person(name, email, phone);
        this.customers.push(customer);
        console.log(`Đã thêm khách hàng ${name} thành công`);
        if (this.customers.length === 0) {
            console.log("Không có bất kỳ khách hàng nào");
        }
        else {
            this.customers.forEach(function (element, index) {
                console.log(`${index + 1}. ${element.getDetails()}`);
            });
        }
    }
    bookRoom(customerId, roomId, nights) {
        let customer = this.customers.find(customer => customer.id === customerId);
        let room = this.rooms.find(room => room.roomId === roomId);
        if (!customer || !room) {
            console.log("Không tìm thấy khách hàng hoặc phòng nào");
            return;
        }
        room.bookRoom();
        let booking = new Booking(customer, room, nights);
        this.bookings.push(booking);
        console.log(`Khách hàng ${customer.name} đặt phòng loại ${room.type} thành công`);
    }
}
class Main {
    constructor(hotelManager) {
        this._hotelManager = hotelManager;
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Thêm khách hàng.");
            console.log("Thêm phòng.");
            console.log("Đặt phòng.");
            console.log("Trả phòng.");
            console.log("Hiển thị danh sách phòng còn trống");
            console.log("Hiển thị danh sách đặt phòng của khách hàng");
            console.log("Tính tổng doanh thu từ các đặt phòng");
            console.log("Đếm số lượng từng loại phòng");
            console.log("Áp dụng giảm giá cho phòng");
            console.log("Hiển thị các dịch vụ bổ sung của phòng");
            console.log("Hiển thị chính sách hủy phòng");
            console.log("Thoát chương trình.");
        }
    }
}
