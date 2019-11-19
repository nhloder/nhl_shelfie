UPDATE sim_products
SET name = ${name},
price = ${price},
img = ${img}
WHERE id = ${id};

-- SELECT * FROM sim_products
-- ORDER BY id;