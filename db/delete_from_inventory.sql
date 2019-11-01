DELETE FROM sim_products
WHERE id = ${id} ;
RETURNING *;