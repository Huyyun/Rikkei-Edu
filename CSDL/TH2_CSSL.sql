CREATE DATABASE IF NOT EXISTS my_classicmodel;
USE my_classicmodel;

CREATE TABLE IF NOT EXISTS `productline` (
	`productLine` VARCHAR(50) PRIMARY KEY,
    `textDescription` VARCHAR(4000),
    `htmlDescription` MEDIUMTEXT,
    `image` MEDIUMBLOB
);

CREATE TABLE IF NOT EXISTS `products` (
	`productCode` VARCHAR(15) PRIMARY KEY,
    `productName` VARCHAR(70),
    `productLine` VARCHAR(50),
    FOREIGN KEY (`productLine`) REFERENCES productline(`productLine`),
    `productScale` VARCHAR(10),
    `productVendor` VARCHAR(50),
    `productDescription` TEXT,
    `quantityInStock` SMALLINT,
    `buyPrice` DOUBLE
);

CREATE TABLE IF NOT EXISTS `orders` (
	`orderNumber` INT PRIMARY KEY AUTO_INCREMENT,
    `orderDate` DATETIME,
    `requireDate` DATETIME,
    `shippedDate` DATETIME,
    `status` VARCHAR(15),
    `comments` TEXT,
    `customerNumber` INT(11)
);

CREATE TABLE IF NOT EXISTS `orderdetails` (
	`orderNumber` INT(11),
    `productCode` VARCHAR(15),
    `quantityOrdered` INT(11),
    `priceEach` DOUBLE,
    `orderLineNumber` SMALLINT,
	FOREIGN KEY (orderNumber) REFERENCES orders(orderNumber),
	FOREIGN KEY (productCode) REFERENCES products(productCode),
	PRIMARY KEY (orderNumber, productCode)
);