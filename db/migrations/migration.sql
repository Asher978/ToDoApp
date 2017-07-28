\connect todo_app_db


CREATE TABLE IF NOT EXISTS todo (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(400),
    status VARCHAR(100),
    category VARCHAR(400),
    description VARCHAR(1024)
);