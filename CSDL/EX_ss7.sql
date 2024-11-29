CREATE DATABASE InventoryManagement;
USE InventoryManagement;

CREATE TABLE Products(
	ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName  VARCHAR(100),
    Quantity INT
);
INSERT INTO Products(ProductID, ProductName, Quantity)
VALUES 
	(1, 'Laptop', 2),
	(2, 'PC', 1),
    (3, 'Mouse', 2);

CREATE TABLE InventoryChanges(
	ChangeID INT PRIMARY KEY AUTO_INCREMENT,
    ProductID INT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    OldQuantity INT,
    NewQuantity INT,
    ChangeDate DATETIME
);

CREATE TABLE ProductSummary (
	SummaryID INT PRIMARY KEY AUTO_INCREMENT,
    TotalQuantity INT
); 
INSERT INTO ProductSummary(TotalQuantity)
SELECT SUM(quantity) FROM Products;

CREATE TABLE InventoryChangeHistory(
	HistoryID INT PRIMARY KEY AUTO_INCREMENT,
    ProductID INT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    OldQuantity INT,
    NewQuantity INT,
    ChangeType ENUM('Increase', 'Decrease'),
    ChangeDate DATETIME
);

CREATE TABLE ProductRestock (
    RestockID INT PRIMARY KEY AUTO_INCREMENT,
    ProductID INT,
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    RestockQuantity INT,
    RestockDate DATETIME
);

-- EX1
DELIMITER $$
CREATE TRIGGER AfterProductUpdate
AFTER UPDATE
ON Products
FOR EACH ROW
BEGIN
	INSERT INTO InventoryChanges(ProductID, OldQuantity, NewQuantity, ChangeDate)
    VALUES (OLD.ProductID, OLD.Quantity, NEW.Quantity, NOW());
END$$
DELIMITER ;
DROP TRIGGER AfterProductUpdate;

SELECT * FROM Products;

UPDATE Products
SET ProductName = 'Pencil', Quantity = 5
WHERE ProductID = 3;

SELECT * FROM InventoryChanges;

-- EX2
DELIMITER $$
CREATE TRIGGER BeforeProductDelete
BEFORE DELETE
ON Products
FOR EACH ROW
BEGIN
	DECLARE count INT DEFAULT 0;
    
    SELECT COUNT(*) 
    INTO count
    FROM Products;
    
    IF count > 2 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Products can not delete';
	END IF;
END$$
DELIMITER ;

DELETE FROM Products
WHERE ProductID = 2;

-- EX3
ALTER TABLE Products
ADD LastUpdate DATETIME;

DELIMITER $$
CREATE TRIGGER AfterProductUpdateSetDate
BEFORE UPDATE
ON Products
FOR EACH ROW
BEGIN
	SET NEW.LastUpdate = NOW();
END$$
DELIMITER ;
DROP TRIGGER AfterProductUpdateSetDate;

UPDATE Products
SET ProductName = 'Smartphone', Quantity = 3
WHERE ProductID = 3;

SELECT * FROM Products;

-- EX4 
DELIMITER $$
CREATE TRIGGER AfterProductUpdateSummary
AFTER UPDATE
ON Products
FOR EACH ROW
BEGIN
    UPDATE ProductSummary
    SET TotalQuantity = TotalQuantity - OLD.quantity + NEW.quantity;
END$$
DELIMITER ;

INSERT INTO Products (ProductName, Quantity) VALUES ('Laptop', 50);
INSERT INTO Products (ProductName, Quantity) VALUES ('Smartphone', 30);
INSERT INTO Products (ProductName, Quantity) VALUES ('Tablet', 20);

SET SQL_SAFE_UPDATES = 0;
UPDATE Products SET ProductName = 'Ipad', Quantity = 80 
WHERE ProductID = 6; 
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM ProductSummary;

-- EX5
DELIMITER $$
CREATE TRIGGER AfterProductUpdateHistory
AFTER UPDATE
ON Products
FOR EACH ROW
BEGIN
    INSERT INTO InventoryChangeHistory (ProductID, OldQuantity, NewQuantity, ChangeType, ChangeDate)
    VALUES (
        NEW.ProductID,
        OLD.Quantity,
        NEW.Quantity,
        CASE
            WHEN NEW.Quantity > OLD.Quantity THEN 'Increase'
            ELSE 'Decrease'
        END,
        NOW()
    );
END$$
DELIMITER ;

SET SQL_SAFE_UPDATES = 0;
UPDATE Products
SET Quantity = 30
WHERE ProductID = 7;
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM InventoryChangeHistory; 

-- EX6
DELIMITER $$
CREATE TRIGGER AfterProductUpdateRestock
AFTER UPDATE ON Products
FOR EACH ROW
BEGIN
    IF NEW.quantity < 10 THEN
        INSERT INTO ProductRestock (ProductID, RestockQuantity, RestockDate)
        VALUES (NEW.ProductID, NEW.Quantity, NOW());
    END IF;
END $$
DELIMITER ;

INSERT INTO Products (ProductName, Quantity) VALUES ('Headphone', 20);

SET SQL_SAFE_UPDATES = 0;
UPDATE Products
SET Quantity = 8
WHERE ProductID = 5;

UPDATE Products
SET Quantity = 3
WHERE ProductID = 8;
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM ProductRestock;