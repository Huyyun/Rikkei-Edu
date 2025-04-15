-- Tạo database
CREATE DATABASE IF NOT EXISTS travel_db;
USE travel_db;

-- Bảng User
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng Tour
CREATE TABLE IF NOT EXISTS tours (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    location VARCHAR(100),
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng Booking
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    tour_id INT,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
);

-- Thêm dữ liệu mẫu cho users
INSERT INTO users (name, email, password, role) VALUES
('Nguyen Van A', 'a@example.com', 'hashed_password_1', 'user'),
('Tran Thi B', 'b@example.com', 'hashed_password_2', 'user'),
('Le Van C', 'c@example.com', 'hashed_password_3', 'admin');

-- Thêm dữ liệu mẫu cho tours
INSERT INTO tours (title, description, price, location, start_date, end_date) VALUES
('Du lịch Đà Lạt 3N2Đ', 'Khám phá thành phố ngàn hoa với khí hậu mát mẻ.', 2500000, 'Đà Lạt', '2025-05-01', '2025-05-03'),
('Hành trình Hạ Long 2N1Đ', 'Trải nghiệm vịnh Hạ Long với du thuyền sang trọng.', 3200000, 'Hạ Long', '2025-06-15', '2025-06-16'),
('Tour khám phá Sapa 4N3Đ', 'Chiêm ngưỡng ruộng bậc thang và văn hóa dân tộc thiểu số.', 4200000, 'Sapa', '2025-07-10', '2025-07-13');

-- Thêm dữ liệu mẫu cho bookings
INSERT INTO bookings (user_id, tour_id, status) VALUES
(1, 1, 'confirmed'),
(2, 2, 'pending'),
(1, 3, 'cancelled'),
(3, 1, 'confirmed');
