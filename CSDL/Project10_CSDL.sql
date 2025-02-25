CREATE DATABASE company;
USE company;

-- Câu 1: Xây dựng lược đồ quan hệ với các ràng buộc toàn vẹn
CREATE TABLE Phong (
    MaPhong CHAR(5) PRIMARY KEY,
    TenPhong VARCHAR(100) NOT NULL
);

CREATE TABLE NhanVien (
    MaNV CHAR(5) PRIMARY KEY,
    TenNV VARCHAR(100) NOT NULL,
    MaPhong CHAR(5) NOT NULL,
    FOREIGN KEY (MaPhong) REFERENCES Phong(MaPhong) ON DELETE CASCADE
);

CREATE TABLE ThietBi (
    MaThietBi CHAR(5) PRIMARY KEY,
    TenThietBi VARCHAR(100) NOT NULL
);

CREATE TABLE KiemTra (
    MaNV CHAR(5),
    MaThietBi CHAR(5),
    NgayKiemTra DATE,
    PRIMARY KEY (MaNV, MaThietBi),
    FOREIGN KEY (MaNV) REFERENCES NhanVien(MaNV) ON DELETE CASCADE,
    FOREIGN KEY (MaThietBi) REFERENCES ThietBi(MaThietBi) ON DELETE CASCADE
);

-- Câu 2: Thêm 5 bản ghi vào mỗi bảng
INSERT INTO Phong (MaPhong, TenPhong) VALUES ('mp01', 'Phòng Kỹ Thuật'), ('mp02', 'Phòng Hành Chính'), ('mp03', 'Phòng Nhân Sự'), ('mp04', 'Phòng Tài Chính'), ('mp05', 'Phòng Marketing');

INSERT INTO NhanVien (MaNV, TenNV, MaPhong) VALUES ('nv01', 'Nguyễn Văn A', 'mp01'), ('nv02', 'Trần Thị B', 'mp02'), ('nv03', 'Lê Văn C', 'mp03'), ('nv04', 'Phạm Thị D', 'mp04'), ('nv05', 'Hoàng Văn E', 'mp05');

INSERT INTO ThietBi (MaThietBi, TenThietBi) VALUES ('tb01', 'Máy In'), ('tb02', 'Máy Tính'), ('tb03', 'Máy Scan'), ('tb04', 'Máy Fax'), ('tb05', 'Máy Photocopy');

INSERT INTO KiemTra (MaNV, MaThietBi, NgayKiemTra) VALUES ('nv01', 'tb01', '2024-02-01'), ('nv02', 'tb02', '2024-02-02'), ('nv03', 'tb03', '2024-02-03'), ('nv04', 'tb04', '2024-02-04'), ('nv05', 'tb05', '2024-02-05');

-- Câu 3: Cập nhật tên nhân viên có mã 'nv02' thành Nguyễn Thị B
UPDATE NhanVien SET TenNV = 'Nguyễn Thị B' WHERE MaNV = 'nv02';

-- Câu 4: Xóa tất cả thiết bị được kiểm tra bởi nhân viên có mã 'nv02'
DELETE FROM KiemTra WHERE MaNV = 'nv02';

-- Câu 5: Tạo stored procedure lấy thông tin thiết bị liên quan đến phòng 'mp02'
DELIMITER $$  
CREATE PROCEDURE GetDevicesByRoom(IN p_MaPhong VARCHAR(10))  
BEGIN  
    SELECT tb.*
    FROM ThietBi tb  
    INNER JOIN KiemTra kt ON tb.MaThietBi = kt.MaThietBi  
    INNER JOIN NhanVien nv ON kt.MaNV = nv.MaNV  
    WHERE nv.MaPhong = p_MaPhong;  
END$$  
DELIMITER ;  

-- Câu 6: Chạy stored procedure để lấy thông tin thiết bị của phòng 'mp02'
CALL GetDevicesByRoom('mp02');
DROP PROCEDURE GetDevicesByRoom;
