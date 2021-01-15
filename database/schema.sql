DROP DATABASE IF EXISTS top_boardgamesDB;
CREATE database top_boardgamesDB;

USE top_boardgamesDB;

CREATE TABLE top100 (
  rating INT NOT NULL,
  genre VARCHAR NULL,
  game VARCHAR NULL,
  players INT NULL,
  
);

SELECT * FROM top100;
