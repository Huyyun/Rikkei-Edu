CREATE DATABASE dev_data;
USE dev_data;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255),
    street VARCHAR(255),
    suite VARCHAR(255),
    city VARCHAR(255),
    zipcode VARCHAR(20),
    lat DECIMAL(10, 7),
    lng DECIMAL(10, 7),
    phone VARCHAR(50),
    website VARCHAR(255),
    company_name VARCHAR(255),
    company_catchphrase TEXT,
    company_bs TEXT,
    interests JSON
);

CREATE TABLE albums (
    id INT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE photos (
    id INT PRIMARY KEY,
    album_id INT,
    title VARCHAR(255),
    url VARCHAR(500),
    thumbnail_url VARCHAR(500),
    FOREIGN KEY (album_id) REFERENCES albums(id) ON DELETE CASCADE
);