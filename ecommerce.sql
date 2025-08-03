-- sql commands used in this project

-- for creating db
CREATE DATABASE ecommerce;

-- Select db
USE ecommerce;

-- Create table products
CREATE TABLE products(
	id int PRIMARY KEY auto_increment,
	name varchar(255) NOT NULL,
    description text,
    price decimal(10,2) NOT NULL,
    discount decimal(10,2),
    stock int,
    brand varchar(100),
    thumbnail text NOT NULL,
    isActive boolean NOT NULL,
    created_at timestamp default current_timestamp,
    -- If we don't add ON UPDATE in the below column, 
    -- we'll need to update that field ourself every time, which can be error-prone.
    updated_at timestamp default current_timestamp ON UPDATE current_timestamp
); 

-- Created table for storing multiple images of a product
CREATE TABLE product_Images(
	id int PRIMARY KEY auto_increment ,
    product_id int NOT NULL,
    image_url text NOT Null,
    -- Used ON DELETE CASCADE to automatically remove images when the product is deleted
    foreign key (product_id) references products(id) ON DELETE CASCADE
);


-- Created table category for using it in the dropdown in form
CREATE TABLE category(
	id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp ON UPDATE current_timestamp
);


-- add column category_id in product table
alter table products
add column category_id INT NOT NULL;

-- alter column category to make it FOREIGN KEY
alter table products
add constraint fk_category
foreign key (category_id) references category(id)
ON DELETE CASCADE;


