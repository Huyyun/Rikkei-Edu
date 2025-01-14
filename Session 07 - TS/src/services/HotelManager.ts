import Room from "../models/Room.js";
import { StandardRoom, DeluxeRoom, SuiteRoom } from "../models/Room.js";
import { Person } from "../models/Person.js";
import { Booking } from "../models/Booking.js";
import { roomTypes} from "../constants/constants.js";

export class HotelManager {
    private rooms: Room[] = [];
    private bookings: Booking[] = [];
    private customers: Person[] = [];

    addRoom(type: string, pricePerNight: number): void {
        let room: Room;
        
        if (type === roomTypes[0]) {
            room = new StandardRoom(type, pricePerNight, true);
        } else if (type === roomTypes[1]) {
            room = new DeluxeRoom(type, pricePerNight, true);
        } else if (type === roomTypes[2]) {
            room = new SuiteRoom(type, pricePerNight, true);
        } else {
            console.log("Loại phòng không hợp lệ!");
            return;
        }

        this.rooms.push(room);
        // console.log(`Phòng ${type} đã được thêm thành công.`);
        // if (this.rooms.length === 0) {
        //     console.log("Không có bất kỳ phòng nào");
        // } else {
        //     this.rooms.forEach(function(element: Room, index: number){
        //         console.log(`${index + 1}. ${element.type} - ${element.pricePerNight}`);
        //     })
        // }
    }
    showRoom(): void {
        console.table(this.rooms);
    }

    addCustomer(name: string, email: string, phone: string): Person {
        let customer = new Person(name, email, phone);
        this.customers.push(customer);
        // console.log(`Đã thêm khách hàng ${name} thành công`);
        // if (this.customers.length === 0) {
        //     console.log("Không có bất kỳ khách hàng nào");
        // } else {
        //     this.customers.forEach(function(element: Person, index: number) {
        //         console.log(`${index + 1}. ${element.getDetails()}`)
        //     });
        // }
        return customer;
    }
    showCustomer(): void {
        console.table(this.customers);
    }

    bookRoom(customerId: number, roomId: number, nights: number): void {
        // let customer = this.customers.find(customer => customer.id === customerId);
        // let room = this.rooms.find(room => room.roomId === roomId);

        // if (!customer || !room) {
        //     console.log("Không tìm thấy khách hàng hoặc phòng nào");
        //     return;
        // }

        // room.bookRoom();
        // let booking = new Booking(customer, room, nights);
        // this.bookings.push(booking);
        // console.log(`Khách hàng ${customer.name} đặt phòng loại ${room.type} thành công`);


        // B1: Kiểm tra xem có khách hàng nào với customerId người dùng nhập vào hay không
        let customer = this.customers.find(function(el, i) {
            return el.id === customerId;
        });

        // B2: Kiểm tra xem có room nào với roomId người dùng nhập vào hay không
        let room = this.rooms.find(function(el, i){
            return el.roomId === roomId;
        });

        // B2.1: Kiểm tra xem phòng còn trống hay khôngkhông
        // B3: Nếu tồn tại cả 2 --> Book phòng (Khởi tạo ra 1 instance, đối tượng booking)
        // đối tượng đó vào mảng bookings
        if (customer && room && room.isAvailable) {
            let booking = new Booking(customer, room, nights, room.calculateCost(nights));
            this.bookings.push(booking);
        } else {
            console.log("Không đặt được phòng vào lúc này")
        }
    }
    showCurrentBooking(): void {
        console.table(this.bookings);
    }
}