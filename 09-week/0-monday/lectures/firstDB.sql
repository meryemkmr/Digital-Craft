-- CREATE DATABASE secondDB;

-- CREATE TABLE student(
   
--     name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean
-- );

-- CREATE TABLE student2(
--    id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean
-- );

-- INSERT INTO student2 VALUES
--  (DEFAULT, 'Meryem', 'DifgitalCrafts.com','meryemkmr',5,'F','2020-03-09',FALSE),
--  (DEFAULT, 'Kazim', 'DifgitalCrafts.com','meryemkmr',5,'M','2020-03-09',FALSE),
--  (DEFAULT,'Alina','digitalcrafts.com','AlinaNBelova', 5,'F', '2020-03-09', FALSE),
-- (DEFAULT,'Sean','digitalcrafts.com','SeanPage', 5,'M', '2020-03-09', FALSE),
-- (DEFAULT,'Alex','digitalcrafts.com','AlexFisher', 5,'M', '2020-03-09', FALSE),
-- (DEFAULT,'Richard','digitalcrafts.com','RichardZ', 5,'M', '2020-03-09', FALSE),
-- (DEFAULT,'Kazim','digitalcrafts.com','Kazim', 5,'M', '2020-03-09', FALSE),
-- (DEFAULT,'Alex','digitalcrafts.com','AlexPlaezer', 5,'M', '2020-03-09', FALSE),
-- (DEFAULT,'Austin','digitalcrafts.com','Austin', 5,'M', '2020-03-09', FALSE),
-- (DEFAULT,'Foorkan','digitalcrafts.com','FoorkanTwin', 5,'M', '2020-03-09', FALSE);
-- (DEFAULT,‘Jaye’,‘digitalcrafts.com’,‘JayeJensen’, 5,'M', ‘2020-03-09’, FALSE),
-- (DEFAULT,‘John’,‘digitalcrafts.com’,‘JohnKearney’, 5,'M', ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Matthew’,‘digitalcrafts.com’,‘MatthewR’, 5,'M', ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Daniel’,‘digitalcrafts.com’,‘DanielD’, 5,'M', ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Diego’,‘digitalcrafts.com’,‘DiegoRivera’, 5,'M', ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Jesse’,‘digitalcrafts.com’,‘JesseM’, 5,'M', ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Meryem’,‘digitalcrafts.com’,‘Meryem’, 5,‘f’, ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Nicholas’,‘digitalcrafts.com’,‘Nwanochie’, 5,'M', ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Steven’,‘digitalcrafts.com’,‘StevenJ’, 5,'M', ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Daniela’,‘digitalcrafts.com’,‘DanielaA’, 5,‘f’, ‘2020-03-09’, FALSE),
-- (DEFAULT,‘Veronica’,‘digitalcrafts.com’,‘veronicalino2015’, 5,‘f’, ‘2020-03-09’, FALSE);



-- SELECT * FROM student2 WHERE gender= 'M'


-- INSERT INTO student2 (name, github_username)  VALUES('Josh','Marty');

 -- create
-- UPDATE student2 SET name = 'ayse' WHERE id = 9;


--delete

-- DELETE FROM student2 WHERE id = 5;

-- Delete values

-- CREATE TABLE student3 (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR,
--   github VARCHAR,
--   points INTEGER DEFAULT 0,
--   start_date DATE,
--   graduated BOOLEAN DEFAULT FALSE
-- );

-- INSERT INTO student3 (name,github) VALUES ('jason','epharim') 

-- SELECT name, github_username FROM student2 ;
-- SELECT name, github_username FROM student2 WHERE name = 'MERYEM';
-- SELECT name, github_username FROM student2 WHERE points> 50;
-- SELECT name, github_username FROM student2 WHERE name like '%Al%';
-- SELECT * FROM student2 WHERE name like '%Al%';

-- ALTER TABLE student2 ADD last_name varchar(15);
-- ALTER TABLE student2 DROP COLUMN  last_name;
-- ALTER TABLE student2 ALTER COLUMN  name TYPE varchar(15);

-- SELECT COUNT(*) FROM student2 WHERE name = 'meryem';

-- SELECT COUNT(*) FROM student2 WHERE name = 'meryem';