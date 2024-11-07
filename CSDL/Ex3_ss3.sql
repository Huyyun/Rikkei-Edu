CREATE DATABASE `School3`;
USE School3;
CREATE TABLE `Students`(
	`StudentID` INT PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(100) NOT NULL,
    `Age` INT NOT NULL,
    `Major` VARCHAR(255) NOT NULL
);
INSERT INTO `Students` (`StudentID`, `Name`, `Age`, `Major`) VALUES
(1, 'Alice', 20, 'Computer Science'),
(2, 'Bob', 22, 'Mathematics'),
(3, 'Charlie', 21, 'Physics');
DELETE FROM `Students` 
WHERE `StudentID` = 1;