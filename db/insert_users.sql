INSERT INTO mtg_users (username, email, password, user_image)
VALUES ($1, $2, $3, $4);

SELECT * FROM mtg_users;