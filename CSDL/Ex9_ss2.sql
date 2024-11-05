CREATE DATABASE `ECommerce_DB`;
USE `ECommerce_DB`;

CREATE TABLE `Users` (
    `UserID` INT PRIMARY KEY AUTO_INCREMENT,
    `Username` VARCHAR(50) UNIQUE NOT NULL,
    `PasswordHash` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(100) UNIQUE NOT NULL,
    `CreatedAt` DATETIME
);

CREATE TABLE `Products` (
    `ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(100) NOT NULL,
    `Description` TEXT,
    `Price` DECIMAL(10, 2) NOT NULL,
    `Stock` INT NOT NULL
);

CREATE TABLE `Orders` (
    `OrderID` INT PRIMARY KEY AUTO_INCREMENT,
    `UserID` INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    `OrderDate` DATETIME,
    `TotalAmount` DECIMAL(10, 2) NOT NULL
);

CREATE TABLE `OrderDetails` (
    `OrderDetailID` INT PRIMARY KEY AUTO_INCREMENT,
    `OrderID` INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    `ProductID` INT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    `Quantity` INT NOT NULL,
    `PriceAtOrder` DECIMAL(10, 2) NOT NULL
);

CREATE TABLE `Reviews` (
    `ReviewID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductID` INT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    `UserID` INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    `Rating` INT CHECK (Rating BETWEEN 1 AND 5),
    `ReviewText` TEXT,
    `CreatedAt` DATETIME 
);