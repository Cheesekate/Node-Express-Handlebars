DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE USER 'root'@'localhost' 
;

grant all privileges on *.* to 'root'@'localhost' with grant option;


ALTER USER 'root'@'localhost' 
IDENTIFIED WITH mysql_native_password 
BY 'password';

flush privileges;



CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgers_name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burgers_name)
VALUES ('burger'), ('cheeseburger'), ('veggie burger');

