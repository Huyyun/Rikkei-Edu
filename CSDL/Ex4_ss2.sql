CREATE DATABASE `Shop`;
USE Shop;
CREATE TABLE `Customers`(
	`CustomerID` INT PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `Address` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,                 
    `OrderDate` DATE NOT NULL,                 
    `CustomerID` INT,   
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    `TotalAmount` DECIMAL(10, 2) CHECK (TotalAmount >= 0)
);    
SELECT * FROM `Orders`;