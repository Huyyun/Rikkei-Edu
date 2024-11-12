CREATE DATABASE `Ex6_ss4`;
USE Ex6_ss4;
CREATE TABLE `Sales`(
	`SaleID` INT PRIMARY KEY AUTO_INCREMENT,
    `SaleDate` DATE NOT NULL,
    `Price` DECIMAL(10,2) NOT NULL
);

INSERT INTO `Sales` (`SaleID`, `SaleDate`, `Price`) VALUES
(1, '2024-01-01', 150.00),
(2, '2024-01-02', 200.00),
(3, '2024-01-03', 300.00),
(4, '2024-01-04', 250.00),
(5, '2024-01-05', 400.00),
(6, '2024-01-06', 350.00),
(7, '2024-02-07', 220.00),
(8, '2024-02-08', 180.00),
(9, '2024-03-09', 275.00),
(10, '2024-04-10', 320.00);

SELECT 
    MONTH(SaleDate) AS Month,
    YEAR(SaleDate) AS Year,
    SUM(Price) AS TotalRevenue,
    COUNT(SaleID) AS OrderCount,
    AVG(Price) AS AverageOrderRevenue
FROM 
    Sales
GROUP BY 
    YEAR(SaleDate), MONTH(SaleDate)
ORDER BY 
    Year, Month;