-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR (255) NOT NULL,
  emails VARCHAR (255) NOT NULL,
  phone_numbers VARCHAR (255) NOT NULL,
  pass VARCHAR (255) NOT NULL,
  is_admin BOOLEAN
);

-- CREATE TABLE items (
--   id SERIAL PRIMARY KEY NOT NULL,
--    category_id ,
--    user_id ,

--    price VARCHAR (255) NOT NULL,
--     VARCHAR (255) NOT NULL,
--    image VARCHAR (255) NOT NULL,
--    create_date (timestamped?) NOT NULL,
--    description VARCHAR(255) NOT NULL,
--    stock VARCHAR(255) NOT NULL,
--    is_sold BOOLEAN
--    is_featured BOOLEAN
-- );

-- CREATE TABLE categories (
--   id SERIAL PRIMARY KEY NOT NULL,
--    names VARCHAR (255) NOT NULL,

-- );

-- CREATE TABLE messages (
--   id SERIAL PRIMARY KEY NOT NULL,
--    conversation_id
--    user_id
--    content(body) VARCHAR(255) NOT NULL,

-- )


