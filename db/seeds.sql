-- Creating tables
CREATE TABLE mtg_users (
	user_id SERIAL PRIMARY KEY, 
  username VARCHAR(10),
  email VARCHAR(20), 
  password VARCHAR(20),
  user_image TEXT
);

CREATE TABLE mtg_decks (
	deck_id SERIAL PRIMARY KEY,
  title TEXT, 
  user_id INTEGER REFERENCES mtg_users(user_id),
  card_id VARCHAR(100) 
);

-- dummy data
INSERT INTO mtg_users (username, email, password, user_image)
VALUES ('Grizzly', 'grizzly@gmail.com', 'sweet', 'https://thenypost.files.wordpress.com/2019/04/grizzly-bear.jpg?quality=90&strip=all&w=618&h=410&crop=1');

SELECT * FROM mtg_users;