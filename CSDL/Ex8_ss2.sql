CREATE DATABASE `Store3`;
USE Store3;
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

SELECT 
    MONTH(SaleDate) AS Month,
    SUM(TotalAmount) AS TotalRevenue
FROM 
    Sales
WHERE 
    YEAR(SaleDate) = 2023
GROUP BY 
    MONTH(SaleDate)
ORDER BY 
    Month;
    
SELECT 
    AVG(TotalRevenue) AS ForecastedRevenue
FROM 
    (
        SELECT 
            MONTH(SaleDate) AS Month,
            SUM(TotalAmount) AS TotalRevenue
        FROM 
            Sales
        WHERE 
            YEAR(SaleDate) = 2023
        GROUP BY 
            MONTH(SaleDate)
    ) AS MonthlyRevenue
WHERE 
    Month = MONTH(CURRENT_DATE());