-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;

create table public.users (
  id serial primary key unique not null,
  user_name varchar(255) not null,
  email varchar not null,
  phone_number int8,
  "password" varchar not null,
  is_admin bool not null default false
);
