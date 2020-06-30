
Drop table user_data;
CREATE TABLE user_data (
user_id SERIAL PRIMARY KEY,
email VARCHAR(50),
hash text,
Phone VARCHAR(15),
created date not null default current_date
constraint "user_data_pk" primary key ("user_id")

)with ( oids=false) 


insert into user_data ( email,hash,phone)
values('rico@gmail.com','hash','1234567890');

select * from user_data
where email = 'suave@gmail.com' and hash = 'hash';

select * from user_data;

-----are these accurate queries for what they are asking for ?

create table tracker(
tracker_id serial primary key,
email varchar(50),
timestamp timestamp not null,
event_type varchar(50),
user_id integer references user_data(user_id));

insert into tracker(email,timestamp,event_type,user_id)
values('rico@gmail.com','2020-06-28','login failed',1)

select * from tracker
join user_data on user_data.user_id = tracker.user_id;


select * from tracker
where email = 'rico@gmail.com' and event_type = 'login failed';

select count(*) from tracker
where tracker.event_type = 'login failed' and  tracker.user_id = 5;

select count(*) from tracker
where tracker.event_type = 'login success' and  tracker.user_id = 5;
