CREATE DATABASE `Store5`;
USE Store5;
CREATE TABLE `Invoices`(
	`InvoiceID` INT PRIMARY KEY AUTO_INCREMENT,
    `InvoiceDate` DATETIME,
    `CustomerName` VARCHAR(100) NOT NULL
);
INSERT INTO `Invoices` (`InvoiceID`, `InvoiceDate`, `CustomerName`) VALUES 
    (1, '2023-10-01 10:00:00', 'Customer 1'),
    (2, '2023-10-02 14:30:00', 'Customer 2');
    
CREATE TABLE `Products`(
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(100) NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL
);
INSERT INTO `Products` (`ProductID`, `ProductName`, `Price`) VALUES 
    (1, 'Product A', 50.00),
    (2, 'Product B', 75.00),
    (3, 'Product C', 100.00);
    
CREATE TABLE `InvoiceDetails`(
	`DetailID` INT PRIMARY KEY AUTO_INCREMENT,
    `InvoiceID` INT NOT NULL,
    FOREIGN KEY (InvoiceID) REFERENCES Invoices(InvoiceID),
    `ProductID` INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    `Quantity` INT NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL
);
INSERT INTO `InvoiceDetails` (`DetailID`, `InvoiceID`, `ProductID`, `Quantity`, `Price`) VALUES 
    (1, 1, 3, 2, 100.00),  
    (2, 1, 2, 3, 75.00),  
    (3, 2, 1, 1, 50.00),  
    (4, 2, 2, 2, 75.00);
    
UPDATE `Products` 
SET `Price` = 55.00 
WHERE `ProductID` = 1;
UPDATE `InvoiceDetails` 
SET `Quantity` = 10 
WHERE `DetailID` = 2;

DELETE FROM `InvoiceDetails` 
WHERE `DetailID` = 1;
DELETE FROM `Products` 
WHERE `ProductID` = 3;

SELECT `InvoiceID`, SUM(`Quantity` * `Price`) AS `TotalInvoiceAmount`
FROM `InvoiceDetails`
GROUP BY `InvoiceID`;
SELECT `Invoices`.`InvoiceID`, `Invoices`.`CustomerName`, `Products`.`ProductName`, `InvoiceDetails`.`Quantity`, `InvoiceDetails`.`Price`
FROM `InvoiceDetails`
JOIN `Invoices` ON `InvoiceDetails`.`InvoiceID` = `Invoices`.`InvoiceID`
JOIN `Products` ON `InvoiceDetails`.`ProductID` = `Products`.`ProductID`
ORDER BY `Invoices`.`InvoiceID`, `Products`.`ProductName`;