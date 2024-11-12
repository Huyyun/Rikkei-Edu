CREATE DATABASE `Ex5_ss4`;
USE Ex5_ss4;
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

CREATE TABLE `OrderDetails` (
	`OrderDetailID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductID` INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES `Products`(ProductID),
    `Quantity` INT NOT NULL,
    `Price` DECIMAL(10,2) NOT NULL
);

INSERT INTO `OrderDetails` (`OrderDetailID`, `ProductID`, `Quantity`, `Price`) VALUES
(1, 1, 2, 1500.00),        
(2, 2, 1, 800.00),          
(3, 3, 3, 500.00),
(4, 4, 2, 250.00),
(5, 5, 5, 150.00),         
(6, 6, 4, 100.00),        
(7, 7, 1, 300.00),  
(8, 8, 6, 50.00),           
(9, 9, 10, 25.00),       
(10, 10, 3, 120.00);  

SELECT p.ProductName, od.Quantity, od.Price
FROM OrderDetails od
INNER JOIN Products p ON p.ProductID = od.ProductID
ORDER BY od.Quantity DESC;