USE sql_qlct;
SELECT * FROM architect;
SELECT * FROM building;
SELECT * FROM contractor;

-- Tao ra mot thu tuc truy van toan bo kien truc su co gioi tinh la nam
DELIMITER $$

CREATE PROCEDURE GetArchitect()
BEGIN
	SELECT * FROM architect
    WHERE sex = 1;
END$$
DELIMITER ;

CALL GetArchitect();

-- Tao 1 thu tuc lay toan bo thong tin ve cac building dc thiet ke boi cac kien truc su nu (0) architect, design, building
DELIMITER $$

CREATE PROCEDURE GetBuilding()
BEGIN
	SELECT b.*, a.sex FROM design d 
    INNER JOIN building b ON b.id = d.building_id
    INNER JOIN architect a ON a.id = d.architect_id
    WHERE a.sex = 0;
END$$
DELIMITER ;
DROP PROCEDURE GetBuilding;
CALL GetBuilding();

-- User_defind variable (Bien nguoi dung)
SET @gender = 1;
SELECT @gender;

DELIMITER $$
CREATE PROCEDURE GetBuilding()
BEGIN
	SELECT b.*, a.sex FROM design d 
    INNER JOIN building b ON b.id = d.building_id
    INNER JOIN architect a ON a.id = d.architect_id
    WHERE a.sex = @gender;
END$$
DELIMITER ;
DROP PROCEDURE GetBuilding;
CALL GetBuilding();

-- Local variable (Bien cuc bo)
-- Viet thu tuc tinh tong toan bo benefit ma cac architect nam da kiem dc
-- tao 1 bien local co gia tri voi gioi tinh nam
DELIMITER $$

CREATE PROCEDURE GetBenefit()
BEGIN
	DECLARE male INT DEFAULT 1;
	SELECT a.name, a.sex, SUM(d.benefit) FROM architect a
    INNER JOIN design d ON d.architect_id = a.id
    GROUP BY a.id, a.name
    HAVING sex = male;
END$$
DELIMITER ;.

DROP PROCEDURE GetBenefit;
CALL GetBenefit();

-- SET 
-- SELECT ... INTO

-- 