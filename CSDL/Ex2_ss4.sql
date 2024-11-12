CREATE DATABASE `Ex2_ss4`;
USE Ex2_ss4;
CREATE TABLE `Sales`(
	`SaleID` INT PRIMARY KEY AUTO_INCREMENT,
    `ProductID` INT NOT NULL,
    `SaleDate` DATE NOT NULL,
    `Quantity` INT NOT NULL,
    `Amount` DECIMAL(10,2) NOT NULL
);

INSERT INTO `Sales` (`SaleID`, `ProductID`, `SaleDate`, `Quantity`, `Amount`) VALUES
(1, 1, '2024-01-01', 2, 100.00),
(2, 1, '2024-01-15', 1, 50.00),
(3, 2, '2024-02-01', 1, 75.00),
(4, 2, '2024-02-10', 3, 225.00),
(5, 3, '2024-03-01', 5, 500.00),
(6, 3, '2024-03-20', 2, 200.00),
(7, 1, '2024-04-01', 1, 50.00),
(8, 2, '2024-04-10', 4, 300.00);

SELECT ProductID, COUNT(SaleID) 
FROM Sales
GROUP BY ProductID;