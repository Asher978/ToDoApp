\connect todo_app_db


CREATE TABLE IF NOT EXISTS todo (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(400),
    status VARCHAR(100),
    category VARCHAR(400),
    description VARCHAR(1024)
);

CREATE  TABLE IF NOT EXISTS users (
    id SERIAl PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255)
);

ALTER TABLE todo
ADD COLUMN user_id INTEGER REFERENCES users(id);