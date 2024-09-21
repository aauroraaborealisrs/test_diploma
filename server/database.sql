CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    middlename VARCHAR(255),
    birth_date DATE,
    password VARCHAR(255) NOT NULL
);

-- Таблица для антропометрии и биоимпедансометрии
CREATE TABLE anthropometry_bioimpedance (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id), -- Ссылка на пользователя
    height NUMERIC, -- Рост (см)
    weight NUMERIC, -- Вес (кг)
    waist_circumference NUMERIC, -- Окружность талии (см)
    hip_circumference NUMERIC, -- Окружность бедер (см)
    created_at TIMESTAMP DEFAULT NOW() -- Дата и время создания записи
);
