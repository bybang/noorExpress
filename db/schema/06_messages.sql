create table public.messages(
id serial primary key unique not null,
conversation_id int8,
user_id int8,
"content" varchar,
foreign key(conversation_id) references public.conversations(id),
foreign key(user_id) references public.users(id)	 
);