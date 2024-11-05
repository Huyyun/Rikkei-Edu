CREATE DATABASE `CompanyDB2`;
USE CompanyDB2;
CREATE TABLE `Department`(
	`DepartmentID` INT PRIMARY KEY AUTO_INCREMENT,
    `DepartmentName` VARCHAR(50)
);
CREATE TABLE `Employees`(
	`EmployeeID` INT PRIMARY KEY AUTO_INCREMENT,
    `EmployeeName` VARCHAR(50) UNIQUE NOT NULL,
    `Salary` DECIMAL(10, 2) UNIQUE NOT NULL,
    `DepartmentID` INT,
    FOREIGN KEY (DepartmentID) REFERENCES `Department`(DepartmentID)
);

INSERT INTO `Department` (`DepartmentID`, `DepartmentName`)
VALUES 
    (1, 'Sales'),
    (2, 'Marketing'),
    (3, 'Security');

INSERT INTO `Employees` (`EmployeeID`, `EmployeeName`, `Salary`, `DepartmentID`)
VALUES 
    (1, 'Hyun', 799.99, 1),
    (2, 'Won', 320.50, 1),
    (3, 'Yun', 220.99, 2);
    
SELECT Employees.EmployeeID, Employees.EmployeeName, Employees.Salary, Department.DepartmentName
FROM Employees
JOIN Department ON Employees.DepartmentID = Department.DepartmentID
WHERE Department.DepartmentName = 'Sales';

UPDATE Employees
SET Salary = 500
WHERE EmployeeID = 1;
SELECT * FROM `Employees`;

DELETE FROM Employees
WHERE Salary < 300;
SELECT * FROM `Employees`;