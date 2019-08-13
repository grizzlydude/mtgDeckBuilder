SELECT * FROM mtg_users
WHERE (username = $1 OR email = $2) AND password = $3;