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
CREATE TABLE `Sales` (
	`SaleID` INT PRIMARY KEY AUTO_INCREMENT,
    `OrderID` INT NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    `SaleDate` DATE,
    `SaleAmount` DECIMAL(10, 2)
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

CREATE VIEW `CustomerOrderSummary` AS
SELECT 
	c.CustomerID,
    c.CustomerName,
    COUNT(o.OrderID) AS TotalOrders,
    SUM(o.TotalAmount) AS TotalAmountSpent
FROM Orders o
INNER JOIN Customers c ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerID, c.CustomerName;
SELECT * FROM CustomerOrderSummary;

CREATE INDEX `ProductID` ON OrderItems(ProductID);
SHOW INDEXES FROM OrderItems;

CREATE VIEW `ProductRevenueSummary` AS
SELECT 
	p.ProductID,
    p.ProductName,
	SUM(oi.Quantity) AS TotalQuantitySold,
    SUM(oi.Price) AS TotalRevenue
FROM OrderItems oi
INNER JOIN Products p ON p.ProductID = oi.ProductID
GROUP BY p.ProductID, p.ProductName;
SELECT * FROM CustomerOrderSummary;

SELECT * FROM ProductRevenueSummary
WHERE TotalRevenue > 10000
ORDER BY TotalRevenue DESC;