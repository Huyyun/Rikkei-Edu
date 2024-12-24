"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Course {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
}
class Enrollment {
    constructor(student, course, scheduleTime) {
        this.student = student;
        this.course = course;
        this.scheduleTime = scheduleTime;
    }
    getStudent() {
        return this.student;
    }
    getCourse() {
        return this.course;
    }
    getScheduleTime() {
        return this.scheduleTime;
    }
}
class StudyManager {
    constructor() {
        this.students = [];
        this.courses = [];
        this.enrollments = [];
    }
    addStudent(name) {
        const id = this.students.length + 1;
        const newStudent = new Student(id, name);
        this.students.push(newStudent);
        console.log(`Sinh viên ${name} đã được thêm vào hệ thống.`);
    }
    addCourse(title) {
        const id = this.courses.length + 1;
        const newCourse = new Course(id, title);
        this.courses.push(newCourse);
        console.log(`Khóa học ${title} đã được thêm vào hệ thống.`);
    }
    enrollStudent(studentId, courseId, scheduleTime) {
        const student = this.students.find(s => s.getId() === studentId);
        const course = this.courses.find(c => c.getId() === courseId);
        if (!student) {
            console.log("Không tìm thấy sinh viên với mã này.");
            return;
        }
        if (!course) {
            console.log("Không tìm thấy khóa học với mã này.");
            return;
        }
        const enrollment = new Enrollment(student, course, scheduleTime);
        this.enrollments.push(enrollment);
        console.log(`Sinh viên ${student.getName()} đã đăng ký khóa học ${course.getTitle()} vào lúc ${scheduleTime}.`);
    }
    listEnrollments() {
        if (this.enrollments.length === 0) {
            console.log("Không có thời khóa biểu nào.");
            return;
        }
        console.log("Danh sách thời khóa biểu:");
        this.enrollments.forEach(enrollment => {
            const student = enrollment.getStudent();
            const course = enrollment.getCourse();
            const scheduleTime = enrollment.getScheduleTime();
            console.log(`Sinh viên: ${student.getName()}, Khóa học: ${course.getTitle()}, Thời gian học: ${scheduleTime}`);
        });
    }
}
class Main {
    constructor() {
        this.studyManager = new StudyManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Menu chức năng:");
            console.log("1. Thêm sinh viên mới.");
            console.log("2. Thêm khóa học mới.");
            console.log("3. Đăng ký khóa học cho sinh viên.");
            console.log("4. Hiển thị thời khóa biểu học tập.");
            console.log("5. Dừng chương trình.");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1-5):");
            switch (choice) {
                case "1":
                    const studentName = prompt("Mời bạn nhập tên sinh viên:");
                    if (studentName === "") {
                        console.log("Tên sinh viên không hợp lệ!");
                    }
                    else {
                        this.studyManager.addStudent(studentName);
                    }
                    break;
                case "2":
                    const courseTitle = prompt("Mời bạn nhập tên khóa học:");
                    if (courseTitle === "") {
                        console.log("Tên khóa học không hợp lệ!");
                    }
                    else {
                        this.studyManager.addCourse(courseTitle);
                    }
                    break;
                case "3":
                    const studentId = parseInt(prompt("Mời bạn nhập mã sinh viên:"));
                    const courseId = parseInt(prompt("Mời bạn nhập mã khóa học:"));
                    const scheduleTime = prompt("Mời bạn nhập thời gian học:");
                    if (isNaN(studentId) || isNaN(courseId) || scheduleTime === "") {
                        console.log("Thông tin đăng ký không hợp lệ!");
                    }
                    else {
                        this.studyManager.enrollStudent(studentId, courseId, scheduleTime);
                    }
                    break;
                case "4":
                    this.studyManager.listEnrollments();
                    break;
                case "5":
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
