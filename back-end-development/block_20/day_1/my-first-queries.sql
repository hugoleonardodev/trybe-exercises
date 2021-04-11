SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title, description, release_year FROM sakila.film;
SELECT CONCAT (first_name, last_name) FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
SELECT CONCAT(first_name, '   ', last_name) AS 'Nome Completo' FROM sakila.actor;
SELECT CONCAT(title, '  ', rental_rate) AS 'Classificação' FROM sakila.film;
SELECT CONCAT(title, '  ', rating) AS 'Classificação' FROM sakila.film;
SELECT CONCAT(address, ', ', district) AS 'Endereço' FROM sakila.address;
SELECT DISTINCT first_name FROM sakila.actor;
SELECT DISTINCT first_name, last_name FROM sakila.actor;
SELECT COUNT(first_name) FROM sakila.actor;
SELECT COUNT(DISTINCT first_name) FROM sakila.actor;
SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor;
SELECT COUNT(district) FROM sakila.address
WHERE district = 'Alberta';
SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;
SELECT * FROM sakila.address
ORDER BY address ASC;
SELECT * FROM sakila.address
ORDER BY address DESC;
SELECT * FROM sakila.film;
SELECT title AS 'Nome', release_year AS 'Ano de lançamento', rating AS 'Classificação' FROM sakila.film;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.customer;
SELECT ((SELECT COUNT(DISTINCT last_name) FROM sakila.actor) + (SELECT COUNT(DISTINCT last_name) FROM sakila.customer)) AS result;
SELECT COUNT(*) FROM sakila.film;
SELECT COUNT(*) FROM sakila.customer;
SELECT COUNT(DISTINCT last_name) FROM sakila.customer;
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
SELECT * FROM sakila.film;
SELECT title AS 'Nome', release_year AS 'Ano de lançamento', length AS 'Duração',
rating AS 'Classificação', replacement_cost AS 'Custo de substituição'
FROM sakila.film ORDER BY length DESC;
SELECT title AS 'Nome', release_year AS 'Ano de lançamento', length AS 'Duração',
rating AS 'Classificação', replacement_cost AS 'Custo de substituição'
FROM sakila.film ORDER BY replacement_cost ASC;