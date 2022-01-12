create table public.conversations(
id serial primary key unique not null,
user_id int8,
item_id int8,
foreign key(item_id) references public.items(id),
foreign key(user_id) references public.users(id)	 
);