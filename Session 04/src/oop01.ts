// [BTVN] OOP (01) - Ứng dụng quản lý task

// 1. Mục tiêu
// Nằm được cách khởi tạo một Lớp (Class) và Đối tượng (Instance) từ lớp
// Nằm được tính chất cơ bản đầu tiên của lập trình hướng đối tượng (Tính bao đóng/Encapsulation)
// Nằm được cách triển khai một ứng dụng bằng mô hình lập trình hướng đối tượng (OOP)
// 2. Mô tả
// Xây dựng một chương trình quản lý task trong công ty với các chức năng sau:

// 1. Lớp Employee (Nhân viên):
// Thuộc tính:
// id: number - Mã nhân viên duy nhất.
// name: string - Tên nhân viên.
// 2. Lớp Task (Công việc):
// Thuộc tính:
// id: number - Mã task duy nhất.
// title: string - Tên công việc.
// deadline: Date - Hạn hoàn thành task.
// isCompleted: boolean - Trạng thái hoàn thành (mặc định là false).
 

 

// 3. Lớp Assignment (Phân công công việc):
// Thuộc tính:
// employee: Employee - Thông tin nhân viên.
// task: Task - Thông tin task được giao.
 

// 4. Lớp TaskManager (Quản lý công việc):
// Thuộc tính:
// employees: Employee[] - Danh sách nhân viên.
// tasks: Task[] - Danh sách task.
// assignments: Assignment[] - Danh sách task đã được phân công.
// Phương thức:
// addEmployee(name: string): void - Thêm nhân viên mới vào danh sách.
// addTask(title: string, deadline: string): void - Thêm task mới với hạn hoàn thành.
// assignTask(employeeId: number, taskId: number): void - Phân công task cho nhân viên.
// completeTask(taskId: number): void - Đánh dấu task là hoàn thành.
// listTasks(): void - Hiển thị danh sách task với trạng thái hoàn thành và quá hạn nếu có.
 

// 5. Lớp Main (Chương trình chính):
// Khởi tạo đối tượng TaskManager.
// Chạy chương trình theo menu lựa chọn trong vòng lặp while.
 

// Menu chức năng:
// Thêm nhân viên mới.
// Thêm task mới.
// Gán task cho nhân viên.
// Đánh dấu task hoàn thành.
// Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có).
// Dừng chương trình.
 

// Yêu cầu bổ sung:
// Nhập thông tin từ người dùng thông qua prompt.
// Hiển thị kết quả tương ứng với từng thao tác.
// In thông báo lỗi nếu người dùng nhập thông tin không hợp lệ hoặc không tìm thấy nhân viên/task.
// 3. Đánh giá
// Để hoàn thành bài thực hành, học viên cần:
//   Đưa mã nguồn lên GitHub.
//   Dán link của repository lên phần nộp bài trên hệ thống.


class Employee {
    private _id: number;
    private _name: string;
    static idCounter: number = 0;

    constructor (name: string) {
        this._id = ++Employee.idCounter;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}

class Task {
    private _id: number;
    private _title: string;
    private _deadline: string;
    private _isCompleted: boolean;
    static idCounter: number = 0;

    constructor (title: string, deadline: string, isCompleted: boolean = false) {
        this._id = ++Task.idCounter;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = isCompleted;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get deadline(): string  {
        return this._deadline;
    }

    get isCompleted(): boolean {
        return this._isCompleted
    }

    set isCompleted(value: boolean) {
        this._isCompleted = value;
    }
}

class Assignment {
    private _employee: Employee;
    private _task: Task;
    constructor(employee: Employee, task: Task) {
        this._employee = employee;
        this._task = task;
    }
}

class TaskManager {
    public employees: Employee[];
    public tasks: Task[];
    public assignments: Assignment[];
    constructor () {
        this.employees = [];
        this.tasks = [];
        this.assignments = [];
    }

    addEmployee(name: string): void {
        // let id = Math.random();
        let newEmployee = new Employee(name);
        this.employees.push(newEmployee);
        console.log("*************************");
        if(this.employees.length === 0) {
            console.log("Không có bất kỳ nhân viên nào");
        } else {
            this.employees.forEach(function(element: Employee, index: number) {
                console.log(`${index + 1}.${element.name}`);
            });
        }
    }

    addTask(title: string, deadline: string): void {
        // let id = Math.random();
        let newTask = new Task(title, deadline);
        this.tasks.push(newTask);
        this.listTasks();
    }

    assignTask(employeeId: number, taskId: number): void {
        console.log("Danh sách nhân viên hiện tại:", this.employees);
        console.log("Danh sách nhiệm vụ hiện tại:", this.tasks);

        let employee = this.employees.find(emp => emp.id === employeeId);
        let task = this.tasks.find(tsk => tsk.id === taskId);

        if (!employee) {
            console.log("Không tìm thấy nhân viên với ID: " + employeeId);
            return;
        }

        if (!task) {
            console.log("Không tìm thấy nhiệm vụ với ID: " + taskId);
            return;
        }

        if (task.isCompleted) {
            console.log("Nhiệm vụ đã hoàn thành, không thể gán.");
            return;
        }

        let assignment = new Assignment(employee, task);
        this.assignments.push(assignment);
        console.log(`Đã phân công nhiệm vụ "${task.title}" cho nhân viên "${employee.name}".`);
    }

    completeTask(taskId: number): void {
        let task = this.tasks.find(tsk => tsk.id === taskId);

        if (!task) {
            console.log("Không tìm thấy nhiệm vụ với ID: " + taskId);
            return;
        }

        if (task.isCompleted) {
            console.log("Nhiệm vụ đã được đánh dấu hoàn thành trước đó.");
            return;
        }

        task.isCompleted = true;
        console.log(`Nhiệm vụ "${task.title}" đã được đánh dấu hoàn thành.`);
    }

    listTasks(): void {
        console.log("*************************");
        if(this.tasks.length === 0) {
            console.log("Chưa có bất kỳ công việc nào cả!!!");
        } else {
            this.tasks.forEach(function(element: Task, index: number) {
                console.log(`${index + 1}.${element.title} - ${element.deadline} - ${element.isCompleted ? "Hoàn thành" : "Chưa hoàn thành"}`);
            });
        }
    }
}

class Main {
    private _taskManager: TaskManager;
    constructor () {
        this._taskManager = new TaskManager();
    }

    bootstrap(): void {
        let loop: boolean = true;
        
        while(loop) {
            console.log("Menu chức năng:");

            console.log("1. Thêm nhân viên mới.");
            console.log("2. Thêm task mới.");
            console.log("3. Gán task cho nhân viên.");
            console.log("4. Đánh dấu task hoàn thành.");
            console.log("5. Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có).");
            console.log("6. Dừng chương trình.");

            let choice = prompt("Mời bạn nhập vào lựa chọn (1-6) để điều khiển chương trình:");
            switch(choice) {
                case "1":
                    let enterEmployee = prompt("Mời bạn nhập tên nhân viên mới");
                    if (!enterEmployee) {
                        console.log("Nhân viên mới thêm không hợp lệ");
                    } else {
                        this._taskManager.addEmployee(enterEmployee);
                    }
                    break; 
                case "2": 
                    let enterTitle = prompt("Mời bạn nhập tiêu đề nhiệm vụ mới");
                    let enterDeadline = prompt("Mời bạn nhập thời hạn hoàn thành nhiệm vụ (YYYY-MM-DD)");

                    if (!enterTitle || !enterDeadline) {
                        console.log("Nhiệm vụ mới thêm không hợp lệ");
                    } else {
                        this._taskManager.addTask(enterTitle, enterDeadline);
                        this._taskManager.listTasks();
                    }
                    break;
                case "3": 
                    let empId = Number(prompt("Nhập ID nhân viên:"));
                    let taskId = Number(prompt("Nhập ID nhiệm vụ:"));
                
                    this._taskManager.assignTask(empId, taskId);
                    break;
                case "4":
                    let completeTaskId = Number(prompt("Nhập ID nhiệm vụ cần đánh dấu hoàn thành:"));

                    this._taskManager.completeTask(completeTaskId);
                    break; 
                case "5":
                    this._taskManager.listTasks();
                    break;
                case "6":
                    loop = false;
                    break;
                default:
                    console.log("Lựa chọn của bạn không hợp lệ. Vui lòng nhập lại.");
                    break;
            }
        }
    }
}

const app = new Main();
app.bootstrap();