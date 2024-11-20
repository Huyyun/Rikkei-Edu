CREATE SCHEMA demo_procedure;
USE demo_procedure;
CREATE TABLE Employees
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50),
    Email VARCHAR(50),
    Department VARCHAR(50)
);

DELIMITER $$

CREATE PROCEDURE PopulateEmployees()
BEGIN
    DECLARE counter INT DEFAULT 1;
    DECLARE employeeName VARCHAR(50);
    DECLARE employeeEmail VARCHAR(50);
    DECLARE employeeDept VARCHAR(10);

    WHILE counter <= 1000 DO
        SET employeeName = CONCAT('ABC ', counter);
        SET employeeEmail = CONCAT('abc', counter, '@pragimtech.com');
        SET employeeDept = CONCAT('Dept ', counter);

        INSERT INTO Employees (Name, Email, Department) VALUES (employeeName, employeeEmail, employeeDept);

        SET counter = counter + 1;

        IF counter % 100 = 0 THEN
            SELECT CONCAT(counter, ' rows inserted') AS Progress;
        END IF;
    END WHILE;
END $$

DELIMITER ;

-- To execute the procedure and populate the table
CALL PopulateEmployees();
​
SELECT * FROM Employees;

-- Viet 1 thu tuc thuc thi tac vu phan trang 
-- Thu tuc se nay se nhan vao 2 tham so
-- page_size: so luong ban ghi can phai truy van ra
-- page_number: so luong ban ghi o trang thu may

DELIMITER $$
CREATE PROCEDURE Paginate(IN page_size INT, IN page_number INT)
BEGIN
	DECLARE offset_value INT;
	SET offset_value = page_size*(page_number - 1);
	SELECT * FROM Employees
    LIMIT page_size
    OFFSET offset_value;
END$$
DELIMITER ;

CALL Paginate(30, 1);