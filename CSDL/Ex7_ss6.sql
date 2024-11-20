CREATE DATABASE `SalesDB`;
USE SalesDB;

CREATE TABLE `Customers` (
	`CustomerID` INT PRIMARY KEY AUTO_INCREMENT,
    `FirstName` VARCHAR(50),
    `LastName` VARCHAR(50),
	`Email` VARCHAR(100)
);
CREATE TABLE `Products` (
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(100),
    `Price` DECIMAL(10, 2)
);
CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerID` INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    `OrderDate` DATE,
    `TotalAmount` DECIMAL(10, 2)
);
CREATE TABLE `Sales` (
	`SaleID` INT PRIMARY KEY AUTO_INCREMENT,
    `OrderID` INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    `SaleDate` DATE,
    `SaleAmount` DECIMAL(10, 2)
);
CREATE TABLE `Promotions` (
	`PromotionID` INT PRIMARY KEY AUTO_INCREMENT,
    `PromotionName` VARCHAR(100),
    `DiscountPercentage ` DECIMAL(5, 2)
);

DELIMITER $$
CREATE PROCEDURE AnalyzeRevenueAndApplyPromotion (IN inStartDate DATE, IN inEndDate DATE, IN inRevenueThreshold DECIMAL(10, 2))
BEGIN
    INSERT INTO Promotions (PromotionName, DiscountPercentage)
    SELECT 
        CONCAT('Promotion for Customer', CustomerID, ' in ', DATE_FORMAT(OrderDate, '%Y-%m')) AS PromotionName,
        10.00 AS DiscountPercentage
    FROM Orders
    WHERE OrderDate BETWEEN inStartDate AND inEndDate
    GROUP BY CustomerID, DATE_FORMAT(OrderDate, '%Y-%m')
    HAVING SUM(TotalAmount) > inRevenueThreshold;
END$$
DELIMITER ;