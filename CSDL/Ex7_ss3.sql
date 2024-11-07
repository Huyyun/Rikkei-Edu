CREATE DATABASE `Shop4`;
USE Shop4;
CREATE TABLE `Customers`(
	`CustomerID` INT PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `JoinDate` DATE 
);
INSERT INTO `Customers` (`CustomerID`, `Name`, `Email`, `JoinDate`) VALUES 
    (1, 'Customer A', 'customerA@example.com', '2023-01-15'),
    (2, 'Customer B', 'customerB@example.com', '2023-02-20'),
    (3, 'Customer C', 'customerC@example.com', '2023-03-25'),
    (4, 'Customer D', 'customerD@example.com', '2023-04-10');
    
CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,                                
    `CustomerID` INT,   
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
	`OrderDate` DATETIME,  
    `TotalAmount` DECIMAL(10, 2) NOT NULL
);   
INSERT INTO `Orders` (`OrderID`, `CustomerID`, `OrderDate`, `TotalAmount`) VALUES 
    (1, 1, '2023-05-10 14:30:00', 150.00),
    (2, 2, '2023-06-15 10:00:00', 250.00),
    (3, 1, '2023-07-20 16:00:00', 300.00),
    (4, 3, '2023-08-25 11:45:00', 120.00),
    (5, 2, '2023-09-05 09:15:00', 400.00);
    
UPDATE `Orders` 
SET `TotalAmount` = 350.00 
WHERE `OrderID` = 3;
UPDATE `Customers` 
SET `Email` = 'updatedCustomerB@example.com' 
WHERE `CustomerID` = 2;

DELETE FROM `Customers` 
WHERE `CustomerID` = 4;
DELETE FROM `Orders` 
WHERE `OrderID` = 1;

SELECT `Orders`.`OrderID`, `Orders`.`OrderDate`, `Orders`.`TotalAmount`, `Customers`.`Name` AS `CustomerName`
FROM `Orders`
JOIN `Customers` ON `Orders`.`CustomerID` = `Customers`.`CustomerID`
ORDER BY `Orders`.`OrderID` ASC;
SELECT `CustomerID`, SUM(`TotalAmount`) AS `TotalSpent`
FROM `Orders`
GROUP BY `CustomerID`;