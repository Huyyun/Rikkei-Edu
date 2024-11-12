CREATE DATABASE `Ex1_ss4`;
USE Ex1_ss4;
CREATE TABLE `Customers`(
	`CustomerID` INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerName` VARCHAR(100) NOT NULL,
    `CustomerEmail` VARCHAR(100) NOT NULL
);
INSERT INTO `Customers` (`CustomerID`, `CustomerName`, `CustomerEmail`) VALUES 
    (1, 'Customer A', 'customerA@example.com'),
    (2, 'Customer B', 'customerB@example.com'),
    (3, 'Customer C', 'customerC@example.com'),
    (4, 'Customer D', 'customerD@example.com');
    
CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,                                
    `CustomerID` INT NOT NULL,   
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
	`OrderDate` DATE NOT NULL,  
    `TotalAmount` DECIMAL(10, 2) NOT NULL
);   
INSERT INTO `Orders` (`OrderID`, `CustomerID`, `OrderDate`, `TotalAmount`) VALUES 
    (1, 1, '2023-05-10', 150.00),
    (2, 2, '2023-06-15', 250.00),
    (3, 1, '2023-07-20', 300.00),
    (4, 3, '2023-08-25', 120.00),
    (5, 2, '2023-09-05', 400.00);
    
SELECT o.OrderID, c.CustomerName, c.CustomerEmail, o.OrderDate, o.TotalAmount
FROM `Orders` o
INNER JOIN `Customers` c
ON o.CustomerID = c.CustomerID
ORDER BY o.OrderID;