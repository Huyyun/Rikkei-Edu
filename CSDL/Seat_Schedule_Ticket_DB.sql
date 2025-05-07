CREATE DATABASE seat_ticket_schedule_db;
USE seat_ticket_schedule_db;

-- Tạo bảng seats (ghế ngồi)
CREATE TABLE seats (
    id INT AUTO_INCREMENT PRIMARY KEY,
	bus_id INT NOT NULL,
    seat_number VARCHAR(20) NOT NULL,
    seat_type ENUM('LUXURY', 'VIP', 'STANDARD') NOT NULL, -- Loại ghế: Cao cấp, VIP, Thường
    status ENUM('AVAILABLE', 'BOOKED') NOT NULL DEFAULT 'AVAILABLE',
    price_for_type_seat DOUBLE NOT NULL, -- Giá tiền theo loại ghế
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

-- Tạo bảng schedules (Lịch trình)
CREATE TABLE schedules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    route_id INT NOT NULL, -- ID tuyến đường
    bus_id INT NOT NULL,
    departure_time DATETIME NOT NULL,
    arrival_time DATETIME NOT NULL,
    available_seats INT NOT NULL, -- Số ghế còn trống
    total_seats INT NOT NULL, -- Tổng số ghế
    status ENUM('AVAILABLE', 'FULL', 'CANCELLED') NOT NULL DEFAULT 'AVAILABLE',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tạo bảng tickets (Vé)
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seat_id INT NOT NULL,
    schedule_id INT NOT NULL,
    departure_time DATETIME NOT NULL,
    arrival_time DATETIME NOT NULL,
    seat_type ENUM('LUXURY', 'VIP', 'STANDARD') NOT NULL,
    price DOUBLE NOT NULL,
    status ENUM('BOOKED', 'CANCELLED') NOT NULL DEFAULT 'BOOKED',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (seat_id) REFERENCES seats(id),
    FOREIGN KEY (schedule_id) REFERENCES schedules(id)
);

-- Chèn dữ liệu mẫu vào bảng seats
INSERT INTO seats (bus_id, seat_number, seat_type, status, price_for_type_seat) VALUES
(1, 'A1', 'LUXURY', 'AVAILABLE', 150.00),
(1, 'A2', 'VIP', 'AVAILABLE', 100.00),
(2, 'B1', 'STANDARD', 'BOOKED', 50.00);

-- Chèn dữ liệu mẫu vào bảng schedules
INSERT INTO schedules (route_id, bus_id, departure_time, arrival_time, available_seats, total_seats, status) VALUES
(1, 1, '2025-05-08 08:00:00', '2025-05-08 12:00:00', 30, 40, 'AVAILABLE'),
(2, 2, '2025-05-08 09:00:00', '2025-05-08 13:00:00', 0, 40, 'FULL');

-- Chèn dữ liệu mẫu vào bảng tickets
INSERT INTO tickets (seat_id, schedule_id, departure_time, arrival_time, seat_type, price, status) VALUES
(3, 1, '2025-05-08 08:00:00', '2025-05-08 12:00:00', 'STANDARD', 50.00, 'BOOKED');