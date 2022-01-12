create table public.items (
id serial primary key unique not null,
category_id int8,
 user_id int8,
 price varchar,
 "name" varchar,
 image varchar,
 create_date timestamptz,
 description varchar,
 stock varchar,
 is_sold bool not null default false,
 is_featured bool not null default false,
 foreign key(category_id) references public.categories(id),
 foreign key(user_id) references public.users(id)
 on delete cascade
);
