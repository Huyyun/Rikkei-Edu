class Room {
    constructor(type, pricePerNight, isAvailable) {
        this._roomId = ++Room.roomIdCounter;
        this._type = type;
        this._pricePerNight = pricePerNight;
        this._isAvailable = isAvailable;
    }
    get roomId() { return this._roomId; }
    get type() { return this._type; }
    get isAvailable() { return this._isAvailable; }
    get pricePerNight() { return this._pricePerNight; }
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
export default Room;
export class StandardRoom extends Room {
    constructor(type, pricePerNight, isAvailable) {
        super(type, pricePerNight, isAvailable);
    }
    calculateCost(night) {
        return night * this._pricePerNight;
    }
    getAdditionalServices() {
        return [];
    }
    applyDiscount(discountRate) {
        return this._pricePerNight * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Hoàn lại 100% nếu hủy trước 1 ngày.";
    }
}
export class DeluxeRoom extends Room {
    constructor(type, pricePerNight, isAvailable) {
        super(type, pricePerNight * 2, isAvailable);
    }
    calculateCost(night) {
        return night * this._pricePerNight;
    }
    getAdditionalServices() {
        return ["Bữa sáng"];
    }
    applyDiscount(discountRate) {
        return this._pricePerNight * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Hoàn lại 50% nếu hủy trước 22 ngày.";
    }
}
export class SuiteRoom extends Room {
    constructor(type, pricePerNight, isAvailable) {
        super(type, pricePerNight * 4, isAvailable);
    }
    calculateCost(night) {
        return night * this._pricePerNight;
    }
    getAdditionalServices() {
        return ["Spa", "Minibar"];
    }
    applyDiscount(discountRate) {
        return this._pricePerNight * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Không hoàn lại chi phí nếu hủyhủy.";
    }
}
