CREATE DATABASE CourseDB;
USE CourseDB;

-- Bảng Giảng viên
CREATE TABLE Instructors (
    instructorId INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    avatar VARCHAR(500)
);

-- Bảng Khóa học
CREATE TABLE Courses (
    courseId INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration VARCHAR(50),
    level VARCHAR(50),
    instructorId INT,
    price DECIMAL(10, 2),
    rating DECIMAL(2, 1),
    FOREIGN KEY (instructorId) REFERENCES Instructors(instructorId)
);

-- Bảng Danh mục khóa học
CREATE TABLE Categories (
    categoryId INT AUTO_INCREMENT PRIMARY KEY,
    categoryName VARCHAR(100) UNIQUE
);

-- Bảng Nối giữa Khóa học và Danh mục
CREATE TABLE CourseCategories (
    courseId INT,
    categoryId INT,
    PRIMARY KEY (courseId, categoryId),
    FOREIGN KEY (courseId) REFERENCES Courses(courseId),
    FOREIGN KEY (categoryId) REFERENCES Categories(categoryId)
);

-- Bảng Bài học
CREATE TABLE Lessons (
    lessonId INT AUTO_INCREMENT PRIMARY KEY,
    courseId INT,
    lessonTitle VARCHAR(255),
    FOREIGN KEY (courseId) REFERENCES Courses(courseId)
);

-- Chèn dữ liệu mẫu
INSERT INTO Instructors (instructorId, name, avatar) VALUES
(1, 'Nguyễn Văn A', 'https://example.com/avatar1.png'),
(2, 'Trần Thị B', 'https://example.com/avatar2.png'),
(3, 'Phạm Văn C', 'https://example.com/avatar3.png');

INSERT INTO Courses (courseId, title, description, duration, level, instructorId, price, rating) VALUES
(1001, 'Lập trình Python cho người mới bắt đầu', 'Học từ cơ bản đến OOP, thao tác với file và API.', '30 giờ', 'Beginner', 1, 299000, 4.7),
(1002, 'Thiết kế UI/UX hiện đại với Figma', 'Từ nguyên lý thiết kế đến thực hành các dự án thực tế trên Figma.', '24 giờ', 'Intermediate', 2, 499000, 4.6),
(1003, 'Phân tích dữ liệu với Excel và Power BI', 'Khai thác sức mạnh phân tích dữ liệu từ công cụ phổ biến.', '40 giờ', 'Beginner', 3, 399000, 4.8),
(1004, 'Digital Marketing toàn diện 2024', 'Học SEO, chạy quảng cáo, social media và phễu chuyển đổi.', '50 giờ', 'Advanced', 2, 799000, 4.5),
(1005, 'Lập trình Web với HTML, CSS và JavaScript', 'Khóa học nền tảng cho lập trình web, không yêu cầu kiến thức trước.', '36 giờ', 'Beginner', 1, 350000, 4.6);

INSERT INTO Categories (categoryName) VALUES 
('Programming'), ('Python'), ('Design'), ('UI/UX'), ('Data'), ('Excel'), ('Power BI'), ('Marketing'), ('SEO'), ('Social Media'), ('Web Development');

-- Gán danh mục cho khóa học
INSERT INTO CourseCategories (courseId, categoryId) VALUES
(1001, 1), (1001, 2),
(1002, 3), (1002, 4),
(1003, 5), (1003, 6), (1003, 7),
(1004, 8), (1004, 9), (1004, 10),
(1005, 1), (1005, 11);

-- Thêm bài học
INSERT INTO Lessons (courseId, lessonTitle) VALUES
(1001, 'Biến & Kiểu dữ liệu'), (1001, 'Câu điều kiện'), (1001, 'Vòng lặp'), (1001, 'OOP'),
(1002, 'Wireframe'), (1002, 'Prototype'), (1002, 'Design system'),
(1003, 'PivotTable'), (1003, 'Chart'), (1003, 'Power Query'), (1003, 'DAX'),
(1004, 'SEO Onpage'), (1004, 'Facebook Ads'), (1004, 'Google Analytics'),
(1005, 'HTML5'), (1005, 'CSS3'), (1005, 'DOM'), (1005, 'JavaScript cơ bản');
