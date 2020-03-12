CREATE TABLE categories (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(50)
);
INSERT INTO categories VALUES
    (DEFAULT, 'Javascript'),
    (DEFAULT, 'Bootstrap4'),
    (DEFAULT, 'Node.js'),
    (DEFAULT, 'CSS'),
    (DEFAULT, 'HTML6'),
    (DEFAULT, 'Express'),
    (DEFAULT, 'Python'),
    (DEFAULT, 'PostgreSQL'),
    (DEFAULT, 'React');
CREATE TABLE authors (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(100),
    biography varchar(500),
    imageURL varchar(300)
);
INSERT INTO authors VALUES
(DEFAULT, 'Meryem', 'lorem ipsum dolor my arm', 'https://avatars3.githubusercontent.com/u/58483106?s=460&v=4'),
(DEFAULT, 'Alina', 'lorem ipsum dolor my head', 'https://dfcby4322olzt.cloudfront.net/wp-content/uploads/2020/03/1800x1200_coronavirus_1.jpg'),
(DEFAULT, 'Kazim', 'lorem ipsum dolor my foot', 'https://www.rivcoph.org/portals/0/coronavirus-dark-1200x800.jpg?ver=2020-02-03-120239-703');
CREATE TABLE blogs (
    id SERIAL NOT NULL PRIMARY KEY,
    title varchar(50),
    author_id integer REFERENCES authors(id),
    category_id integer REFERENCES categories(id),
    body varchar(500),
    date_pub date
);