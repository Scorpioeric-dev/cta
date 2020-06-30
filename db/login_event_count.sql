select count(*) from tracker
where tracker.event_type = 'login success' or  tracker.event_type = 'login failed' and tracker.user_id = $1;
