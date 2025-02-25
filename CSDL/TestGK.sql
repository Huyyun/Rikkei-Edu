-- Câu 1: Thiết kế CSDL quản lý sinh viên vi phạm quy chế học đường
CREATE DATABASE IF NOT EXISTS StudentViolationsDB;
USE StudentViolationsDB;
DROP DATABASE StudentViolationsDB;

CREATE TABLE Students (
    `studentId` VARCHAR(10) PRIMARY KEY,
    `studentName` VARCHAR(100) NOT NULL,
    `class` VARCHAR(50) NOT NULL
);
INSERT INTO Students (`studentId`, `studentName`, `class`) 
VALUES
	('SV001', 'Nguyễn Văn A', 'KTPM2'),
	('SV002', 'Trần Thị B', 'CNTT2'),
	('SV003', 'Lê Văn C', 'KTPM3');

CREATE TABLE Teachers (
    `teacherId` VARCHAR(10) PRIMARY KEY,
    `teacherName` VARCHAR(100) NOT NULL,
    `subject` VARCHAR(50) NOT NULL
);
INSERT INTO Teachers (`teacherId`, `teacherName`, `subject`) 
VALUES
	('T001', 'Thầy Dương', 'Cấu trúc dữ liệu'),
	('T002', 'Cô Thu', 'Cơ sở dữ liệu'),
	('T003', 'Thầy Minh', 'Lập trình Java');

CREATE TABLE Violations (
    `violationId` INT PRIMARY KEY AUTO_INCREMENT,
    `studentId` VARCHAR(10),
    FOREIGN KEY (studentId) REFERENCES Students(studentId),
    `teacherId` VARCHAR(10),
    FOREIGN KEY (teacherId) REFERENCES Teachers(teacherId),
    `violationDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `violationCount` INT DEFAULT 1
);
INSERT INTO Violations (`studentId`, `teacherId`, `violationDate`, `violationCount`) 
VALUES
	('SV001', 'T001', '2025-02-10', 1),
	('SV001', 'T002', '2025-02-14', 2),
	('SV002', 'T001', '2025-02-13', 1),
	('SV001', 'T003', '2025-02-14', 3);

-- Câu 2: Chương trình chạy tự động kiểm tra vi phạm
DELIMITER $$

CREATE PROCEDURE CheckViolation(IN studentID VARCHAR(10))
BEGIN
    DECLARE countViolations INT DEFAULT 0;
    DECLARE warningMessage VARCHAR(100);
    DECLARE counter INT DEFAULT 1; 

    -- Đếm số lần vi phạm của sinh viên
    SELECT COUNT(*) INTO countViolations 
    FROM Violations 
    WHERE studentId = studentID;

    INSERT INTO Violations (studentId, teacherId, violationDate, violationCount) 
    VALUES (studentID, 'T001', NOW(), countViolations + 1);

    -- Hiển thị cảnh báo với số lần vi phạm
    SET warningMessage = CONCAT('Cảnh cáo vi phạm! Số lần: ', countViolations + 1);
    SELECT warningMessage AS Notification;

    -- Hiển thị cảnh báo "Cảnh cáo vi phạm" số lần tương ứng
    WHILE counter <= countViolations + 1 DO
        SELECT warningMessage AS Violation_Warning;
        SET counter = counter + 1;
    END WHILE;
END $$

DELIMITER ;

CALL CheckViolation('SV001');
DROP PROCEDURE CheckViolation;

-- Câu 3: Chương trình chặn cập nhật khi sinh viên vi phạm 3 lần
DELIMITER $$

CREATE PROCEDURE CheckAndUpdateViolation(IN studentID VARCHAR(10))
BEGIN
    DECLARE countViolations INT DEFAULT 0;
    DECLARE warningMessage VARCHAR(100);

    -- Đếm số lần vi phạm của sinh viên
    SELECT COUNT(*) INTO countViolations 
    FROM Violations 
    WHERE studentId = studentID;

    -- Kiểm tra nếu số lần vi phạm đã là 3
    IF countViolations >= 3 THEN
        SET warningMessage = 'Đuổi học vì xem YouTube trong giờ học !!';
        SELECT warningMessage AS Notification;
    ELSE
        -- Nếu chưa đạt 3 lần, thêm một lần vi phạm mới
        INSERT INTO Violations (studentId, teacherId, violationDate, violationCount) 
        VALUES (studentID, 'T001', NOW(), countViolations + 1);

        -- Hiển thị thông báo số lần vi phạm mới
        SET warningMessage = CONCAT('Cảnh cáo vi phạm! Số lần: ', countViolations + 1);
        SELECT warningMessage AS Notification;
    END IF;
END $$

DELIMITER ;

CALL CheckAndUpdateViolation('SV001');
DROP PROCEDURE CheckAndUpdateViolation;