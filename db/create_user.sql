insert into tracker ( email, hash,phone,type)
 values ($1,$2,$3,$4)
 returning *;