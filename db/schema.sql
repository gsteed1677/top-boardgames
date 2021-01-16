DROP DATABASE IF EXISTS top_boardgamesDB;
CREATE database top_boardgamesDB;

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
  rating INT NOT NULL,
  genre VARCHAR NULL,
  game VARCHAR NULL,
  players INT NULL

);

SELECT * FROM top100;
