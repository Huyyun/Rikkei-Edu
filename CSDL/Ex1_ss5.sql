CREATE DATABASE `SalesDB`;
USE SalesDB;

CREATE TABLE `Customers` (
	`CustomerID` INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerName` VARCHAR(100) NOT NULL,
    `Phone` VARCHAR(15),
	`Email` VARCHAR(255) NOT NULL,
    `CreatedAt` DATETIME
);
CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerID` INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    `OrderDate` DATE NOT NULL,
    `TotalAmount` DECIMAL(10, 2) NOT NULL
);
CREATE TABLE `Products` (
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(255) NOT NULL,
    `Category` VARCHAR(255),
    `Price` DECIMAL(10, 2) NOT NULL
);
CREATE TABLE `OrderDetails` (
	`OrderDetailID` INT PRIMARY KEY AUTO_INCREMENT,
    `OrderID` INT, 
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    `ProductID` INT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    `Quantity` INT NOT NULL,
    `UnitPrice` DECIMAL(10, 2) NOT NULL
);

CREATE INDEX `Email` ON Customers(Email);
SHOW INDEXES FROM Customers;

CREATE INDEX `OrderDate` ON Orders(OrderDate);
SHOW INDEXES FROM Orders;