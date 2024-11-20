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
CREATE PROCEDURE GetMonthlyRevenueByCustomer (IN inCustomerID INT, IN inMonthYear VARCHAR(7), OUT outTotalRevenue DECIMAL(10, 2))
BEGIN
    DECLARE inYear INT;
    DECLARE inMonth INT;
    
	SET inYear = LEFT(inMonthYear, 4);
	SET inMonth = RIGHT(inMonthYear, 2); 
    
	SELECT COALESCE(SUM(TotalAmount), 0)
	INTO outTotalRevenue
	FROM Orders
	WHERE CustomerID = inCustomerID
	AND YEAR(OrderDate) = inYear
	AND MONTH(OrderDate) = inMonth;
END$$
DELIMITER ;

SET @TotalRevenue = 0;
CALL GetMonthlyRevenueByCustomer(1, '2024-07', @TotalRevenue);
SELECT @TotalRevenue AS TotalRevenue;