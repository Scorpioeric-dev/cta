select * from tracker
join user_data on user_data.user_id = tracker.user_id
where user_data.user_id = $1 and tracker.user_id = $1;