class Person {
    private _id: number;
    private _name: string;
    private _email: string;
    private _phone: string;
    static idCounter: number = 0

    constructor (name: string, email: string, phone: string){
        this._id = ++Person.idCounter;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    get email(): string { return this._email; }
    get phone(): string { return this._phone; }

    getDetails(): string {
        return ` ${this._name} - ${this._email} - ${this._phone}]`;
    }
}

abstract class Room {
    private _roomId: number;   
    private _type: string;
    private _pricePerNight: number;
    private _isAvailable: boolean;
    static roomIdCounter: number = 0

    constructor (type: string, pricePerNight: number) {
        this._roomId = ++Room.roomIdCounter;
        this._type = type;
        this._pricePerNight = pricePerNight;
        this._isAvailable = false;
    }

    get roomId(): number { return this._roomId; }
    get type(): string { return this._type; }
    get isAvailable(): boolean { return this._isAvailable; }
    get pricePerNight(): number { return this._pricePerNight; }
    protected getPricePerNight(): number { return this._pricePerNight; }

    bookRoom(): void {
        this._isAvailable = false;
        console.log(`Phòng ${this._roomId} đã được đặt`);
    }

    releaseRoom(): void {
        this._isAvailable = true;
        console.log(`Phòng ${this._roomId} đã được trả`);
    }

    abstract calculateCost(night: number): number;
    abstract getAdditionalServices(): string[];
    abstract applyDiscount(discountRate: number): number;
    abstract getCancellationPolicy(): string;
}

class StandardRoom extends Room {
    calculateCost(night: number): number {
        return night * this.getPricePerNight();
    }

    getAdditionalServices(): string[] {
        return [];
    }

    applyDiscount(discountRate: number): number {
        return this.getPricePerNight() * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Hoàn lại 100% nếu hủy trước 1 ngày.";
    }
}

class DeluxeRoom extends Room {
    calculateCost(night: number): number {
        return night * this.getPricePerNight();
    }

    getAdditionalServices(): string[] {
        return ["Bữa sángsáng"];
    }

    applyDiscount(discountRate: number): number {
        return this.getPricePerNight() * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Hoàn lại 50% nếu hủy trước 22 ngày.";
    }
}

class SuiteRoom extends Room {
    calculateCost(night: number): number {
        return night * this.getPricePerNight();
    }

    getAdditionalServices(): string[] {
        return ["Spa", "Minibar"];
    }

    applyDiscount(discountRate: number): number {
        return this.getPricePerNight() * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Không hoàn lại chi phí nếu hủyhủy.";
    }
}

class Booking {
    private _bookingId: number;
    private _customer: Person;
    private _room: Room;
    private _nights: number;
    private _totalCost: number;
    static bookingIdCounter: number = 0;

    constructor (customer: Person, room: Room, nights: number, totalCost: number) {
        this._bookingId = ++Booking.bookingIdCounter;
        this._customer = customer;
        this._room = room;
        this._nights = nights;
        this._totalCost = totalCost;
    }

    get bookingId(): number { return this._bookingId; }
    get customer(): Person { return this._customer; }
    get room(): Room { return this._room; }
    get nights(): number { return this._nights; }
    get totalCost(): number { return this._totalCost; }

    getDetails(): string {
        return `Booking: [ID: ${this._bookingId}, Customer: ${this._customer.name}, Room: ${this._room.roomId}, Nights: ${this._nights}, Total Cost: ${this._totalCost}]`;
    }
}

class HotelManager {
    private rooms: Room[] = [];
    private bookings: Booking[] = [];
    private customers: Person[] = [];

    addRoom(type: string, pricePerNight: number): void {
        let room: Room;
        
        if (type === "Standard") {
            room = new StandardRoom(type, pricePerNight);
        } else if (type === "Deluxe") {
            room = new DeluxeRoom(type, pricePerNight);
        } else if (type === "Suite") {
            room = new SuiteRoom(type, pricePerNight);
        } else {
            console.log("Loại phòng không hợp lệ!");
            return;
        }

        this.rooms.push(room);
        console.log(`Phòng ${type} đã được thêm thành công.`);
        if (this.rooms.length === 0) {
            console.log("Không có bất kỳ phòng nào");
        } else {
            this.rooms.forEach(function(element: Room, index: number){
                console.log(`${index + 1}. ${element.type} - ${element.pricePerNight}`);
            })
        }
    }

    addCustomer(name: string, email: string, phone: string): void {
        let customer = new Person(name, email, phone);
        this.customers.push(customer);
        console.log(`Đã thêm khách hàng ${name} thành công`);
        if (this.customers.length === 0) {
            console.log("Không có bất kỳ khách hàng nào");
        } else {
            this.customers.forEach(function(element: Person, index: number) {
                console.log(`${index + 1}. ${element.getDetails()}`)
            });
        }
    }

    bookRoom(customerId: number, roomId: number, nights: number): void {
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
    private _hotelManager: HotelManager;

    constructor (hotelManager: HotelManager) {
        this._hotelManager = hotelManager;
    }

    bootstrap(): void {
        let loop: boolean = true;

        while(loop) {
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