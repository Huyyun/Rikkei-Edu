-- Bài 2
CREATE DATABASE `Ex2_ss3DB`;
USE Ex2_ss3DB;
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

INSERT INTO `host` (`id`, `name`, `address`) VALUES
(1, 'so t mai du lich', '54 xo viet nghe tinh'),
(2, 'so van hoa thong tin', '101 hai ba trung'),
(3, 'so giao duc', '29 duong 3/2'),
(4, 'dai hoc can tho', '56 duong 30/4'),
(5, 'cty bitis', '29 phan dinh phung'),
(6, 'nguyen thanh ha', '45 de tham'),
(7, 'phan thanh liem', '48/6 huynh thuc khan');

INSERT INTO `contractor` (`id`, `name`, `address`, `contractor`) VALUES
(1, 'cty xd so 6', '5 phan chu trinh', 'contractor1'),
(2, 'phong dich vu so xd', '2 le van sy', 'contractor2'),
(3, 'le van son', '12 tran nhan ton', 'contractor3'),
(4, 'tran khai hoan', '20 nguyen thai hoc', 'contractor4');

INSERT INTO `worker` (`id`, `name`, `birthday`, `year`, `skill`) VALUES
(1, 'nguyen thi suu', 1945, 1960, 'ho'),
(2, 'vi chi a', 1966, 1987, 'moc'),
(3, 'le manh quoc', 1956, 1971, 'son'),
(4, 'vo van chin', 1940, 1952, 'dien'),
(5, 'le quyet thang', 1954, 1974, 'han'),
(6, 'nguyen hong van', 1950, 1970, 'dien'),
(7, 'dang van son', 1948, 1965, 'dien');

INSERT INTO `architect` (`id`, `name`, `birthday`, `sex`, `place`, `address`) VALUES
(1, 'le thanh tung', 1956-10-1, 1, 'tp hcm', '25 duong 3/2 tp bien hoa'),
(2, 'le kim dung', 1952-12-11, 0, 'ha noi', '18/5 phan van tri tp can tho'),
(3, 'nguyen anh thu', 1970-9-25, 0, 'new york', 'khu 2 dhct tp can tho'),
(4, 'nguyen song do quyen', 1970-6-5, 0, 'can tho', '73 tran hung dao tp hcm'),
(5, 'truong minh thai', 1950-4-3, 1, 'paris france', '12/2/5 tran phu tp hanoi');

INSERT INTO `building` (`id`, `name`, `address`, `city`, `cost`, `start`, `host_id`, `contractor_id`) VALUES
(1, 'khach san quoc te', '5 nguyen an ninh', 'can tho', 450, '1994-12-13', 1, 1),
(2, 'cong vien thieu nhi', '100 nguyen thai hoc	', 'can tho', 200, '1994-05-08', 2, 1),
(3, 'hoi cho nong nghiep', 'bai cat', 'vinh long', 1000, '1994-06-10', 1, 1),
(4, 'truong mg mang non', '48 cm thang 8', 'can tho', 30, '1994-07-10', 3, 3),
(5, 'khoa trong trot dhct', 'khu ii dhct	', 'can tho', 3000, '1994-06-19', 4, 3),
(6, 'van phong bitis', '25 phan dinh phung', 'ha noi', 40, '1994-05-10', 5, 3),
(7, 'nha rieng 1', '124/5 nguyen trai', 'tp hcm', 65, '1994-11-15', 6, 2),
(8, 'nha rieng 2', '76 chau van liem', 'ha noi', 200, '1994-06-09', 7, 4);

INSERT INTO `work` (`building_id`, `worker_id`, `date`, `total`) VALUES
(1, 1, '1994-12-15', 5),
(1, 3, '1994-12-18', 6),
(1, 6, '1994-09-14', 7),
(2, 1, '1994-05-08', 20),
(2, 4, '1994-05-10', 10),
(2, 5, '1994-12-16', 5),
(3, 4, '1994-10-06', 10),
(3, 7, '1994-10-06', 18),
(4, 1, '1994-09-07', 20),
(4, 6, '1994-05-12', 7);

INSERT INTO `design` (`building_id`, `architect_id`, `benefit`) VALUES
(1, 1, 25),
(1, 5, 12),
(2, 4, 6),
(3, 3, 12),
(4, 2, 20),
(5, 5, 30),
(6, 2, 40),
(6, 5, 27),
(7, 1, 10),
(8, 2, 18);

-- Bài 3
SELECT * FROM `architect`;
SELECT `name`, `sex` FROM `architect`;
SELECT DISTINCT YEAR(`birthday`) FROM `architect`;
SELECT `name`, `birthday` FROM `architect`
ORDER BY YEAR(`birthday`) ASC;
SELECT `name`, `birthday` FROM `architect`
ORDER BY YEAR(`birthday`) DESC;
SELECT `name`, `city`, `cost` FROM `building`
ORDER BY `cost` ASC, `city` ASC;

-- Bài 4
SELECT * FROM `architect`
WHERE `name` = 'le thanh tung';
SELECT `name`, `year` FROM `worker`
WHERE `skill` IN ('han', 'dien');
SELECT `name` FROM `worker`
WHERE `skill` IN ('han', 'dien') AND `birthday` > 1948;
SELECT * FROM `worker`
WHERE (`birthday` + 20) > `year`;
SELECT * FROM `worker`
WHERE `birthday` IN (1945, 1940, 1948);
SELECT * FROM `worker`
WHERE `birthday` = 1945 OR `birthday` = 1940 OR `birthday` = 1948;
SELECT * FROM `building`
WHERE `cost` BETWEEN 200 AND 500;
SELECT * FROM `building`
WHERE `cost` >= 200 AND `cost` <= 500;
SELECT * FROM `architect`
WHERE `name` LIKE 'Nguyen %';
SELECT * FROM `architect`
WHERE `name` LIKE '% Anh %';
SELECT * FROM `architect`
WHERE `name` LIKE 'Th___';
SELECT * FROM `contractor`
WHERE `contractor` IS NULL;