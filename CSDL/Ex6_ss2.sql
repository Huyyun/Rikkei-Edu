CREATE DATABASE `Shop3`;
USE Shop3;
CREATE TABLE `Customers`(
	`CustomerID` INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerName` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) UNIQUE NOT NULL,
    `Phone` VARCHAR(15) UNIQUE NOT NULL
);
CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,                 
    `OrderDate` DATE NOT NULL,                 
    `CustomerID` INT,   
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);    
CREATE TABLE `OrderDetails`(
	`OrderDetailID` INT PRIMARY KEY AUTO_INCREMENT,
    `OrderID` INT,   
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    `ProductID` INT,
    `Quantity` INT,
    `UnitPrice` DECIMAL(10, 2)
);

INSERT INTO `Customers` (`CustomerID`, `CustomerName`, `Email`, `Phone`)
VALUES 
    (1, 'John Doe', 'john@gmail.com', '123456789'),
    (2, 'Jane Smith', 'jane@gmail.com', '987654321');
INSERT INTO `Orders` (`OrderID`, `OrderDate`, `CustomerID`)
VALUES 
    (1, '2024-11-01', 2),
    (2, '2024-11-02', 1),
    (3, '2024-11-03', 2);
INSERT INTO `OrderDetails` (`OrderDetailID`, `OrderID`, `ProductID`, `Quantity`, `UnitPrice`)
VALUES 
    (1, 1, 1, 3, 799.99),
    (2, 1, 2, 5, 20.00),
    (3, 2, 2, 2, 120.50),
    (4, 2, 3, 4, 2.99),
    (5, 3, 3, 8, 49.99);
    
UPDATE Customers
SET Phone = '012345678'
WHERE CustomerID = 2;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM Orders
WHERE CustomerID NOT IN (SELECT CustomerID FROM Customers);
SET SQL_SAFE_UPDATES = 1;

SELECT Customers.CustomerID, Customers.CustomerName, COUNT(Orders.OrderID) AS TotalOrders
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.CustomerID, Customers.CustomerName;

SELECT OrderDetails.OrderID, OrderDetails.ProductID, OrderDetails.Quantity, 
       (OrderDetails.Quantity * OrderDetails.UnitPrice) AS TotalAmount
FROM OrderDetails
ORDER BY OrderDetails.OrderID;