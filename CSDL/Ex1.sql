-- create database test;
use test;
create table books(
	BookID int PRIMARY KEY,
	title  varchar(255) NOT NULL,
    author varchar(255) NOT NULL,
    price decimal(10,2) NOT NULL,
    publicationDate date
);

SELECT * FROM books;

SELECT title, author FROM books WHERE price > 50;

-- drop table books;