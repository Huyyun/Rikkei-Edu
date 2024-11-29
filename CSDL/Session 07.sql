USE phenikaaEmployee;

CREATE TABLE employee_log(
 id INT PRIMARY KEY AUTO_INCREMENT,
 content LONGTEXT,
 count INT
);

-- Tạo ra 1 trigger lắng nghe sự kiện INSERT
-- Thêm mới bản ghi vào trong bảng Employee

-- Mỗi khi thêm mới 1 bản ghi, lưu trữ lại tổng số lượng bản ghi có trong bảng Employee
DELIMITER $$ 
CREATE TRIGGER saveEmployeeNumber
AFTER INSERT
ON employee
FOR EACH ROW
BEGIN
	DECLARE count INT DEFAULT 0;
    DECLARE log_id INT DEFAULT 0;
    
    SELECT MAX(id)
    INTO log_id
    FROM employee;
    
	SELECT COUNT(*)
    INTO count
    FROM employee;
    
    INSERT INTO employee_log(id, content, count)
    VALUES (log_id, NULL, count);
END$$
DELIMITER ;
SHOW TRIGGERS;
DROP TRIGGER saveEmployeeNumber;

SELECT * FROM employee;

INSERT INTO employee(id, name, gender, email)
VALUES (201, 'abc-201', NULL, 'abc201@gmail.com');
INSERT INTO employee(id, name, gender, email)
VALUES (204, 'abc-204', NULL, 'abc204@gmail.com');

SELECT * FROM employee_log;

-- Tạo 1 trigger Before Insert 
-- checkExceedLimit

-- Trigger có tác dụng kiểm tra xem số lượng bản ghi hiện tại trong bảng có vượt quá 120 hay k?
-- Nếu có thì không cho Insert vào trong bảng employee và hiển thị 
-- "Employee exceed alowes limit"

DELIMITER $$
CREATE TRIGGER checkExceedLimit
BEFORE INSERT
ON employee
FOR EACH ROW
BEGIN
	DECLARE count INT DEFAULT 0;
    
	SELECT COUNT(*)
    INTO count
    FROM employee;
    
    IF count > 110 THEN 
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Employee exceed alowes limit';
	END IF;
END$$
DELIMITER ;

INSERT INTO employee(id, name, gender, email)
VALUES (204, 'abc-204', NULL, 'abc204@gmail.com');