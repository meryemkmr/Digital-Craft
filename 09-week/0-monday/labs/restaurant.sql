

-- CREATE TABLE restaurantHouston (
--     id serial primary key,
--     name varchar,
--     distance integer,
--     stars integer DEFAULT 0 CHECK (stars>=0 AND stars<=5),
--     category varchar(15),
--     favorite_dish varchar,
--     takeout  boolean DEFAULT FALSE,
--     lastVisit Integer CHECK (lastVisit >=0) 
-- );

-- INSERT INTO restaurantHouston VALUES
--  (DEFAULT, 'Crisp Doner Café', 2,5,'Mediterranean','Doner',FALSE,'2020-03-09'),
--  (DEFAULT, 'Jimmys Buffet', 3, 1, 'American', 'Fried Shrimp', FALSE,'2020-03-09'),
--  (DEFAULT, 'Steller Stump', 2, 5, 'Greek', 'Hummus', TRUE, '2020-03-09'),
--  (DEFAULT, 'Groovey Grub', 1, 4, 'Cajun', 'Blackened Catfish', TRUE, '2020-03-09'),
--  (DEFAULT, 'City Wok', 4, 5, 'Chinese', 'City Chicken', FALSE, '2020-03-09'),
--  (DEFAULT, 'Dungeonous Takeaway', 5, 1, 'Steakhouse', 'Surf And Turf', TRUE, '2020-03-09'),
-- (DEFAULT, 'Ollies BBQ', 5, 5, 'BBQ', 'Brisket', TRUE, '2020-03-09'),
-- (DEFAULT, 'Coltivare', 3, 5, 'American', 'Chicken Pizza', TRUE, '2020-03-09'),
-- (DEFAULT, 'Curly', 5, 3, 'Mexican', 'Enchiladas', TRUE, '2020-03-09'),
-- (DEFAULT, 'Umbrella', 4, 3, 'Chinese', 'Egg Rolls', TRUE, '2020-03-09'),
-- (DEFAULT, 'Dino', 2, 2, 'BBQ', 'Ribs', TRUE, '2020-03-09');


--    Writing Queries

-- 1.The names of the restaurants that you gave a 5 stars to


-- SELECT name  FROM restaurantHouston WHERE stars =5;

-- 2.The favorite dishes of all 5-star restaurants

-- SELECT favorite_dish   FROM restaurantHouston WHERE stars =5;

--3.The the id of a restaurant by a specific restaurant name, say 'Moon Tower'
 
-- SELECT id FROM restaurantHouston WHERE name='Crisp Doner Café';


--4.restaurants in the category of 'BBQ'

-- SELECT  category FROM restaurantHouston WHERE category ='BBQ';

--5.restaurants that do take out


--  SELECT * FROM restaurantHouston WHERE takeout = TRUE;



-- 6.restaurants that do take out and is in the category of 'BBQ'
-- SELECT * FROM restaurantHouston WHERE takeout = TRUE AND category = 'BBQ';



--7.restaurants within 2 miles
-- SELECT * FROM restaurantHouston WHERE distance <= 2;

--8. restaurants you haven't ate at in the last week

--  SELECT * FROM restaurantHouston WHERE lastVisit = '2020-03-09';

--9.restaurants you haven't ate at in the last week and has 5 stars
--  SELECT * FROM restaurantHouston WHERE lastVisit = '2020-03-09' AND stars = 5;






--       Aggregation and Sorting Queries


-- 1.list restaurants by the closest distance.


--  SELECT * FROM restaurantHouston ORDER BY distance;


-- 2.list the top 2 restaurants by distance

--  SELECT * FROM restaurantHouston ORDER BY distance LIMIT 2;



-- 3. list the top 2 restaurants by stars


--  SELECT * FROM restaurantHouston ORDER BY stars  DESC LIMIT 2;


-- 4.list the top 2 restaurants by stars where the distance is less than 2 miles.


 
-- SELECT * FROM restaurantHouston WHERE distance < 2 ORDER BY stars DESC LIMIT 2;

-- 5. count the number of restaurants in the db

-- SELECT COUNT(*) FROM restaurantHouston;


-- 6.count the number of restaurants by category.

-- SELECT COUNT(*) FROM restaurantHouston WHERE category = 'Mediterranean';


-- 7. get the average stars per restaurant by category

-- SELECT AVG(stars) FROM restaurantHouston WHERE category = 'American';

-- 8. get the max stars of a restaurant by category.

-- SELECT MAX(stars) FROM restaurantHouston WHERE category = 'American';




-- ALTER TABLE restaurant DROP COLUMN last_visit;
-- ALTER TABLE restaurant ADD lastVisit Integer;

-- UPDATE restaurant SET lastVisit = 100;
-- DELETE FROM restaurant WHERE id = 54;
-- DELETE FROM restaurant WHERE id = 55;
-- DELETE FROM restaurant WHERE id = 56;
-- DELETE FROM restaurant WHERE id = 57;
-- DELETE FROM restaurant WHERE id = 58;
-- DELETE FROM restaurant WHERE id = 59;
-- DELETE FROM restaurant WHERE id = 60;
-- DELETE FROM restaurant WHERE id = 61;
-- DELETE FROM restaurant WHERE id = 62;
-- DELETE FROM restaurant WHERE id = 63;
-- DELETE FROM restaurant WHERE id = 64;

-- ALTER TABLE restaurantHouston DROP COLUMN lastVisit;
-- ALTER TABLE restaurantHouston ADD lastVisit DATE;



