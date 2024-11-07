CREATE DATABASE `Store4`;
USE Store4;
CREATE TABLE `Suppliers`(
	`SupplierID` INT PRIMARY KEY AUTO_INCREMENT,
    `SupplierName` VARCHAR(100) NOT NULL,
    `ContactEmail` VARCHAR(100) NOT NULL
);
INSERT INTO `Suppliers` (`SupplierID`, `SupplierName`, `ContactEmail`) VALUES 
    (1, 'Supplier A', 'suppliera@example.com'),
    (2, 'Supplier B', 'supplierb@example.com'),
    (3, 'Supplier C', 'supplierc@example.com');
    
CREATE TABLE `Products`(
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(100) NOT NULL,
    `SupplierID` INT,
    FOREIGN KEY (SupplierID) REFERENCES `Suppliers`(SupplierID),
    `Price` DECIMAL(10, 2) NOT NULL,
    `Stock` INT NOT NULL
);
INSERT INTO `Products` (`ProductID`, `ProductName`, `SupplierID`, `Price`, `Stock`) VALUES 
    (1, 'Product 1', 1, 25.99, 50),
    (2, 'Product 2', 2, 35.99, 30),
    (3, 'Product 3', 1, 15.99, 40),
    (4, 'Product 4', 3, 29.99, 20);
    
UPDATE `Products` 
SET `Price` = 45.99 
WHERE `ProductID` = 2;
UPDATE `Suppliers` 
SET `SupplierName` = 'Updated Supplier A' 
WHERE `SupplierID` = 1;

DELETE FROM `Products` 
WHERE `ProductID` = 4;
DELETE FROM `Suppliers` 
WHERE `SupplierID` = 3;

SELECT `Products`.`ProductID`, `Products`.`ProductName`, `Products`.`Price`, `Products`.`Stock`, `Suppliers`.`SupplierName`
FROM `Products`
JOIN `Suppliers` ON `Products`.`SupplierID` = `Suppliers`.`SupplierID`
ORDER BY `Products`.`ProductID` ASC;