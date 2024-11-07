CREATE DATABASE `School5`;
USE School5;
CREATE TABLE `Students`(
	`StudentID` INT PRIMARY KEY AUTO_INCREMENT,
    `StudentName` VARCHAR(50) NOT NULL,
    `Major` VARCHAR(50) NOT NULL
);
INSERT INTO `Students` (`StudentID`, `StudentName`, `Major`) VALUES
(1, 'Alice', 'Computer Science'),
(2, 'Bob', 'Mathematics'),
(3, 'Charlie', 'Physics'),
(4, 'Hyun', 'IT');

CREATE TABLE `Courses`(
	`CourseID` INT PRIMARY KEY AUTO_INCREMENT,
    `CourseName` VARCHAR(100) NOT NULL,
    `Instructor` VARCHAR(50) NOT NULL
);
INSERT INTO `Courses` (`CourseID`, `CourseName`, `Instructor`) VALUES
(1, 'IT', 'Johnny'),
(2, 'Computer Science', 'Yuri'),
(3, 'Physics', 'Deadpool');

UPDATE `Courses`
SET `CourseName` = 'Advanced Mathematics'
WHERE `CourseID` = 2;
UPDATE `Students`
SET `Major` = 'Engineering'
WHERE `StudentID` = 3;

DELETE FROM `Students` 
WHERE `StudentID` = 1;
DELETE FROM `Courses` 
WHERE `CourseID` = 3;

SELECT * FROM `Students`;
SELECT * FROM `Courses`;
