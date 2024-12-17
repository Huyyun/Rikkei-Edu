// B1: Khởi tạo class
// - Tên class viết hoa
class Department {
    // B2: Liệt kê các thuộc tính (Properties)
    // Tính chất của đối tượng cần mô tả
    // access_modifier (bổ từ truy cập) + property_name: data_type;
    // private id: string;
    // private name: string;
    // private manager: string;
    private _manager: string;

    id: string;
    name: string;

    // public id: string;
    // public name: string;

    // B3: Tạo 1 phương thức đặc biệt
    // Phương thức khởi tạo - Constructor function
    // Phương thức dùng để khởi tạo giá trị dành cho các thuộc tính
    // của 1 đối tượng (instance) khi đc khởi tạo từ 1 lớp (class)
    // --> Constructor function hoạt động ntn?
    constructor(id: string, name: string, manager: string) {
        // Từ khóa 'this' -> Dùng để tham chiếu (reference) tới chính
        // lớp (class) đang sử dụng nó
        // this.id === Department.id
        // this.name === Department.name

        // id = 2;
        // name = "Marketing";
        this.id = id;
        this.name = name;
        // this.manager = manager;
        this._manager = manager;
    }

    // B4: Mô phỏng các hành động của đối tượng trong thực tế
    // thông qua các phương thức (hàm)
    // Hàm ở trong lớp ---> method (phương thức)

    // manager getter
    // get getManager(): string {
    //     return this.manager;
    // }
    get manager(): string {
        // Cung cấp thêm các phương thức để validate (Kiểm tra tính hợp lệ)
        // của dữ liệu đầu vào
        // Bổ sung các đoạn logic validate dữ liệu
        // Logic A
        // Logic B
        // ....
        return this._manager;
    }

    // manager setter
    // set setManager(manager: string) {
    //     this.manager = manager;
    // }
    set manager(manager: string) {
        this._manager = manager;
    }

    describe() {
        console.log(`This is ${this.name} Department with id: ${this.id}`);
    }

    // public describe() {
    //     console.log(`This is ${this.name} Department with id: ${this.id}`);
    // }
}

// Phòng kinh doanh (Sale Department)
// Phòng marketing (Marketing Department)
// Phòng đào tạo (Education Department)
// Phòng nghiên cứu và phát triển (Research & Development Department)
// ......

// Khởi tạo ra các instance (đối tượng con)
// Từ 1 bản nguyên mẫu (lớp - class cha)
let educationDepartment = new Department("1", "Education", "Nguyễn Văn A");
console.log(educationDepartment);

let mktDepartment = new Department("3", "Marketing", "Trần Văn B"); // {id: "3", name: "Marketing}
console.log(mktDepartment);

// dot notation (.) --> Truy cập vào các thuộc tính và phương thức của 1 đối tượng
console.log("Id:", mktDepartment.id);
console.log("Name:", mktDepartment.name);
mktDepartment.name = "Advance Marketing";
console.log("Name:", mktDepartment.name);


mktDepartment.describe();

// Truy cập vào thuộc tính private
// console.log("Manager:", mktDepartment.getManager);
console.log("Manager:", mktDepartment.manager);
// mktDepartment.setManager = "Bill Gates";
mktDepartment.manager = "Bill Gates";
// console.log("Manager:", mktDepartment.getManager);
console.log("Manager:", mktDepartment.manager);

// - Liên quan đến ngữ cảnh (context) sử dụng từ khóa 'this'
// - Bàn về chủ đề này sau ??? (time-consuming)
let accounting = {
    describe: educationDepartment.describe.bind({ id: "2", name: "Accounting" }),
};
accounting.describe();

// Homework
// Làm BT khoảng 2 bài trong portal
// Làm BT tổng hợp: https://docs.google.com/document/d/1PUlooMsHuMDwl62OVC_ubhcE68ENOcAY/edit