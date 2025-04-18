CREATE DATABASE `CompanyDB`;
USE CompanyDB;
CREATE TABLE `Employees`(
	`EmployeesID` INT PRIMARY KEY AUTO_INCREMENT,
    `FirstName` VARCHAR(50) UNIQUE NOT NULL,
    `LastName` VARCHAR(50) UNIQUE NOT NULL,
    `HireDate` DATE,
    `Salary` INT UNIQUE NOT NULL
);
ALTER TABLE `Employees`
ADD `Department` VARCHAR(50);
ALTER TABLE `Employees`
MODIFY COLUMN `Salary` DECIMAL(10, 2);