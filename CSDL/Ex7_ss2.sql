CREATE DATABASE `Store2`;
USE Store2;
CREATE TABLE `Sales`(
 `SaleID` INT PRIMARY KEY AUTO_INCREMENT,
 `SaleDate` DATE,
 `CustomerID` INT,
 `TotalAmount` DECIMAL(10, 2) NOT NULL
);
CREATE TABLE `Products`(
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
	`ProductName` VARCHAR(255) UNIQUE NOT NULL,
    `Category` VARCHAR(255),
    `Price` DECIMAL(10, 2) NOT NULL
);
CREATE TABLE `SalesDetails`(
	`SaleDetailID` INT PRIMARY KEY AUTO_INCREMENT,
    `SaleID` INT, 
    FOREIGN KEY (SaleID) REFERENCES Sales(SaleID),
    `ProductID` INT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    `Quantity` INT,
    `UnitPrice` DECIMAL(10, 2)
);

INSERT INTO `Sales` (`SaleID`, `SaleDate`, `CustomerID`, `TotalAmount`) 
VALUES
	(1, '2024-10-01', 1, 0),
	(2, '2024-10-05', 2, 0),
	(3, '2024-10-10', 3, 0);
INSERT INTO `Products` (`ProductID`, `ProductName`, `Category`, `Price`) 
VALUES
	(1, 'Laptop', 'Electronics', 799.99),
	(2, 'Desk Chair', 'Furniture', 120.50),
	(3, 'Notebook', 'Stationery', 2.99),
	(4, 'Smartphone', 'Electronics', 699.99),
	(5, 'Book', 'Stationery', 15.00);
INSERT INTO `SalesDetails` (`SaleDetailID`, `SaleID`, `ProductID`, `Quantity`, `UnitPrice`) 
VALUES
	(1, 1, 1, 1, 799.99), 
	(2, 1, 2, 2, 120.50),  
	(3, 2, 3, 5, 2.99),    
	(4, 3, 4, 3, 699.99),  
	(5, 3, 5, 2, 15.00);   
    
UPDATE Sales
JOIN SalesDetails ON Sales.SaleID = SalesDetails.SaleID
SET Sales.TotalAmount = (SELECT SUM(SalesDetails.Quantity * SalesDetails.UnitPrice)
                     FROM SalesDetails 
                     WHERE SalesDetails.SaleID = Sales.SaleID)
WHERE Sales.SaleID = SalesDetails.SaleID;

SELECT 
    Products.Category,
    SUM(SalesDetails.Quantity * SalesDetails.UnitPrice) AS TotalRevenue
FROM 
    SalesDetails 
JOIN 
    Products ON SalesDetails.ProductID = Products.ProductID
JOIN 
    Sales ON SalesDetails.SaleID = Sales.SaleID
GROUP BY 
    Products.Category
ORDER BY 
    TotalRevenue DESC;
    
SELECT 
    Products.Category,
    SUM(SalesDetails.Quantity * SalesDetails.UnitPrice) AS TotalRevenue
FROM 
    SalesDetails 
JOIN 
    Products ON SalesDetails.ProductID = Products.ProductID
JOIN 
    Sales ON SalesDetails.SaleID = Sales.SaleID
GROUP BY 
    Products.Category
ORDER BY 
    TotalRevenue DESC
LIMIT 1; 