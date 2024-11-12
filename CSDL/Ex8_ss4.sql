CREATE DATABASE `Ex8_ss4`;
USE Ex8_ss4;
CREATE TABLE `Customers` (
    `CustomerID` INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerName` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Phone` VARCHAR(15),
    `CreatAt` DATETIME
);

INSERT INTO `Customers` (`CustomerID`, `CustomerName`, `Email`, `Phone`, `CreatAt`) VALUES
(1, 'John Doe', 'john.doe@example.com', '123-456-7890', '2024-11-10 10:00:00'),
(2, 'Jane Smith', 'jane.smith@example.com', '098-765-4321', '2024-11-11 11:30:00'),
(3, 'Alice Johnson', 'alice.johnson@example.com', '111-222-3333', '2024-11-12 12:15:00'),
(4, 'Bob Brown', 'bob.brown@example.com', '444-555-6666', '2024-11-13 14:45:00'),
(5, 'Charlie Davis', 'charlie.davis@example.com', '777-888-9999', '2024-11-14 16:30:00');


CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,                                
    `CustomerID` INT,   
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
	`OrderDate` DATETIME,  
    `TotalAmount` DECIMAL(10, 2) NOT NULL
);   

INSERT INTO `Orders` (`OrderID`, `CustomerID`, `OrderDate`, `TotalAmount`) VALUES
(1, 1, '2024-11-10 10:30:00', 1800.00),
(2, 2, '2024-11-11 11:45:00', 750.00),
(3, 3, '2024-11-12 12:30:00', 150.00),
(4, 4, '2024-11-13 14:50:00', 200.00),
(5, 5, '2024-11-14 16:40:00', 500.00);

CREATE TABLE `Products` (
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(255) NOT NULL,
    `Category` VARCHAR(255),
    `Price` DECIMAL(10, 2) NOT NULL
);

INSERT INTO `Products` (`ProductID`, `ProductName`, `Category`, `Price`) VALUES
(1, 'Laptop', 'Electronics', 1500.00),
(2, 'Smartphone', 'Electronics', 700.00),
(3, 'Headphones', 'Accessories', 100.00),
(4, 'Keyboard', 'Accessories', 50.00),
(5, 'External Hard Drive', 'Electronics', 120.00);

CREATE TABLE `OrderDetails` (
	`OrderDetailID` INT PRIMARY KEY AUTO_INCREMENT,
    `OrderID` INT,
    FOREIGN KEY (OrderID) REFERENCES `Orders`(OrderID),
    `ProductID` INT,
    FOREIGN KEY (ProductID) REFERENCES `Products`(ProductID),
    `Quantity` INT NOT NULL,
    `UnitPrice` DECIMAL(10,2) NOT NULL
);

INSERT INTO `OrderDetails` (`OrderDetailID`, `OrderID`, `ProductID`, `Quantity`, `UnitPrice`) VALUES
(1, 1, 1, 1, 1500.00),
(2, 1, 3, 2, 100.00),
(3, 2, 2, 1, 700.00),
(4, 3, 3, 1, 100.00),
(5, 4, 4, 2, 50.00),
(6, 5, 1, 1, 1500.00),
(7, 5, 5, 2, 120.00);

SELECT 
    DATE_FORMAT(o.OrderDate, '%Y-%m') AS Month,  
    COUNT(o.OrderID) AS TotalOrders,  
    SUM(o.TotalAmount) AS TotalRevenue 
FROM 
    Orders o
GROUP BY 
    DATE_FORMAT(o.OrderDate, '%Y-%m')
ORDER BY 
    Month DESC;