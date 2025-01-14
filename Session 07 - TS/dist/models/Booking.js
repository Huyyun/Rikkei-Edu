export class Booking {
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
        console.table({
            bookingId: this._bookingId,
            customer: this._customer,
            room: this._room,
            nights: this._nights,
            totalCost: this._totalCost,
        });
    }
}
Booking.bookingIdCounter = 0;
