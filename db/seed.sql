Drop table tracker;
CREATE TABLE tracker (
id SERIAL PRIMARY KEY,
email VARCHAR(50),
hash text,
Phone VARCHAR(15),
created date not null default current_date

);

insert into tracker ( email,hash,phone)
values('rico@gmail.com','hash','1234567890');

select * from tracker
where email = 'suave@gmail.com' and hash = 'hash';

select * from tracker;

-----are these accurate queries for what they are asking for 

drop table Tracker_event;
create table Tracker_event(
event_id SERIAL not null,
created_date date not null,
created_time time not null,
constraint "Tracker_events_pk" primary key (event_id)
) with (
OIDS = FALSE);


insert into Tracker_event(created_date,created_time)
values('2020-06-28','19:10:25-07');

select * from Tracker_event
order by created_date;

Select * from Tracker_event
order by created_time;

