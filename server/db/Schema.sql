DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS tweets CASCADE;
DROP TABLE IF EXISTS brands CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS points CASCADE;

DROP DATABASE IF EXISTS sellyourselfie;

CREATE DATABASE sellyourselfie;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  twitter_handle TEXT,
  total_points INTEGER 
);

CREATE TABLE brands(
  brand_id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE tweets(
  tweet_id SERIAL PRIMARY KEY,
  user_id INTEGER,
  brand_id INTEGER,
  message TEXT,
  image_url TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (brand_id) REFERENCES brands(brand_id) ON DELETE CASCADE
);

CREATE TABLE tags(
  tag_id SERIAL PRIMARY KEY,
  tag TEXT,
  brand_id INTEGER,
  FOREIGN KEY (brand_id) REFERENCES brands(brand_id) ON DELETE CASCADE
);

CREATE TABLE points(
  user_id INTEGER,
  brand_id INTEGER,
  points INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (brand_id) REFERENCES brands(brand_id) ON DELETE CASCADE 
);

