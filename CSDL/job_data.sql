CREATE DATABASE job_data;
USE job_data;


CREATE TABLE Companies (
    companyId INT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    logo VARCHAR(500) 
);

CREATE TABLE Jobs (
    jobId INT PRIMARY KEY,
    jobTitle VARCHAR(255) NOT NULL,
    jobDescription TEXT,
    jobRequirement TEXT,
    salaryMin INT,
    salaryMax INT,
    companyId INT,
    FOREIGN KEY (companyId) REFERENCES Companies(companyId)
);

-- Bảng lưu kỹ năng liên quan đến công việc
CREATE TABLE JobSkills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobId INT,
    skill VARCHAR(100),
    FOREIGN KEY (jobId) REFERENCES Jobs(jobId)
);

-- Bảng lưu danh mục công việc
CREATE TABLE JobCategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobId INT,
    category VARCHAR(100),
    FOREIGN KEY (jobId) REFERENCES Jobs(jobId)
);

CREATE TABLE JobLocations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobId INT,
    location VARCHAR(100),
    FOREIGN KEY (jobId) REFERENCES Jobs(jobId)
);

CREATE TABLE JobBenefits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobId INT,
    benefitName VARCHAR(255),
    benefitValue TEXT,
    FOREIGN KEY (jobId) REFERENCES Jobs(jobId)
);

-- Insert into Companies
INSERT INTO Companies (companyId, `name`, logo) VALUES
(1, 'FPT Software', 'https://fpt.com.vn/logo.png'),
(2, 'Viettel Group', 'https://viettel.vn/logo.png'),
(3, 'VNG Corporation', 'https://vng.com.vn/logo.png');

-- Insert into Jobs
INSERT INTO Jobs (jobId, jobTitle, jobDescription, jobRequirement, salaryMin, salaryMax, companyId) VALUES
(101, 'Backend Developer', 'Develop backend services for web apps', 'Experience with Java and Spring Boot', 1000, 2000, 1),
(102, 'Frontend Developer', 'Implement user interfaces for web applications', 'HTML, CSS, JavaScript, ReactJS', 900, 1800, 2),
(103, 'Mobile Developer', 'Build and maintain mobile apps', 'Flutter or React Native experience', 1200, 2200, 3);

-- Insert into JobSkills
INSERT INTO JobSkills (jobId, skill) VALUES
(101, 'Java'),
(101, 'Spring Boot'),
(102, 'JavaScript'),
(102, 'ReactJS'),
(103, 'Flutter'),
(103, 'React Native');

-- Insert into JobCategories
INSERT INTO JobCategories (jobId, category) VALUES
(101, 'IT Software'),
(102, 'Web Development'),
(103, 'Mobile Development');

-- Insert into JobLocations
INSERT INTO JobLocations (jobId, location) VALUES
(101, 'Hanoi'),
(102, 'Ho Chi Minh City'),
(103, 'Da Nang');

-- Insert into JobBenefits
INSERT INTO JobBenefits (jobId, benefitName, benefitValue) VALUES
(101, 'Health Insurance', 'Full health coverage'),
(101, 'Flexible Hours', 'Remote work and flexible hours'),
(102, 'Training', 'Annual skill development courses'),
(103, 'Bonus', 'Performance-based annual bonus');