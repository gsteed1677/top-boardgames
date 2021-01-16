DROP DATABASE IF EXISTS topboardgames_DB;
CREATE database topboardgames_DB;

USE topboardgames_DB;

CREATE TABLE top100 (

  game VARCHAR NULL,
  players INT NULL ,
  rating INT NOT NULL,
  genre VARCHAR NULL
 
  

);

SELECT * FROM top100games;
