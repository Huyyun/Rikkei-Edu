"use strict";
class Employee {
    constructor(name) {
        this._id = ++Employee.idCounter;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
Employee.idCounter = 0;
class Task {
    constructor(title, deadline, isCompleted = false) {
        this._id = ++Task.idCounter;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = isCompleted;
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
    set isCompleted(value) {
        this._isCompleted = value;
    }
}
Task.idCounter = 0;
class Assignment {
    constructor(employee, task) {
        this._employee = employee;
        this._task = task;
    }
}
class TaskManager {
    constructor() {
        this.employees = [];
        this.tasks = [];
        this.assignments = [];
    }
    addEmployee(name) {
        let newEmployee = new Employee(name);
        this.employees.push(newEmployee);
        console.log("*************************");
        if (this.employees.length === 0) {
            console.log("Không có bất kỳ nhân viên nào");
        }
        else {
            this.employees.forEach(function (element, index) {
                console.log(`${index + 1}.${element.name}`);
            });
        }
    }
    addTask(title, deadline) {
        let newTask = new Task(title, deadline);
        this.tasks.push(newTask);
        this.listTasks();
    }
    assignTask(employeeId, taskId) {
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
    completeTask(taskId) {
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
    listTasks() {
        console.log("*************************");
        if (this.tasks.length === 0) {
            console.log("Chưa có bất kỳ công việc nào cả!!!");
        }
        else {
            this.tasks.forEach(function (element, index) {
                console.log(`${index + 1}.${element.title} - ${element.deadline} - ${element.isCompleted ? "Hoàn thành" : "Chưa hoàn thành"}`);
            });
        }
    }
}
class Main {
    constructor() {
        this._taskManager = new TaskManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Menu chức năng:");
            console.log("1. Thêm nhân viên mới.");
            console.log("2. Thêm task mới.");
            console.log("3. Gán task cho nhân viên.");
            console.log("4. Đánh dấu task hoàn thành.");
            console.log("5. Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có).");
            console.log("6. Dừng chương trình.");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1-6) để điều khiển chương trình:");
            switch (choice) {
                case "1":
                    let enterEmployee = prompt("Mời bạn nhập tên nhân viên mới");
                    if (!enterEmployee) {
                        console.log("Nhân viên mới thêm không hợp lệ");
                    }
                    else {
                        this._taskManager.addEmployee(enterEmployee);
                    }
                    break;
                case "2":
                    let enterTitle = prompt("Mời bạn nhập tiêu đề nhiệm vụ mới");
                    let enterDeadline = prompt("Mời bạn nhập thời hạn hoàn thành nhiệm vụ (YYYY-MM-DD)");
                    if (!enterTitle || !enterDeadline) {
                        console.log("Nhiệm vụ mới thêm không hợp lệ");
                    }
                    else {
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
