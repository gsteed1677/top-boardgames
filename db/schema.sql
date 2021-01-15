DROP DATABASE IF EXISTS top_boardgamesDB;
CREATE database top_boardgamesDB;

USE top_boardgamesDB;

CREATE TABLE top100 (
  position INT NOT NULL,
  genre VARCHAR(100) NULL,
  game VARCHAR(100) NULL,
  players INT,
  
);

SELECT * FROM top100;
