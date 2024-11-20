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
CREATE PROCEDURE UpdateOrderTotalAndApplyPromotion (IN inOrderID INT, IN inNewTotalAmount DECIMAL(10, 2), IN inRevenueThreshold DECIMAL(10, 2))
BEGIN
	UPDATE Orders
	SET TotalAmount = inNewTotalAmount
	WHERE OrderID = inOrderID;
    
	IF inNewTotalAmount > inRevenueThreshold THEN
		INSERT INTO Promotions (PromotionName, DiscountPercentage)
		VALUES (
			CONCAT('Promotion for Order #', inOrderID), 10.00 
		);
	END IF;
END$$
DELIMITER ;

CALL UpdateOrderTotalAndApplyPromotion(1, 500.00, 300.00);