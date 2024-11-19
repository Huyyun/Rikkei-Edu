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

CREATE VIEW `CustomerOrders` AS 
SELECT o.OrderID, c.CustomerName, o.OrderDate, o.TotalAmount 
FROM Orders o
INNER JOIN Customers c ON c.CustomerID = o.CustomerID;
SELECT * FROM CustomerOrders;

UPDATE Orders
SET TotalAmount = 250.00
WHERE OrderID = 1;
SELECT * FROM CustomerOrders WHERE OrderID = 1;