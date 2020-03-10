-- CREATE TABLE author(
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );
-- CREATE TABLE articles (
--     id SERIAL PRIMARY KEY,
--     title varchar(150),
--     author_id integer REFERENCES author(id) 
-- );
-- INSERT INTO author VALUES
-- (DEFAULT, 'Alex F.'),
-- (DEFAULT, 'Alina B.'),
-- (DEFAULT, 'Kazim S.'),
-- (DEFAULT, 'Meryem K.'),
-- (DEFAULT, 'Diego'),
-- (DEFAULT, 'Foorkan K.'),
-- (DEFAULT, 'Jesse'),
-- (DEFAULT, 'John'),
-- (DEFAULT, 'Matt'),
-- (DEFAULT, 'Austin'),
-- (DEFAULT, 'Steven'),
-- (DEFAULT, 'Daniel'),
-- (DEFAULT, 'Alex P.'),
-- (DEFAULT, 'Jaye'),
-- (DEFAULT, 'Sean'),
-- (DEFAULT, 'Nich');

-- INSERT INTO articles VALUES 
-- (DEFAULT, 'JS Prototypes', 88),
-- (DEFAULT, 'JS Promises', 8),
-- (DEFAULT, 'Express Routes', 1),
-- (DEFAULT, 'Styling with Bootstrap 4', 4),
-- (DEFAULT, 'API calls with Google Maps', 8),
-- (DEFAULT, 'Python RPG Game', 10),
-- (DEFAULT, 'Object Oriented Programming in Javascript', 11),
-- (DEFAULT, 'Nested For Loops', 12),
-- (DEFAULT, 'Preparing for Technical Interviews', 12),
-- (DEFAULT, 'Why I went to a coding camp', 14),
-- (DEFAULT, 'Coding in Russian', 2),
-- (DEFAULT, 'Fizz Buzz - The Solution', 3);



-- SELECT * FROM author INNER JOIN articles
--  ON author.id = articles.author_id;

--  SELECT author.id as authorID,  count(author.id) 
--  FROM author INNER JOIN articles
--  ON author.id = articles.author_id
--  GROUP BY
--  author.id;



-- SELECT author.id, name, title  
--  FROM author
--  INNER JOIN articles
--  ON 
--  author.id = articles.author_id
--  WHERE
--  author.id = 4;

-- SELECT author.id, name, title  
--  FROM 
--     author
--  LEFT OUTER JOIN 
--     articles
--  ON 
--     author.id = articles.author_id
 


--  INSERT INTO articles VALUES 
-- (DEFAULT, 'Test article', 88);



