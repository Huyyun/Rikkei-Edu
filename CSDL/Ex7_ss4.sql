CREATE DATABASE `Ex7_ss4`;
USE Ex7_ss4;
CREATE TABLE `Products` (
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(100) NOT NULL
);

INSERT INTO `Products` (`ProductID`, `ProductName`) VALUES
(1, 'Laptop'),
(2, 'Smartphone'),
(3, 'Tablet'),
(4, 'Smartwatch'),
(5, 'Headphones'),
(6, 'Bluetooth Speaker'),
(7, 'Monitor'),
(8, 'Keyboard'),
(9, 'Mouse'),
(10, 'External Hard Drive');

CREATE TABLE `Regions` (
	`RegionID` INT PRIMARY KEY AUTO_INCREMENT,
    `RegionName` VARCHAR(100) NOT NULL
);

INSERT INTO `Regions` (`RegionID`, `RegionName`) VALUES
(1, 'North'),
(2, 'South'),
(3, 'East'),
(4, 'West');

CREATE TABLE `Sales`(
	`SaleID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductID` INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    `RegionID` INT NOT NULL,
    FOREIGN KEY (RegionID) REFERENCES Regions(RegionID),
    `SaleDate` DATE NOT NULL,
    `Quantity` INT NOT NULL,
    `Amount` DECIMAL(10,2) NOT NULL
);

INSERT INTO `Sales` (`SaleID`, `ProductID`, `RegionID`, `SaleDate`, `Quantity`, `Amount`) VALUES
(1, 1, 1, '2024-01-01', 5, 7500.00),  
(2, 2, 2, '2024-01-03', 10, 8000.00), 
(3, 3, 3, '2024-01-05', 8, 4000.00),  
(4, 4, 4, '2024-01-07', 6, 1500.00), 
(5, 5, 1, '2024-01-10', 12, 1800.00), 
(6, 6, 2, '2024-01-12', 7, 700.00),    
(7, 7, 3, '2024-01-15', 4, 1200.00),   
(8, 8, 4, '2024-01-17', 15, 750.00),   
(9, 9, 1, '2024-01-20', 20, 500.00),  
(10, 10, 2, '2024-01-22', 3, 360.00);

SELECT 
    r.RegionName,
    SUM(s.Amount) AS TotalRevenue,
    SUM(s.Quantity) AS TotalQuantity,
    (SELECT p.ProductName 
     FROM Sales s2
     JOIN Products p ON s2.ProductID = p.ProductID
     WHERE s2.RegionID = r.RegionID
     GROUP BY s2.ProductID
     ORDER BY SUM(s2.Quantity) DESC
     LIMIT 1) AS BestSellingProduct
FROM 
    Sales s
JOIN 
    Regions r ON s.RegionID = r.RegionID
GROUP BY 
    r.RegionID
ORDER BY 
    TotalRevenue DESC, TotalQuantity DESC;