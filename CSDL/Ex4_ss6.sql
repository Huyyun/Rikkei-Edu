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
CREATE PROCEDURE DeleteOrderAndSales (IN inOrderID INT)
BEGIN
	DELETE FROM Sales
	WHERE OrderID = inOrderID;
    
    DELETE FROM Orders
	WHERE OrderID = inOrderID;
END$$
DELIMITER ;

CALL DeleteOrderAndSales(1);