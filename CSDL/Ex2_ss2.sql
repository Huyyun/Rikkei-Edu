CREATE DATABASE `Store`;
USE Store;
CREATE TABLE `Products`(
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(255) UNIQUE NOT NULL,
    `Category` VARCHAR(255),
    `Price` DECIMAL(10, 2) NOT NULL,
    `StockQuantity` INT NOT NULL
);
INSERT INTO `Products` (`ProductID`, `ProductName`, `Category`, `Price`, `StockQuantity`)
VALUES 
    (1, 'Laptop', 'Electronics', 799.99, 20),
    (2, 'Desk Chair', 'Furniture', 120.50, 15),
    (3, 'Notebook', 'Stationery', 2.99, 200);
SELECT * FROM `Products`;