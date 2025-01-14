import { StandardRoom, DeluxeRoom, SuiteRoom } from "../models/Room.js";
import { Person } from "../models/Person.js";
import { Booking } from "../models/Booking.js";
import { roomTypes } from "../constants/constants.js";
export class HotelManager {
    constructor() {
        this.rooms = [];
        this.bookings = [];
        this.customers = [];
    }
    addRoom(type, pricePerNight) {
        let room;
        if (type === roomTypes[0]) {
            room = new StandardRoom(type, pricePerNight, true);
        }
        else if (type === roomTypes[1]) {
            room = new DeluxeRoom(type, pricePerNight, true);
        }
        else if (type === roomTypes[2]) {
            room = new SuiteRoom(type, pricePerNight, true);
        }
        else {
            console.log("Loại phòng không hợp lệ!");
            return;
        }
        this.rooms.push(room);
    }
    showRoom() {
        console.table(this.rooms);
    }
    addCustomer(name, email, phone) {
        let customer = new Person(name, email, phone);
        this.customers.push(customer);
        return customer;
    }
    showCustomer() {
        console.table(this.customers);
    }
    bookRoom(customerId, roomId, nights) {
        let customer = this.customers.find(function (el, i) {
            return el.id === customerId;
        });
        let room = this.rooms.find(function (el, i) {
            return el.roomId === roomId;
        });
        if (customer && room && room.isAvailable) {
            let booking = new Booking(customer, room, nights, room.calculateCost(nights));
            this.bookings.push(booking);
        }
        else {
            console.log("Không đặt được phòng vào lúc này");
        }
    }
    showCurrentBooking() {
        console.table(this.bookings);
    }
}
