-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS DF_Consultas;
USE DF_Consultas;

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS user (
    identifier INT PRIMARY KEY AUTO_INCREMENT,  -- Identificador único del usuario
    name VARCHAR(50) NOT NULL,                  -- Nombre del usuario
    email VARCHAR(150) NOT NULL UNIQUE,         -- Correo electrónico único del usuario
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de registro del usuario
);

-- Tabla de Moderadores
CREATE TABLE IF NOT EXISTS moderator (
    identifier INT PRIMARY KEY AUTO_INCREMENT,  -- Identificador único del moderador
    name VARCHAR(50) NOT NULL,                  -- Nombre del moderador
    email VARCHAR(150) NOT NULL UNIQUE          -- Correo electrónico único del moderador
);

-- Tabla de Consultas
CREATE TABLE IF NOT EXISTS consultation (
    identifier INT PRIMARY KEY AUTO_INCREMENT,  -- Identificador único de la consulta
    title VARCHAR(50) NOT NULL,                 -- Título de la consulta
    consultation VARCHAR(255) NOT NULL,         -- Descripción detallada de la consulta
    consultation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de la consulta
    state CHAR(1) DEFAULT 'E',                  -- Estado de la consulta ('R' = Respondido, 'E' = En espera)
    user_identifier INT,                        -- Relación con el usuario
    moderator_identifier INT,                   -- Relación con el moderador
    FOREIGN KEY (user_identifier) REFERENCES user(identifier) ON DELETE CASCADE,
    FOREIGN KEY (moderator_identifier) REFERENCES moderator(identifier) ON DELETE SET NULL
);

-- Tabla de Respuestas
CREATE TABLE IF NOT EXISTS answer (
    identifier INT PRIMARY KEY AUTO_INCREMENT,  -- Identificador único de la respuesta
    answer VARCHAR(255) NOT NULL,               -- Contenido de la respuesta
    response_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha y hora de la respuesta
    consultation_identifier INT,                -- Relación con la consulta
    FOREIGN KEY (consultation_identifier) REFERENCES consultation(identifier) ON DELETE CASCADE
);

-- Inserción de un usuario
INSERT INTO user (name, email) 
VALUES ('Juan Perez', 'juan.perez@email.com');

-- Inserción de un moderador
INSERT INTO moderator (name, email) 
VALUES ('Maria Garcia', 'maria.garcia@email.com');

-- Inserción de una consulta (verificar que el user_identifier es correcto)
INSERT INTO consultation (title, consultation, user_identifier) 
VALUES ('Consulta sobre ODS 2', '¿Cómo puedo participar en prácticas sostenibles?', 1);

-- Inserción de una respuesta a la consulta (verificar que el consultation_identifier es correcto)
INSERT INTO answer (answer, consultation_identifier) 
VALUES ('Puede participar contactando a organizaciones locales de agricultura sostenible.', 1);

-- Listar todos los usuarios
SELECT * FROM user;

-- Listar todas las consultas
SELECT * FROM consultation;

-- Listar todas las respuestas con los detalles de la consulta
SELECT c.title, a.answer, a.response_date
FROM answer a
JOIN consultation c ON a.consultation_identifier = c.identifier;

-- Listar todas las consultas de un usuario específico
SELECT c.title, c.consultation_date
FROM consultation c
JOIN user u ON c.user_identifier = u.identifier
WHERE u.email = 'juan.perez@email.com';

-- Actualizar el estado de una consulta (por ejemplo, marcarla como respondida)
UPDATE consultation
SET state = 'R', moderator_identifier = 1
WHERE identifier = 1;

-- Actualizar la información de un usuario
UPDATE user
SET name = 'Juan Antonio Perez'
WHERE identifier = 1;

-- Eliminación física de una respuesta
DELETE FROM answer WHERE identifier = 1;

-- Eliminación lógica de una consulta (por ejemplo, cambiar su estado a 'E' en espera)
UPDATE consultation
SET state = 'E'
WHERE identifier = 1;


