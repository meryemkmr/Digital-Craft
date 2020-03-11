CREATE TABLE categories(
    id SERIAL  NOT NULL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO categories VALUES
(DEFAULT, 'Thai'),
(DEFAULT, 'BBQ'),
(DEFAULT, 'Ethiopian'),
(DEFAULT, 'Greek'),
(DEFAULT, 'Italian'),
(DEFAULT, 'German'),
(DEFAULT, 'American'),
(DEFAULT, 'Chinese'),
(DEFAULT, 'Lebanese'),
(DEFAULT, 'Syrian'),
(DEFAULT, 'Mexican');

CREATE TABLE restaurants(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100),
    category integer REFERENCES categories(id),
    foodDescription varchar(300),
    price integer,
    course varchar(50),
    imageURL varchar(150)
);

-- INSERT INTO restaurants VALUES
-- (DEFAULT, 'Fajitas', 11),
-- (DEFAULT, 'Pad Kee Mao', 1),
-- (DEFAULT, 'Pulled Pork', 2),
-- (DEFAULT, 'Shiro Wett', 3),
-- (DEFAULT, 'Gyro', 4),
-- (DEFAULT, 'Pizza', 5),
-- (DEFAULT, 'Brat Worst', 6),
-- (DEFAULT, 'Hamburger', 7),
-- (DEFAULT, 'Orange Chicken', 8),
-- (DEFAULT, 'Kabob', 9),
-- (DEFAULT, 'Tabuleh', 10);
