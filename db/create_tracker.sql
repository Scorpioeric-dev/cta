insert into tracker(email,timestamp,event_type,user_id)
values($1,$2,$3,$4)
returning *;
