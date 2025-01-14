import { Person } from "./Person";
import Room from "./Room";

export class Booking {
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

    getDetails(): void {
        console.table({
            bookingId: this._bookingId,
            customer: this._customer,
            room: this._room,
            nights: this._nights,
            totalCost: this._totalCost,
        });
    }
}