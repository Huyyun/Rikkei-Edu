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
CREATE TABLE `OrderItems` (
	`OrderItemID` INT PRIMARY KEY AUTO_INCREMENT,
    `OrderID` INT NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    `ProductID` INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    `Quantity` INT,
    `Price` DECIMAL(10, 2) 
);

CREATE INDEX `OrderID` ON OrderItems(OrderID);
SHOW INDEXES FROM OrderItems;