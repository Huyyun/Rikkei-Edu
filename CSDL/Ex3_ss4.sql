CREATE DATABASE `Ex3_ss4`;
USE Ex3_ss4;
CREATE TABLE `EmployeeSalaries` (
	`EmployeeID` INT PRIMARY KEY AUTO_INCREMENT,
    `DepartmentID` INT NOT NULL,
    `Salary` DECIMAL(10, 2) NOT NULL
);

INSERT INTO `EmployeeSalaries` (`EmployeeID`, `DepartmentID`, `Salary`) VALUES
(1, 1, 50000.00),
(2, 1, 52000.00),
(3, 2, 60000.00),
(4, 2, 58000.00),
(5, 2, 61000.00),
(6, 3, 45000.00),
(7, 3, 47000.00),
(8, 3, 43000.00),
(9, 4, 70000.00),
(10, 4, 72000.00);

SELECT DepartmentID, SUM(Salary) AS `Tổng lương`, AVG(Salary) AS `Tổng trung bình lương`
FROM EmployeeSalaries
GROUP BY DepartmentID;