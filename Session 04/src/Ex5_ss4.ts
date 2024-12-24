// Xây dựng một chương trình quản lý thông tin học tập sinh viên với các chức năng sau:

// 1. Lớp Student (Sinh viên):
// Thuộc tính:
// id: number - Mã sinh viên duy nhất.
// name: string - Tên sinh viên.
// 2. Lớp Course (Khóa học):
// Thuộc tính:
// id: number - Mã khóa học duy nhất.
// title: string - Tên khóa học.
// 3. Lớp Enrollment (Thời khóa biểu):
// Thuộc tính:
// student: Student - Thông tin sinh viên.
// course: Course - Thông tin khóa học.
// scheduleTime: string - Thời gian học.
// 4. Lớp StudyManager (Quản lý học tập):
// Thuộc tính:

// students: Student[] - Danh sách sinh viên.
// courses: Course[] - Danh sách khóa học.
// enrollments: Enrollment[] - Danh sách thời khóa biểu.
// Phương thức:
// addStudent(name: string): void - Thêm sinh viên mới vào danh sách.
// addCourse(title: string): void - Thêm khóa học mới vào danh sách.
// enrollStudent(studentId: number, courseId: number, scheduleTime: string): void - Đăng ký khóa học cho sinh viên tại một thời gian cụ thể.
// listEnrollments(): void - Hiển thị danh sách thời khóa biểu bao gồm sinh viên, khóa học và thời gian học.
// 5. Lớp Main (Chương trình chính):
// Khởi tạo đối tượng StudyManager.
// Chạy chương trình theo menu lựa chọn trong vòng lặp while.
// Menu chức năng:
// Thêm sinh viên mới.
// Thêm khóa học mới.
// Đăng ký khóa học cho sinh viên.
// Hiển thị thời khóa biểu học tập.
// Dừng chương trình.
// Yêu cầu bổ sung:
// Nhập thông tin từ người dùng thông qua prompt.
// Hiển thị kết quả tương ứng với từng thao tác.
// In thông báo lỗi nếu người dùng nhập thông tin không hợp lệ hoặc không tìm thấy sinh viên/khóa học.


class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

class Course {
    private id: number;
    private title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }
}

class Enrollment {
    private student: Student;
    private course: Course;
    private scheduleTime: string;

    constructor(student: Student, course: Course, scheduleTime: string) {
        this.student = student;
        this.course = course;
        this.scheduleTime = scheduleTime;
    }

    getStudent(): Student {
        return this.student;
    }

    getCourse(): Course {
        return this.course;
    }

    getScheduleTime(): string {
        return this.scheduleTime;
    }
}

class StudyManager {
    private students: Student[] = [];
    private courses: Course[] = [];
    private enrollments: Enrollment[] = [];

    // Thêm sinh viên mới vào danh sách
    addStudent(name: string): void {
        const id = this.students.length + 1;
        const newStudent = new Student(id, name);
        this.students.push(newStudent);
        console.log(`Sinh viên ${name} đã được thêm vào hệ thống.`);
    }

    // Thêm khóa học mới vào danh sách
    addCourse(title: string): void {
        const id = this.courses.length + 1;
        const newCourse = new Course(id, title);
        this.courses.push(newCourse);
        console.log(`Khóa học ${title} đã được thêm vào hệ thống.`);
    }

    // Đăng ký khóa học cho sinh viên tại thời gian học cụ thể
    enrollStudent(studentId: number, courseId: number, scheduleTime: string): void {
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

    // Hiển thị danh sách thời khóa biểu
    listEnrollments(): void {
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
    private studyManager: StudyManager;

    constructor() {
        this.studyManager = new StudyManager();
    }

    bootstrap(): void {
        let loop: boolean = true;

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
                    } else {
                        this.studyManager.addStudent(studentName);
                    }
                    break;
                case "2":
                    const courseTitle = prompt("Mời bạn nhập tên khóa học:");
                    if (courseTitle === "") {
                        console.log("Tên khóa học không hợp lệ!");
                    } else {
                        this.studyManager.addCourse(courseTitle);
                    }
                    break;
                case "3":
                    const studentId = parseInt(prompt("Mời bạn nhập mã sinh viên:"));
                    const courseId = parseInt(prompt("Mời bạn nhập mã khóa học:"));
                    const scheduleTime = prompt("Mời bạn nhập thời gian học:");
                    if (isNaN(studentId) || isNaN(courseId) || scheduleTime === "") {
                        console.log("Thông tin đăng ký không hợp lệ!");
                    } else {
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