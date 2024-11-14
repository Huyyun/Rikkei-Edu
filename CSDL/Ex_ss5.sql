CREATE DATABASE `Ex_ss5`;
USE Ex_ss5;

CREATE TABLE `Customers`(
	`CustomerID` INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerName` VARCHAR(100) NOT NULL,
    `ContactName` VARCHAR(100) NOT NULL,
    `Country` VARCHAR(100) NOT NULL
);

CREATE TABLE `Orders`(
	`OrderID` INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerID` INT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    `OrderDate` DATE NOT NULL,
    `TotalAmount` DECIMAL (10, 2) NOT NULL
);

CREATE TABLE `Products`(
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(100) NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL
);

CREATE TABLE `OrderDetails`(
	`OrderDetailID` INT PRIMARY KEY AUTO_INCREMENT,
    `OrderID` INT NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    `ProductID` INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    `Quantity` INT NOT NULL,
    `UnitPrice` DECIMAL(10, 2) NOT NULL
);

-- Hãy tạo một view để hiển thị thông tin đơn hàng
CREATE VIEW display_orders AS
SELECT * FROM Orders;

-- Hãy tạo một view để hiển thị chi tiết đơn hàng
CREATE VIEW display_OrderDetails AS
SELECT * FROM OrderDetails;

-- Hãy tạo chỉ mục cho bảng Orders
CREATE INDEX `Order Date` ON Orders (`OrderDate`);
SHOW INDEXES FROM Orders;

-- Hãy tạo chỉ mục cho bảng OrdersDetails
CREATE INDEX `Quantity` ON OrderDetails (`Quantity`);
SHOW INDEXES FROM OrderDetails;