USE classicmodels;
-- 1.	Đưa ra tên các thành phố và số lượng khách hàng tại từng thành phố:
SELECT city, COUNT(customerNumber) AS customer_count
FROM customers
GROUP BY city;

-- 2.	Đưa ra số lượng các đơn đặt hàng trong tháng 3/2005:
SELECT COUNT(*) AS order_count
FROM orders
WHERE orderDate >= '2005-03-01' AND orderDate < '2005-04-01';

-- 3.	Đưa ra số lượng các đơn đặt hàng trong từng tháng của năm 2005:
SELECT MONTH(orderDate) AS month, COUNT(*) AS order_count
FROM orders
WHERE YEAR(orderDate) = 2005
GROUP BY MONTH(orderDate);

-- 4.	Đưa ra 10 mã đơn đặt hàng có giá trị lớn nhất:
SELECT 
    od.orderNumber,
    SUM(od.quantityOrdered * od.priceEach) AS total_value
FROM orderdetails od
GROUP BY od.orderNumber
ORDER BY total_value DESC
LIMIT 10;

-- 5.	Đưa ra mã nhóm hàng và tổng số lượng hàng hóa còn trong kho của nhóm hàng đó:
SELECT 
    pl.productLine AS product_line,
    SUM(p.quantityInStock) AS total_stock
FROM products p
INNER JOIN productLines pl ON p.productLine = pl.productLine
GROUP BY pl.productLine;

