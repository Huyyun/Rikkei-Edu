CREATE DATABASE classicmodels1;
USE classicmodels1;

CREATE TABLE employees (
  employeeNumber INT PRIMARY KEY,
  lastName VARCHAR(50) NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  extension VARCHAR(10),
  email VARCHAR(100),
  officeCode VARCHAR(10),
  reportsTo INT,
  titleJob VARCHAR(50)
);

CREATE TABLE customers (
  customerNumber INT PRIMARY KEY,
  customerName VARCHAR(50) NOT NULL,
  contactLastName VARCHAR(50),
  contactFirstName VARCHAR(50),
  phone VARCHAR(50),
  addressLine1 VARCHAR(50),
  addressLine2 VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(50),
  postalCode VARCHAR(15),
  country VARCHAR(50),
  salesRepEmployeeNumber INT,
  creditLimit DOUBLE,
  CONSTRAINT fk_salesRepEmployeeNumber
    FOREIGN KEY (salesRepEmployeeNumber)
    REFERENCES employees(employeeNumber)
);

CREATE TABLE productlines (
  productLine VARCHAR(50) PRIMARY KEY,
  textDescription VARCHAR(4000),
  htmlDescription MEDIUMTEXT,
  image MEDIUMBLOB
);

CREATE TABLE products (
  productCode VARCHAR(15) PRIMARY KEY,
  productName VARCHAR(70) NOT NULL,
  productLine VARCHAR(50) NOT NULL,
  productScale VARCHAR(10),
  productVendor VARCHAR(50),
  productDescription TEXT,
  quantityInStock SMALLINT,
  buyPrice DECIMAL(10,2),
  MSRP DECIMAL(10,2),
  CONSTRAINT fk_productLine
    FOREIGN KEY (productLine)
    REFERENCES productlines(productLine)
);

CREATE TABLE orders (
  orderNumber INT PRIMARY KEY,
  orderDate DATE NOT NULL,
  requiredDate DATE NOT NULL,
  shippedDate DATE,
  status VARCHAR(15),
  comments TEXT,
  customerNumber INT,
  CONSTRAINT fk_customerNumber
    FOREIGN KEY (customerNumber)
    REFERENCES customers(customerNumber)
);

CREATE TABLE orderdetails (
  orderNumber INT NOT NULL,
  productCode VARCHAR(15) NOT NULL,
  quantityOrdered INT NOT NULL,
  priceEach DECIMAL(10,2) NOT NULL,
  orderLineNumber SMALLINT NOT NULL,
  PRIMARY KEY (orderNumber, productCode),
  CONSTRAINT fk_orderNumber
    FOREIGN KEY (orderNumber)
    REFERENCES orders(orderNumber),
  CONSTRAINT fk_productCode
    FOREIGN KEY (productCode)
    REFERENCES products(productCode)
);

INSERT INTO employees (employeeNumber, lastName, firstName, extension, email, officeCode, reportsTo, titleJob)
VALUES
  (1002, 'Murphy', 'Diane', 'x5800', 'dmurphy@classicmodelcars.com', '1', NULL, 'President'),
  (1056, 'Patterson', 'Mary', 'x4611', 'mpatter@classicmodelcars.com', '1', 1002, 'Sales Rep'),
  (1076, 'Firrelli', 'Jeff', 'x9273', 'jfirrelli@classicmodelcars.com', '1', 1002, 'Sales Rep'),
  (1088, 'Patterson', 'William', 'x4871', 'wpatterson@classicmodelcars.com', '2', 1056, 'Sales Rep');

INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, city, country, salesRepEmployeeNumber, creditLimit)
VALUES
  (103, 'Atelier graphique', 'Schmitt', 'Carine', '40.32.2555', '54 rue Royale', 'Nantes', 'France', 1056, 21000.00),
  (112, 'Signal Gift Stores', 'King', 'Jean', '7025551838', '8489 Strong St.', 'Las Vegas', 'USA', 1056, 71800.00);

INSERT INTO productlines (productLine, textDescription)
VALUES
  ('Classic Cars', 'Old style cars'),
  ('Motorcycles', 'Various motorcycles'),
  ('Planes', 'All kinds of planes');

INSERT INTO products (productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP)
VALUES
  ('S10_1678', '1969 Harley Davidson Ultimate Chopper', 'Motorcycles', '1:10', 'Min Lin Diecast', 'This replica features...', 7933, 48.81, 95.70),
  ('S10_1949', '1952 Alpine Renault 1300', 'Classic Cars', '1:10', 'Classic Metal Creations', 'Turnable front wheels...', 7305, 98.58, 214.30);

INSERT INTO orders (orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber)
VALUES
  (10100, '2025-02-10', '2025-02-15', '2025-02-12', 'Shipped', 'Deliver on time', 103),
  (10101, '2025-02-11', '2025-02-16', NULL, 'In Process', 'Customer wants gift wrap', 112);

INSERT INTO orderdetails (orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber)
VALUES
  (10100, 'S10_1678', 30, 48.81, 1),
  (10100, 'S10_1949', 10, 98.58, 2),
  (10101, 'S10_1678', 5, 48.81, 1);


-- 1. Thực hiện các lệnh INSERT, UPDATE và DELETE trên các bảng trong CSDL classicmodels
INSERT INTO orders (orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber)
VALUES 
  (10102, '2025-02-16', '2025-02-20', '2025-02-18', 'Shipped', 'New order from tutorial', 112);
  
UPDATE orders 
SET status = 'Cancelled' 
WHERE orderNumber = 10100;

DELETE FROM orders 
WHERE orderNumber = 10102;

-- 2. Tạo 1 bảng đặt tên là temp_orderdetails, sau đó thực hiện thêm dữ liệu trong ngày gần 
-- đây nhất từ bảng orderdetails vào bảng trên
CREATE TABLE temp_orderdetails AS
SELECT *
FROM orderdetails
WHERE orderNumber = (
  SELECT MAX(orderNumber) FROM orderdetails
);

-- 3. Sửa các nhân viên có titleJob từ 'Sales Rep' thành 'Sales Representative'
SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET titleJob = 'Sales Representative'
WHERE titleJob = 'Sales Rep';

SET SQL_SAFE_UPDATES = 1;
