-- Tạo 1 thủ tục cos tên là checkMaleExist
-- Thủ tục này sẽ kiểm tra trong bảng architect 
-- Nếu tồn tại các architect có giói tính = 1
-- Thì trả về một kết quả là tồn tại
-- Nếu không tồn tại các architect có giới tính = 1
-- Thì trả về 1 kết quả là "Không tồn tại"

USE Ex2_ss3DB;

DELIMITER $$

CREATE PROCEDURE checkMaleExist(OUT exist VARCHAR(20))
BEGIN
	DECLARE countMale INT DEFAULT 0;
    SELECT COUNT(*) INTO countMale
    FROM architect 
    WHERE sex = 1;
    
    IF countMale > 0 THEN 
		SET exist = 'Tồn tại';
	ELSE 
		SET exist = 'Không tồn tại';
	END IF;
END $$

DELIMITER ;

CALL checkMaleExist(@isMaleExist);
SELECT  @isMaleExist;


-- Vòng lặp
-- Vòng lặp Loop
-- Tạo 1 CSDL có tên là phenikaaEmployee
-- Tạo 1 thủ tục có tên là autoInsertEmployee
-- Khi gọi thủ tục này, ngay lập tức thêm vào 100 employee vào trong bảng employee trong CSDL trên

-- Biết bảng employee (id, name, gender, email)
-- Thông tin id phải tăng dần
-- Thông tin name phải là abc + 1 đại lượng tăng dần. abc-1, abc-2, ...
-- Thông tin gender bỏ trống
-- Thông tin về email phải tăng dần abc1@gmail.com, ...

CREATE DATABASE phenikaaEmployee;
USE phenikaaEmployee;

CREATE TABLE employee(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `gender` INT,
    `email` VARCHAR(255)
);

DELIMITER $$

CREATE PROCEDURE autoInsertEmployee()
BEGIN
	DECLARE counter INT DEFAULT 1;
    DECLARE employeeName VARCHAR(255);
    DECLARE employeeEmail VARCHAR(255);
    
    employee_loop: LOOP
		SET employeeName = CONCAT('abc-', counter);
		SET employeeEmail = CONCAT('abc', counter, '@gmail.com');
             
		INSERT INTO employee (`name`, `gender`, `email`)
		VALUES (employeeName, NULL, employeeEmail);
        
        SET counter = counter + 1;
        IF counter >= 101 THEN
			 LEAVE employee_loop;
		END IF;
	END LOOP employee_loop;
END $$

DELIMITER ;

CALL autoInsertEmployee();
SELECT * FROM employee;
DROP DATABASE phenikaaEmployee;

-- Viết lại bài trên bằng vongf lặp While or Repeat
-- While
DELIMITER $$

CREATE PROCEDURE autoInsertEmployee2()
BEGIN
	DECLARE counter INT DEFAULT 1;
    DECLARE maxId INT DEFAULT 0;
    DECLARE employeeName VARCHAR(255);
    DECLARE employeeEmail VARCHAR(255);
    SELECT IFNULL(MAX(id), 0) INTO maxId FROM employee;
    
    WHILE counter < 101 DO
		SET employeeName = CONCAT('abc-', maxId + counter);
		SET employeeEmail = CONCAT('abc', maxId + counter, '@gmail.com');
        
		INSERT INTO employee (`name`, `gender`, `email`)
		VALUES (employeeName, NULL, employeeEmail);
        
        SET counter = counter + 1;
	END WHILE;
END $$

DELIMITER ;

DROP PROCEDURE autoInsertEmployee2;
CALL autoInsertEmployee2();
SELECT * FROM employee;

-- Repeat
DELIMITER $$

CREATE PROCEDURE autoInsertEmployee3()
BEGIN
	DECLARE counter INT DEFAULT 0;
    DECLARE maxId INT DEFAULT 0;
    DECLARE employeeName VARCHAR(255);
    DECLARE employeeEmail VARCHAR(255);
    SELECT MAX(id) INTO maxId FROM employee;
    
    REPEAT
		SET employeeName = CONCAT('abc-', maxId + counter);
		SET employeeEmail = CONCAT('abc', maxId + counter, '@gmail.com');
             
		INSERT INTO employee (`name`, `gender`, `email`)
		VALUES (employeeName, NULL, employeeEmail);
        
        SET counter = counter + 1;
	UNTIL counter >= 101
	END REPEAT;
END $$

DELIMITER ;

CALL autoInsertEmployee3();
SELECT * FROM employee;

-- Nếu call autoInsertEmployee2 lần thứ 2 ---> Không thể tiếp tục thêm mới 100 bản ghi tiếp theo vào trong 
-- bảng employee ??? Xử lý như thế nào?
-- Làm thế nào để truy vấn ra được bản ghi cuối cùng (id) trong bảng employee