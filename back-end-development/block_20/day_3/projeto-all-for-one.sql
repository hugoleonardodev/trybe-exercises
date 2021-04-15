SELECT product_name FROM northwind.products;
SELECT * FROM northwind.products;
SELECT id FROM northwind.products;
SELECT COUNT(product_name) FROM northwind.products;
SELECT * from northwind.products LIMIT 10 OFFSET 3;
SELECT id, product_name FROM northwind.products ORDER BY product_name ASC;
SELECT id from northwind.products ORDER BY id DESC LIMIT 5;
SELECT ((SELECT 5)+(SELECT 6)) AS 'A', 'de' AS 'Trybe', 10 AS 'eh';

SELECT notes FROM northwind.purchase_orders WHERE notes IS NOT null;
SELECT * FROM northwind.purchase_orders WHERE created_by >= 3 ORDER BY created_by DESC, id ASC;
SELECT notes FROM northwind.purchase_orders WHERE SUBSTRING_INDEX(notes, ' ', -1) LIKE '#3%';
SELECT submitted_date FROM northwind.purchase_orders WHERE submitted_date LIKE '2006-04-26%';
SELECT supplier_id FROM northwind.purchase_orders WHERE supplier_id = 1 OR supplier_id = 3;
SELECT supplier_id FROM northwind.purchase_orders WHERE supplier_id BETWEEN 1 AND 3;
SELECT HOUR(submitted_date) FROM northwind.purchase_orders;
SELECT submitted_date FROM northwind.purchase_orders WHERE submitted_date BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';
SELECT id, supplier_id FROM northwind.purchase_orders WHERE supplier_id = 1 OR supplier_id = 3 OR supplier_id = 5 OR supplier_id = 7;
SELECT * FROM northwind.purchase_orders WHERE supplier_id = 3 AND status_id = 2;
SELECT COUNT(id) AS 'orders_count' FROM northwind.orders WHERE employee_id = 5 OR employee_id = 6 AND shipper_id = 2;

SELECT * FROM northwind.order_details;
INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id) VALUES(69, 80, 15.000, 15.000, 0, 2, null, null, 129);

UPDATE northwind.order_details SET discount = 15;
UPDATE northwind.order_details SET discount = 30 WHERE unit_price < 10.000;
UPDATE northwind.order_details SET discount = 45 WHERE unit_price > 10.000 AND id BETWEEN 30 AND 40;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM northwind.order_details WHERE unit_price < 10.000;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM northwind.order_details WHERE unit_price > 10.000;
TRUNCATE northwind.order_details;