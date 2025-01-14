import { Person } from "./models/Person.js";
import { HotelManager } from "./services/HotelManager.js";
import { printMenu } from "./utils/printMenu.js";
let person = new Person("Won", "Hyun", "Valhalla");
console.log(person);
class Main {
    constructor() {
        this.manager = new HotelManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            let userInput = prompt(printMenu());
            switch (userInput) {
                case "1":
                    let customerName = prompt("Mời bạn nhập vào tên khách hàng: ");
                    let email = prompt("Mời bạn nhập vào email khách hàng: ");
                    let phone = prompt("Mời bạn nhập vào phone khách hàng: ");
                    if (customerName && email && phone) {
                        this.manager.addCustomer(customerName, email, phone);
                        this.manager.showCustomer();
                    }
                    else {
                        console.log("Dữ liệu đầu vào không hợp lệ");
                    }
                    break;
                case "2":
                    let type = prompt("Mời bạn nhập vào kiểu phòng: ");
                    let price = prompt("Mời bạn nhập vào giá/đêm của phòng: ");
                    if (type && price) {
                        this.manager.addRoom(type, +price);
                        this.manager.showRoom();
                    }
                    else {
                        console.log("Dữ liệu đầu vào không hợp lệ");
                    }
                    break;
                case "3":
                    let customerId = prompt("Mời bạn nhập vào id khách hàng: ");
                    let roomId = prompt("Mời bạn nhập vào id phòng: ");
                    let nights = prompt(`Mời bạn nhập vào số đeem khách hàng ${customerId} muốn đặt: `);
                    if (customerId && roomId && nights) {
                        this.manager.bookRoom(+customerId, +roomId, +nights);
                        this.manager.showCurrentBooking();
                    }
                    else {
                        console.log("Dữ liệu đầu vào không hợp lệ");
                    }
                    break;
                case "4":
                    console.log("Trả phòng.     ");
                    break;
                case "5":
                    console.log("Hiển thị danh sách phòng còn trống (sử dụng filter).  ");
                    break;
                case "6":
                    console.log("Hiển thị danh sách đặt phòng của khách hàng (sử dụng filter).  ");
                    break;
                case "7":
                    console.log("Tính tổng doanh thu từ các đặt phòng (sử dụng reduce).  ");
                    break;
                case "8":
                    console.log("Đếm số lượng từng loại phòng (sử dụng reduce hoặc map).  ");
                    break;
                case "9":
                    console.log("Áp dụng giảm giá cho phòng (sử dụng findIndex).  ");
                    break;
                case "10":
                    console.log("Hiển thị các dịch vụ bổ sung của phòng (sử dụng find).  ");
                    break;
                case "11":
                    console.log("Hiển thị chính sách hủy phòng (sử dụng find).  ");
                    break;
                case "12":
                    console.log("Cảm ơn bạn. See you again !!!!");
                    loop = false;
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
            }
        }
    }
}
const app = new Main();
app.bootstrap();
