USE ECommerce_DB;

ALTER TABLE Users 
    ADD CONSTRAINT UC_Username UNIQUE (Username),
    ADD CONSTRAINT UC_Email UNIQUE (Email);

ALTER TABLE Products 
    MODIFY ProductName VARCHAR(100) NOT NULL,
    MODIFY Price DECIMAL(10, 2) NOT NULL,
    MODIFY Stock INT NOT NULL;

ALTER TABLE Orders 
    MODIFY TotalAmount DECIMAL(10, 2) NOT NULL CHECK (TotalAmount >= 0);

ALTER TABLE OrderDetails 
    MODIFY Quantity INT NOT NULL CHECK (Quantity >= 0),
    MODIFY PriceAtOrder DECIMAL(10, 2) NOT NULL CHECK (PriceAtOrder >= 0);

ALTER TABLE Reviews 
    MODIFY Rating INT CHECK (Rating BETWEEN 1 AND 5);