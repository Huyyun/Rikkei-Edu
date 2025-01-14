export default abstract class Room {
    protected _roomId: number;
    protected _type: string;
    protected _pricePerNight: number;
    protected _isAvailable: boolean;
    static roomIdCounter: number = 0

    constructor (type: string, pricePerNight: number, isAvailable: boolean) {
        this._roomId = ++Room.roomIdCounter;
        this._type = type;
        this._pricePerNight = pricePerNight;
        this._isAvailable = isAvailable;
    }

    get roomId(): number { return this._roomId; }
    get type(): string { return this._type; }
    get isAvailable(): boolean { return this._isAvailable; }
    get pricePerNight(): number { return this._pricePerNight; }
    // protected getPricePerNight(): number { return this._pricePerNight; }

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

export class StandardRoom extends Room {
    constructor(type: string, pricePerNight: number, isAvailable: boolean) {
        super(type, pricePerNight, isAvailable);
    }

    calculateCost(night: number): number {
        return night * this._pricePerNight;
    }

    getAdditionalServices(): string[] {
        return [];
    }

    applyDiscount(discountRate: number): number {
        return this._pricePerNight * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Hoàn lại 100% nếu hủy trước 1 ngày.";
    }
}

export class DeluxeRoom extends Room {
    constructor(type: string, pricePerNight: number, isAvailable: boolean) {
        super(type, pricePerNight * 2, isAvailable);
    }

    calculateCost(night: number): number {
        return night * this._pricePerNight;
    }

    getAdditionalServices(): string[] {
        return ["Bữa sáng"];
    }

    applyDiscount(discountRate: number): number {
        return this._pricePerNight * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Hoàn lại 50% nếu hủy trước 22 ngày.";
    }
}

export class SuiteRoom extends Room {
    constructor(type: string, pricePerNight: number, isAvailable: boolean) {
        super(type, pricePerNight * 4, isAvailable);
    }

    calculateCost(night: number): number {
        return night * this._pricePerNight;
    }

    getAdditionalServices(): string[] {
        return ["Spa", "Minibar"];
    }

    applyDiscount(discountRate: number): number {
        return this._pricePerNight * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Không hoàn lại chi phí nếu hủyhủy.";
    }
}