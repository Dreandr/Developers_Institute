CREATE TABLE students (
     id SERIAL PRIMARY KEY,
     last_name varchar(255) NOT NULL,
     first_name varchar(255),
     birth_date DATE);
-- INSERT INTO students(first_name, last_name,birth_date) VALUES ('Marc', 'Dupont', '1988-11-02');
INSERT INTO students(first_name, last_name,birth_date) VALUES ('Yoan', 'Durant', '2010-03-12');
INSERT INTO students(first_name, last_name,birth_date) VALUES ('Lea', 'Martin', '1987-07-24');
INSERT INTO students(first_name, last_name,birth_date) VALUES ('Sarah', 'Benichou', '1996-04-07');
INSERT INTO students(first_name, last_name,birth_date) VALUES ('lea', 'Dupont', '2003-06-14');
INSERT INTO students(first_name, last_name,birth_date) VALUES ('Omer', 'Simpson', '1980-03-10');
INSERT INTO students(first_name, last_name,birth_date) VALUES ('Leah', 'Khor', '1992-10-14');
INSERT INTO students (first_name, last_name,birth_date) VALUES
    ('Elton', 'Cheese', '1942-04-24'),
    ('Two', 'Bee', '1998-06-29');
SELECT first_name, last_name FROM students;
SELECT first_name, last_name FROM students WHERE id = 2;
SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Dupont';
SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Dupont';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
SELECT first_name, last_name FROM students WHERE first_name LIKE '_%a%';
SELECT first_name, last_name FROM students WHERE id IN (1,3);
SELECT first_name, last_name FROM students WHERE birth_date >= '2000-01-01';





