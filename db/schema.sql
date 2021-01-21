DROP DATABASE IF EXISTS top_boardgamesDB;
CREATE database top_boardgamesDB;


-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS blogger;
-- Creates the "blogger" database --
CREATE DATABASE blogger;


USE topboardgames_DB;
USE top_boardgamesDB;


CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	userName VARCHAR(20) UNIQUE NOT NULL,
  firstName VARCHAR(20),
	lastName VARCHAR(20),
  email VARCHAR(100),
	PRIMARY KEY (id)
);


CREATE TABLE top100 (

  game VARCHAR NULL,
  players INT NULL ,
  rating INT NOT NULL,
  genre VARCHAR NULL
 
  

);

SELECT * FROM top100games;


