class Person {
    private _id: number;
    private _name: string;
    static idCounter: number = 0;

    constructor(name: string) {
        this._id = ++Person.idCounter;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    getName(): string {
        return this._name;
    }
}

class Employee extends Person {
    private _role: string;

    constructor(name: string, role: string) {
        super(name);
        this._role = role;
    }

    get role() {
        return this._role;
    }

    getRole(): string {
        return this._role;
    }
}

class Manager extends Employee {
    private _department: string;

    constructor(name: string, role: string, department: string) {
        super(name, role);
        this._department = department;
    }

    get department() {
        return this._department;
    }

    getDepartment(): string {
        return this._department;
    }
}

class Task {
    private _id: number;
    private _title: string;
    private _deadline: Date;
    private _isCompleted: boolean;
    static idCounter: number = 0;

    constructor(title: string, deadline: string) {
        this._id = ++Task.idCounter;
        this._title = title;
        this._deadline = new Date(deadline);
        this._isCompleted = false;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get deadline() {
        return this._deadline;
    }

    get isCompleted() {
        return this._isCompleted;
    }

    complete(): void {
        this._isCompleted = true;
    }

    getDetails(): string {
        return `Task [ID: ${this._id}, Title: ${this._title}, Deadline: ${this._deadline.toLocaleDateString()}, Completed: ${this._isCompleted ? 'Yes' : 'No'}]`;
    }
}

class Assignment {
    private _employee: Employee;
    private _task: Task;

    constructor(employee: Employee, task: Task) {
        this._employee = employee;
        this._task = task;
    }

    getAssignmentDetails(): string {
        return `Assignment [Employee: ${this._employee.getName()}, Role: ${this._employee.getRole()}, Task: ${this._task.getDetails()}]`;
    }
}

class TaskManager {
    private employees: Employee[] = [];
    private managers: Manager[] = [];
    private tasks: Task[] = [];
    private assignments: Assignment[] = [];

    addEmployee(name: string, role: string): void {
        let employee = new Employee(name, role);
        this.employees.push(employee);
        console.log(`Nhân viên ${name} đã được thêm với vai trò ${role}`);
        console.log("*************************");
        if (this.employees.length === 0) {
            console.log("Không có bất kỳ nhân viên nào");
        } else {
            this.employees.forEach(function(element: Employee, index: number){
                console.log(`${index + 1}.${element.name} - ${element.role}`);
            });
        }
    }

    addManager(name: string, role: string, department: string): void {
        let manager = new Manager(name, role, department);
        this.managers.push(manager);
        console.log(`Quản lý ${name} đã được thêm với vai trò ${role} trong bộ phậnphận ${department}`);
        console.log("*************************");
        if (this.managers.length === 0) {
            console.log("Không có bất kỳ quản lý nào");
        } else {
            this.managers.forEach(function(element: Manager, index: number){
                console.log(`${index + 1}.${element.name} - ${element.role} - ${element.department}`);
            });
        }
    }

    addTask(title: string, deadline: string): void {
        let task = new Task(title, deadline);
        this.tasks.push(task);
        console.log(`Nhiệm vụ ${title} đã được thêm vớivới deadline ${deadline}`);
        console.log("*************************");
        if (this.tasks.length === 0) {
            console.log("Không có bất kỳ nhiệm vụ nào");
        } else {
            this.tasks.forEach(function(element: Task, index: number){
                console.log(`${index + 1}.${element.title} - ${element.deadline}`);
            });
        }
    }

    assignTask(employeeId: number, taskId: number): void {
        let employee = this.employees.find(e => e.id === employeeId);
        let task = this.tasks.find(t => t.id === taskId);

        if (!employee || !task) {
            console.log("Error: Không tìm thấy nhân viên hoặc nhiệm vụ.");
            return;
        }

        let assignment = new Assignment(employee, task);
        this.assignments.push(assignment);
        console.log(`Nhiệm vụ đã được phân công cho nhân viên ${employee.getName()}: ${task.getDetails()}`);
    }

    completeTask(taskId: number): void {
        let task = this.tasks.find(t => t.id === taskId);

        if (!task) {
            console.log("Error: Không tìm thấy nhiệm vụ");
            return;
        }

        task.complete();
        console.log(`Nhiệm vụ ${task.title} đã được hoàn thành.`);
    }

    listAssignments(): void {
        if (this.assignments.length === 0) {
            console.log("Không tìm thấy phân công nào.");
            return;
        }

        this.assignments.forEach(a => console.log(a.getAssignmentDetails()));
    }
}

class Main {
    private taskManager: TaskManager;

    constructor() {
        this.taskManager = new TaskManager();
    }

    bootstrap(): void {
        let loop: boolean = true;

        while (loop) {
            console.log("Menu:");
            console.log("1. Thêm nhân viên");
            console.log("2. Thêm quản lý");
            console.log("3. Thêm nhiệm vụ");
            console.log("4. Phân công nhiệm vụ cho nhân viên");
            console.log("5. Đánh dấu nhiệm vụ hoàn thành");
            console.log("6. Hiển thị danh sách nhiệm vụ đã phân công");
            console.log("7. Dừng chương trình");

            let choice = prompt("Mời bạn nhập vào lựa chọn (1-7): ");
            switch (choice) {
                case "1":
                    const empName = prompt("Nhập tên nhân viên: ");
                    const role = prompt("Nhập vai trò nhân viên: ");
                    this.taskManager.addEmployee(empName!, role!);
                    break;
                case "2":
                    const mgrName = prompt("Nhập tên quản lý: ");
                    const mgrRole = prompt("Nhập vai trò quản lý: ");
                    const department = prompt("Nhập bộ phận: ");
                    this.taskManager.addManager(mgrName!, mgrRole!, department!);
                    break;
                case "3":
                    const taskTitle = prompt("Nhập tiêu đề nhiệm vụ: ");
                    const deadline = prompt("Nhập deadline nhiệm vụ (YYYY-MM-DD): ");
                    this.taskManager.addTask(taskTitle!, deadline!);
                    break;
                case "4":
                    const empId = parseInt(prompt("Nhập ID nhân viên: ")!);
                    const taskId = parseInt(prompt("Nhập ID nhiệm vụ: ")!);
                    this.taskManager.assignTask(empId, taskId);
                    break;
                case "5":
                    const compTaskId = parseInt(prompt("Nhập ID nhiệm vụ đã hoàn thành: ")!);
                    this.taskManager.completeTask(compTaskId);
                    break;
                case "6":
                    this.taskManager.listAssignments();
                    break;
                case "7":
                    loop = false;
                    console.log("Chương trình kết thúc.");
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
                    break;
            }
        }
    }
}

let app = new Main();
app.bootstrap();