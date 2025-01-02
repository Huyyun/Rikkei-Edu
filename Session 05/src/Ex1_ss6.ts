// class Person {
//     private _id: number;
//     private _name: string;
//     static idCounter: number = 0;

//     constructor (name: string) {
//         this._id = ++Person.idCounter;
//         this._name = name;
//     }

//     get id(): number { 
//         return this._id; 
//     }

//     get name(): string { 
//         return this.name;
//     }
// }

// class Employee extends Person {
//     private _role: string;

//     constructor (name: string, role: string) {
//         super(name);
//         this._role = role;
//     }

//     get role(): string {
//         return this.role;
//     }
// }

// class Manager extends Employee {
//     private _department: string;

//     constructor (name: string, role: string, department: string) {
//         super(name, role);
//         this._department = department;
//     }

//     get department(): string {
//         return this._department;
//     }
// }

// class Task {
//     private _id: number;
//     private _title: string;
//     private _deadline: Date;
//     private _isComplete: boolean;
//     static idCounter: number = 0;

//     constructor (title: string, deadline: string) {
//         this._id = ++Task.idCounter;
//         this._title = title;
//         this._deadline = new Date(deadline);
//         this._isComplete = false;
//     }

//     get id(): number {
//         return this._id;
//     }

//     get title(): string {
//         return this._title;
//     }

//     get deadline(): Date {
//         return this._deadline;
//     }

//     get isComplete(): boolean {
//         return this._isComplete;
//     }

//     complete(): void {
//         this._isComplete = true;
//         console.log(`Nhiệm vụ ${this._title} đã được hoàn thành`);
//     }

//     getDetails(): string {
//         return `Task [ID: ${this._id}, Title: ${this._title}, Deadline: ${this._deadline.toLocaleDateString()}, Completed: ${this._isComplete ? 'Hoàn thành' : 'Chưa hoàn thành'}]`;
//     }
// }

// class Assignment {
//     private _employee: Employee;
//     private _task: Task;

//     constructor (employee: Employee, task: Task) {
//         this._employee = employee;
//         this._task = task;
//     }

//     getAssignmentDetails(): string {
//         return `Assignment [Employee: ${this._employee.name}, Role: ${this._employee.role}, Task: ${this._task.getDetails()}]`;
//     }
// }

// class TaskManager {
//     private employees: Employee[] = [];
//     private managers: Manager[] = [];
//     private tasks: Task[] = [];
//     private assignments: Assignment[] = [];

//     addEmployee(name: string, role: string): void {
//         let employee = new Employee(name, role);
//         this.employees.push(employee);
//         console.log(`Nhân viên ${name} đã được thêm vào với vai trò ${role}`);
//         console.log("********************************");
//         if (this.employees.length === 0){
//             console.log("Không có bất kỳ nhân viên nào");
//         } else {
//             this.employees.forEach(function(element: Employee, index: number){
//                 console.log(`${index + 1}. ${element.name} - ${element.role}`);
//             });
//         }
//     }

//     addManager(name: string, role: string, department: string): void {
//         let manager = new Manager(name, role, department);
//         this.managers.push(manager);
//         console.log(`Quản lý ${name} đã được thêm vào với vai trò ${role} trong bộ phận ${department}`);
//         console.log("********************************");
//         if (this.managers.length === 0){
//             console.log("Không có bất kỳ quản lý nào");
//         } else {
//             this.managers.forEach(function(element: Manager, index: number){
//                 console.log(`${index + 1}. ${element.name} - ${element.role} - ${element.department}`);
//             });
//         }
//     }

//     addTask(title: string, deadline: string): void {
//         let task = new Task(title, deadline);
//         this.tasks.push(task);
//         console.log(`Nhiệm vụ ${title} đã được thêm vào với hạn deadline ${deadline}`);
//         console.log("********************************");
//         if (this.tasks.length === 0) {
//             console.log("Không có bất kỳ nhiệm vụ nào");
//         } else {
//             this.tasks.forEach(function(element: Task, index: number){
//                 console.log(`${index + 1}. ${element.title} - ${element.deadline}`);
//             });
//         }
//     }

//     assignTask(employeeId: number, taskId: number): void {
//         let employee = this.employees.find(e => e.id === employeeId);
//         let task = this.tasks.find(t => t.id === taskId);

//         if (!employee || !task) {
//             console.log("Không tìm thấy nhân viên hoặc nhiệm vụ nào");
//             return;
//         }

//         let assignment = new Assignment(employee, task);
//         this.assignments.push(assignment);
//         console.log(`Nhiệm vụ đã được phân công cho nhân viên ${employee.name}: ${task.getDetails()}`);
//     }

//     completeTask(taskId: number): void {
//         let task = this.tasks.find(t => t.id === taskId);

//         if (!task) {
//             console.log("Không tìm thấy nhiệm vụ nào");
//             return;
//         }

//         task.complete();
//     }

//     listAssignments(): void {
//         if (this.assignments.length === 0) {
//             console.log("Không tìm thấy bản phân công nào");
//             return;
//         } 

//         this.assignments.forEach(a => console.log(a.getAssignmentDetails()));
//     }
// }

// class Main {
//     private _taskManager: TaskManager;

//     constructor (taskManager: TaskManager) {
//         this._taskManager = taskManager;
//     }

//     bootstrap(): void {
//         let loop: boolean = true;

//         while(loop) {
//             console.log("Menu:");
//             console.log("1. Thêm nhân viên");
//             console.log("2. Thêm quản lý");
//             console.log("3. Thêm công việc");
//             console.log("4. Phân công công việc cho nhân viên");
//             console.log("5. Đánh dấu công việc hoàn thành");
//             console.log("6. Hiển thị danh sách công việc đã phân công");
//             console.log("7. Dừng chương trình");

//             let choice = prompt("Mời bạn nhập lựa chọn cưa mình (1 - 7):");

//             switch(choice) {
//                 case "1": 
//                     let eName = prompt("Nhập tên nhân viên bạn muốn thêm:");
//                     let eRole = prompt("Nhập vai trò của nhân viên:");

//                     this._taskManager.addEmployee(eName!, eRole!);
//                     break;
//                 case "2":


//                     break;
//                 case "3":
//                     break;
//                 case "4":
//                     break;
//                 case "5":
//                     break;
//                 case "6":
//                     break;
//                 case "7":
//                     break;
//             }
//         }
//     }
// }