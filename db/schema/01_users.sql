-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
 name username VARCHAR (255) NOT NULL,
 name emails VARCHAR (255) NOT NULL,
 name phone_numbers VARCHAR (255) NOT NULL,
 name pass VARCHAR (255) NOT NULL,
 name is_admin BOOLEAN
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name category_id ,
  name user_id ,

  name price VARCHAR (255) NOT NULL,
  name name VARCHAR (255) NOT NULL,
  name image VARCHAR (255) NOT NULL,
  name create_date (timestamped?) NOT NULL,
  name description VARCHAR(255) NOT NULL,
  name stock VARCHAR(255) NOT NULL,
  name is_sold BOOLEAN
  name is_featured BOOLEAN
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name names VARCHAR (255) NOT NULL,

);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  name conversation_id
  name user_id
  name content(body) VARCHAR(255) NOT NULL,

)


