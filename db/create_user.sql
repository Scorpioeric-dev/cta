insert into tracker ( email, hash,phone)
 values ($1,$2,$3)
 returning *;