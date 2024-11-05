-- 1. Tạo database
-- CREATE SCHEMA `demo_database2`;
-- use demo_database2;
-- CREATE DATABASE `database_name`;

-- 2. Tạo bảng database
-- CREATE TABLE demo_database.person(
-- 	id int auto_increment primary key,
--     age int,
--     last_name varchar(50),
--     first_name varchar(50),
--     full_name varchar(50),
--     city varchar(50),
--     address varchar(50)
-- );

-- CREATE TABLE `demo_database`.`student`(
-- 	`id` int auto_increment primary key,
--     `age` int,
--     `last_name` varchar(50),
--     `first_name` varchar(50),
--     `full_name` varchar(50),
--     `city` varchar(50),
--     `address` varchar(50)
-- );

-- 3. Từ khóa USE
-- USE demo_database2;
-- CREATE TABLE `student`(
-- 	`id` int auto_increment primary key,
--     `age` int,
--     `last_name` varchar(50),
--     `first_name` varchar(50),
--     `full_name` varchar(50),
--     `city` varchar(50),
--     `address` varchar(50)
-- );
-- DROP TABLE student;

-- 5. ALTER
-- USE demo_database;
-- -- ADD
-- ALTER TABLE student
-- ADD Email varchar(50);
-- -- DROP
-- ALTER TABLE student
-- DROP COLUMN Email;
-- -- MODIFY
-- ALTER TABLE student
-- MODIFY COLUMN full_name varchar(255);

-- 6. Constraint (Ràng buộc)
-- USE demo_database2;
-- CREATE TABLE `employee` (
-- 	`id` int AUTO_INCREMENT PRIMARY KEY,
--     `age` int,
--     `last_name` varchar(50),
--     `first_name` varchar(50) UNIQUE,
--     `full_name` varchar(50) NOT NULL,
--     `city` varchar(50),
--     `address` varchar(50)
-- );

-- Bài 1
CREATE DATABASE `ECommerceDB`;
USE `ECommerceDB`;
CREATE TABLE `Users`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(50) UNIQUE NOT NULL,
    `passwordHash` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) UNIQUE NOT NULL
);
CREATE TABLE `Products`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `productName` VARCHAR(100) NOT NULL,
    `description` TEXT,
	`price` DECIMAL(10, 2) NOT NULL,
    `stock` INT NOT NULL
);
CREATE TABLE `Cart`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `userID` INT, 
    FOREIGN KEY (userID) REFERENCES Users(ID),
    `total` INT NOT NULL
);
CREATE TABLE `CartItems`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `cartID` INT,
    FOREIGN KEY (cartID) REFERENCES Cart(ID),
    `productID` INT,
    FOREIGN KEY (productID) REFERENCES Products(ID),
    `quantity` INT NOT NULL
);


-- Bài 2
CREATE DATABASE `Ex2DB`;
USE Ex2DB;
CREATE TABLE `host`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45),
    `address` VARCHAR(45)
);
CREATE TABLE `contractor`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `address` VARCHAR(255),
    `contractor` VARCHAR(45)
);
CREATE TABLE `building`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45),
    `address` VARCHAR(45),
    `city` VARCHAR(45),
    `cost` FLOAT,
    `start` DATE,
    `host_id` INT,
    FOREIGN KEY (host_id) REFERENCES `host`(ID),
    `contractor_id` INT,
    FOREIGN KEY (contractor_id) REFERENCES `contractor`(ID)
);
CREATE TABLE `architect`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `sex` TINYINT(1),
    `birthday` DATE,
    `place` VARCHAR(255),
    `address` VARCHAR(255)
);
CREATE TABLE `design`(
	`building_id` INT,
    FOREIGN KEY (building_id) REFERENCES `building`(ID),
    `architect_id` INT,
    FOREIGN KEY (architect_id) REFERENCES `architect`(ID),
    `benefit` VARCHAR(45)
);
CREATE TABLE `worker`(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45),
    `birthday` VARCHAR(45),
    `year` VARCHAR(45),
    `skill` VARCHAR(45)
);
CREATE TABLE `work`(
	`building_id` INT,
    FOREIGN KEY (building_id) REFERENCES `building`(ID),
    `worker_id` INT,
    FOREIGN KEY (worker_id) REFERENCES `worker`(ID),
    `date` DATE,
    `total` VARCHAR(45)
);

-- Bài 1 ss2
