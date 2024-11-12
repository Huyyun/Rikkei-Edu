CREATE DATABASE `Ex4_ss4`;
USE Ex4_ss4;
CREATE TABLE `Products` (
	`ProductID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductName` VARCHAR(100) NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL
);

INSERT INTO `Products` (`ProductID`, `ProductName`, `Price`) VALUES
(1, 'Laptop', 1500.00),
(2, 'Smartphone', 800.00),
(3, 'Tablet', 500.00),
(4, 'Smartwatch', 250.00),
(5, 'Headphones', 150.00),
(6, 'Bluetooth Speaker', 100.00),
(7, 'Monitor', 300.00),
(8, 'Keyboard', 50.00),
(9, 'Mouse', 25.00),
(10, 'External Hard Drive', 120.00);

SELECT ProductName `Sản phẩm có giá cao nhất`, Price
FROM Products
WHERE Price = (
	SELECT MAX(Price) FROM Products
);
SELECT ProductName `Sản phẩm có giá thấp nhất`, Price
FROM Products
WHERE Price = (
	SELECT MIN(Price) FROM Products
);