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
-- Hiển thị thông tin công trình có chi phí cao nhất
SELECT * FROM building
WHERE cost = (
	SELECT MAX(cost) FROM building
);

-- Hiển thị thông tin công trình có chi phí lớn hơn tất cả các công trình được xây dựng ở Cần Thơ
SELECT * FROM building
WHERE cost > ALL (
	SELECT cost FROM building
	WHERE city = 'can tho'
);

-- Hiển thị thông tin công trình có chi phí lớn hơn một trong các công trình được xây dựng ở Cần Thơ
SELECT * FROM building
WHERE cost > ANY (
	SELECT cost FROM building
	WHERE city = 'can tho'
);

-- Hiển thị thông tin công trình chưa có kiến trúc sư thiết kế
SELECT * FROM building
WHERE id NOT IN (
	SELECT DISTINCT building_id FROM design
);

-- Hiển thị thông tin các kiến trúc sư cùng năm sinh và cùng nơi tốt nghiệp

-- Bài 4
-- Hiển thị thù lao trung bình của từng kiến trúc sư
SELECT architect_id, AVG(benefit) FROM design
GROUP BY architect_id
ORDER BY architect_id;

-- Hiển thị chi phí đầu tư cho các công trình ở mỗi thành phố
SELECT city, sum(cost) FROM building
GROUP BY city;

-- Tìm các công trình có chi phí trả cho kiến trúc sư lớn hơn 50
SELECT * FROM design d
INNER JOIN building b ON b.id = d.building_id
HAVING benefit > 50;

-- Tìm các thành phố có ít nhất một kiến trúc sư tốt nghiệp

-- Bài 5
-- Hiển thị tên công trình, tên chủ nhân và tên chủ thầu của công trình đó
SELECT b.name AS `Building Name`, h.name AS `Host Name`, c.name AS `Contractor Name` 
FROM building b
INNER JOIN host h ON h.id = b.host_id
INNER JOIN contractor c ON c.id = b.contractor_id;

-- Hiển thị tên công trình (building), tên kiến trúc sư (architect) và thù lao của kiến trúc sư ở mỗi công trình (design)
SELECT b.name AS `Building Name`, a.name AS `Architect Name`, d.benefit AS `Benefit`
FROM design d
INNER JOIN building b ON b.id = d.building_id
INNER JOIN architect a ON a.id = d.architect_id;

-- Hãy cho biết tên và địa chỉ công trình (building) do chủ thầu Công ty xây dựng số 6 thi công (contractor)
SELECT b.name AS `Building Name`, b.address AS `Building Address`, c.name AS `Contractor Name` 
FROM building b
INNER JOIN contractor c ON c.id = b.contractor_id
HAVING c.name =  'cty xd so 6';

-- Tìm tên và địa chỉ liên lạc của các chủ thầu (contractor) thi công công trình ở Cần Thơ (building) do kiến trúc sư Lê Kim Dung thiết kế (architect, design)
SELECT c.name AS `Contractor Name`, c.address AS `Contractor Address`, b.city AS `Building City`
FROM building b
INNER JOIN contractor c ON c.id = b.contractor_id
HAVING b.city = 'can tho';

-- Hãy cho biết nơi tốt nghiệp của các kiến trúc sư (architect) đã thiết kế (design) công trình Khách Sạn Quốc Tế ở Cần Thơ (building)
SELECT a.name AS `Architect Name`, a.place AS `Architect place`, b.name AS `Building Name`, b.city AS `Building City`
FROM design d
INNER JOIN architect a ON a.id = d.architect_id
INNER JOIN building b ON b.id = d.building_id
HAVING b.name = 'khach san quoc te';

-- Cho biết họ tên, năm sinh, năm vào nghề của các công nhân có chuyên môn hàn hoặc điện (worker) đã tham gia các công trình (work) mà chủ thầu Lê Văn Sơn (contractor) đã trúng thầu (building)
SELECT wr.name AS `Worker Name`, wr.birthday AS `Worker Birthday`, wr.year AS `Worker Year`, wr.skill AS `Worker Skill`, c.name AS `Cotractor Name`, b.name AS `Building Name`
FROM work w 
INNER JOIN worker wr ON wr.id = w.worker_id
INNER JOIN building b ON b.id = w.building_id
INNER JOIN contractor c ON c.id = b.contractor_id
HAVING (wr.skill = 'han' OR wr.skill = 'dien') AND c.name = 'le van son';

-- Những công nhân nào (worker) đã bắt đầu tham gia công trình Khách sạn Quốc Tế ở Cần Thơ (building) trong giai đoạn từ ngày 15/12/1994 đến 31/12/1994 (work) số ngày tương ứng là bao nhiêu
SELECT wr.name AS `Worker Name`, b.name AS `Building Name`, b.city AS `Building City`, w.date AS `Work Date`
FROM work w
INNER JOIN worker wr ON wr.id = w.worker_id
INNER JOIN building b ON b.id = w.building_id
HAVING b.name = 'khach san quoc te' AND w.date IN ('1994-12-15', '1994-12-31');

-- Cho biết họ tên và năm sinh của các kiến trúc sư đã tốt nghiệp ở TP Hồ Chí Minh (architect) và đã thiết kế ít nhất một công trình (design) có kinh phí đầu tư trên 400 triệu đồng (building)
SELECT a.name AS `Architect Name`, a.birthday AS `Architect Birthday`, a.place AS `Architect place`, b.cost
FROM design d
INNER JOIN building b ON b.id = d.building_id
INNER JOIN architect a ON a.id = d.architect_id
HAVING cost > 400;

-- Cho biết tên công trình có kinh phí cao nhất
SELECT name, MAX(cost) AS `cost` FROM building;

-- Cho biết tên các kiến trúc sư (architect) vừa thiết kế các công trình (design) do Phòng dịch vụ sở xây dựng (contractor) thi công vừa thiết kế các công trình do chủ thầu Lê Văn Sơn thi công
SELECT a.name AS `Architect Name`, c.name AS `Contractor Name`, b.name AS `Building Name`
FROM design d
INNER JOIN architect a ON a.id = d.architect_id
INNER JOIN building b ON b.id = d.building_id
INNER JOIN contractor c ON c.id = b.contractor_id
HAVING c.name = 'phong dich vu so xd' OR c.name = 'le van son';

-- Cho biết họ tên các công nhân (worker) có tham gia (work) các công trình ở Cần Thơ (building) nhưng không có tham gia công trình ở Vĩnh Long
SELECT wr.name, b.city
FROM work w
INNER JOIN worker wr ON wr.id = w.worker_id
INNER JOIN building b ON b.id = w.building_id
HAVING b.city = 'can tho';

-- Cho biết tên của các chủ thầu đã thi công các công trình có kinh phí lớn hơn tất cả các công trình do chủ thầu phòng Dịch vụ Sở xây dựng thi công
SELECT c.name AS `Contractor Name`, b.name AS `Building Name` , b.cost
FROM building b
INNER JOIN contractor c ON c.id = b.contractor_id
HAVING b.cost > (SELECT b2.cost FROM building b2
				INNER JOIN contractor c ON c.id = b2.contractor_id
                WHERE c.name = 'phong dich vu so xd');
                
-- Cho biết họ tên các kiến trúc sư có thù lao thiết kế một công trình nào đó dưới giá trị trung bình thù lao thiết kế cho một công trình
SELECT a.name AS `Architect Name`, d.benefit
FROM design d
INNER JOIN architect a ON a.id = d.architect_id
HAVING d.benefit < (SELECT AVG(benefit) FROM design);

-- Tìm tên và địa chỉ những chủ thầu đã trúng thầu công trình có kinh phí thấp nhất
SELECT c.name AS `Contractor Name`, MIN(b.cost) AS `Building Cost`
FROM building b
INNER JOIN contractor c ON c.id = b.contractor_id

-- Tìm họ tên và chuyên môn của các công nhân (worker) tham gia (work) các công trình do kiến trúc sư Le Thanh Tung thiet ke (architect) (design)
SELECT 
	wr.name AS `Worker Name`, 
    wr.skill, 
    b.name AS `Building Name`,
    a.name AS `Architect Name` 
FROM work w
INNER JOIN worker wr ON wr.id = w.worker_id
INNER JOIN building b ON b.id = w.building_id
INNER JOIN design d ON d.building_id = b.id
INNER JOIN architect a ON a.id = d.architect_id
HAVING `Architect Name` = 'Le Thanh Tung';

-- Tìm các cặp tên của chủ thầu có trúng thầu các công trình tại cùng một thành phố
SELECT 
	c1.name AS `Contractor 1`,
    c2.name AS `Contractor 2`,
    b1.city AS `City`
FROM building b1
INNER JOIN building b2 ON b1.city = b2.city AND b1.id < b2.id
INNER JOIN contractor c1 ON c1.id = b1.contractor_id
INNER JOIN contractor c2 ON c2.id = b2.contractor_id
WHERE c1.id < c2.id;

-- Tìm tổng kinh phí của tất cả các công trình theo từng chủ thầu
SELECT c.name AS `Contractor Name`, SUM(b.cost) AS `Total`
FROM building b
INNER JOIN contractor c ON c.id = b.contractor_id
GROUP BY b.contractor_id;

-- Cho biết họ tên các kiến trúc sư có tổng thù lao thiết kế các công trình lớn hơn 25 triệu
SELECT a.name AS `Architect Name`, SUM(d.benefit) AS `Total`
FROM design d
INNER JOIN architect a ON a.id = d.architect_id
GROUP BY d.architect_id
HAVING `Total` > 25;

-- Cho biết số lượng các kiến trúc sư có tổng thù lao thiết kế các công trình lớn hơn 25 triệu
SELECT COUNT(*) AS `Architect Number`
FROM (
	SELECT d.architect_id
	FROM design d
	GROUP BY d.architect_id
	HAVING SUM(d.benefit) > 25
) AS high_earning_architects;

-- Tìm tổng số công nhân đã than gia ở mỗi công trình
SELECT COUNT(w.worker_id) AS `Worker Number`, b.name AS `Building Name`
FROM work w
INNER JOIN building b ON b.id = w.building_id
GROUP BY w.building_id;

-- Tìm tên và địa chỉ công trình có tổng số công nhân tham gia nhiều nhất
SELECT b.name AS `Building Name`, b.address AS `Building Address`, COUNT(w.worker_id) AS `Total Worker Number`
FROM work w
INNER JOIN building b ON b.id = w.building_id
INNER JOIN worker wr ON wr.id = w.worker_id
GROUP BY w.building_id
HAVING COUNT(w.worker_id) = (
    SELECT MAX(worker_count)
    FROM (
        SELECT COUNT(w.worker_id) AS worker_count
        FROM work w
        GROUP BY w.building_id
    ) AS highest_worker
);

-- Cho biêt tên các thành phố và kinh phí trung bình cho mỗi công trình của từng thành phố tương ứng
SELECT b.city, AVG(b.cost) AS `AVG Cost`
FROM building b
GROUP BY b.city

-- Cho biết họ tên các công nhân có tổng số ngày tham gia vào các công trình lớn hơn tổng số ngày tham gia của công nhân Nguyễn Hồng Vân

-- Cho biết tổng số công trình mà mỗi chủ thầu đã thi công tại mỗi thành phố
SELECT c.name AS `Contractor Name`, COUNT(b.id) AS `Building Number`
FROM building b
INNER JOIN contractor c ON c.id = b.contractor_id
GROUP BY  b.contractor_id;

-- Cho biết họ tên công nhân có tham gia ở tất cả các công trình
SELECT wr.name 
FROM work w
INNER JOIN worker wr ON wr.id = w.worker_id
GROUP BY w.worker_id
HAVING COUNT(DISTINCT w.building_id) = (SELECT COUNT(*) FROM building);