CREATE TABLE sim_products(
id SERIAL PRIMARY KEY,
name varchar(25),
price int,
img text
)


INSERT INTO sim_products (name, price, img)
VALUES
('Jacket', 95, 'https://images-na.ssl-images-amazon.com/images/I/81E5qr9XlLL._UX466_.jpg'),
('Pants', 50, 'https://offthegridsurplus.com/wp-content/uploads/Trailblazer-3.0-Pants-Pavement-Model-Front-OFF-THE-GRID.jpg'),
('Shrek 2 on VHS', 19,'https://i.ebayimg.com/images/g/jt4AAOSw5cNYkNtd/s-l300.jpg'),
('Anduril',1,'https://www.otakuninjahero.com/image/cache/catalog/Katana/KAT0163-1-600x600.jpg'),
('Galadriel',1,'https://i.stack.imgur.com/neV57.jpg'),
('And my axe!',1, 'https://4044e4d9bb28f4ab5984-baf8685aca841b756e5db60ffa6ae05f.ssl.cf2.rackcdn.com/product_images/p/182/12043__1514320034__1514320035_zoom.jpg')