Drop table tracker;
CREATE TABLE tracker (
id SERIAL PRIMARY KEY,
email VARCHAR(50),
hash text,
Phone VARCHAR(15)

);

insert into tracker ( email,hash,phone)
values('rico@gmail.com','hash','1234567890');

select * from tracker
where email = 'suave@gmail.com' and hash = 'hash';

select * from tracker;