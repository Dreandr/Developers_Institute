ALTER TABLE film
ADD language_name varchar(255);
UPDATE film
SET language_name = name 
FROM language 
WHERE film.language_id = language.language_id;
SELECT title, description, language_name from film;

SELECT COUNT(title), rating FROM film GROUP BY rating;
SELECT title, length, rental_rate, rating FROM film 
WHERE (length < 120 AND rental_rate < 3) AND (rating = 'G' OR rating = 'PG-13') ORDER BY title;

UPDATE customer
set first_name = 'Denis', last_name = 'Khoronenko' WHERE customer_id = 15;
UPDATE address 
set address = 'Wonderland, House 17, Apartment 28', district = 'Alice County', city_id = 8, postal_code = 12345
FROM customer
WHERE address.address_id = customer.address_id AND customer.customer_id = 15;
SELECT * FROM address WHERE address = 'Wonderland, House 17, Apartment 28'
