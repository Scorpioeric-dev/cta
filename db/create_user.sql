insert into user_data ( email, hash,phone)
 values ($1,$2,$3)
 returning *;