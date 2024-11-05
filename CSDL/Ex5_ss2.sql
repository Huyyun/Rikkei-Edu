CREATE DATABASE `Shop2`;
USE Shop2;
CREATE TABLE `Products`(
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(100) UNIQUE NOT NULL,
    `Category` VARCHAR(50),
    `Price` DECIMAL(10, 2) NOT NULL,
    `StockQuantity` INT NOT NULL
);
CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,                                 
    `ProductID` INT,   
    FOREIGN KEY (ProductID) REFERENCES `Products`(ProductID),
    `Quantity` INT NOT NULL CHECK (Quantity > 0),
    `TotalAmount` DECIMAL(10, 2) CHECK (TotalAmount >= 0)
);  
INSERT INTO `Products` (`ProductID`, `ProductName`, `Category`, `Price`, `StockQuantity`)
VALUES 
    (1, 'Laptop', 'Electronics', 799.99, 20),
    (2, 'Desk Chair', 'Furniture', 120.50, 15),
    (3, 'Notebook', 'Stationery', 2.99, 200);
    
INSERT INTO `Orders` (`OrderID`, `ProductID`, `Quantity`, `TotalAmount`)
VALUES 
    (1, 1, 2, 0),
    (2, 3, 5, 0),
    (3, 2, 3, 0);
    
UPDATE Products
SET Price = 22.00
WHERE ProductID = 3;

SET SQL_SAFE_UPDATES = 0;
UPDATE Orders 
JOIN Products ON Orders.ProductID = Products.ProductID
SET Orders.TotalAmount = Orders.Quantity * Products.Price;
SET SQL_SAFE_UPDATES = 1;

SELECT ProductID, ProductName, StockQuantity
FROM Products;

SELECT Orders.OrderID, Products.ProductName, Orders.Quantity, Orders.TotalAmount
FROM Orders
JOIN Products ON Orders.ProductID = Products.ProductID;