-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-09-29 06:39:06.834

-- tables
-- Table: consulta
CREATE TABLE consulta (
    identificador int  NOT NULL COMMENT 'Identificador único de la consulta.',
    titulo varchar(50)  NULL COMMENT 'Título breve de la consulta.',
    consulta varchar(255)  NULL COMMENT 'Descripción detallada de la consulta.',
    fecha_consulta timestamp  NULL COMMENT 'Fecha y hora en que se realizó la consulta.',
    usuario_identificador int  NOT NULL,
    CONSTRAINT consulta_pk PRIMARY KEY (identificador)
);

-- Table: moderador
CREATE TABLE moderador (
    identificador int  NOT NULL COMMENT 'Identificador único del moderador .',
    nombre varchar(50)  NULL COMMENT 'Nombre completo del moderador.',
    email varchar(150)  NULL COMMENT 'Dirección de correo única.',
    fecha_registro timestamp  NULL COMMENT 'Fecha de registro del moderador.',
    CONSTRAINT moderador_pk PRIMARY KEY (identificador)
);

-- Table: respuesta
CREATE TABLE respuesta (
    identificador int  NOT NULL COMMENT 'Identificador único de la respuesta.',
    respuesta varchar(255)  NULL COMMENT 'Contenido detallado de la respuesta.',
    fecha_respuesta timestamp  NULL COMMENT 'Fecha y hora en que se proporcionó la respuesta.',
    consulta_identificador int  NOT NULL,
    moderador_identificador int  NOT NULL,
    CONSTRAINT respuesta_pk PRIMARY KEY (identificador)
);

-- Table: usuario
CREATE TABLE usuario (
    identificador int  NOT NULL COMMENT 'Identificador único del usuario',
    nombre varchar(50)  NULL COMMENT 'Nombre completo del usuario.',
    email varchar(150)  NULL COMMENT 'Dirección de correo electrónico única.',
    fecha_registro timestamp  NULL COMMENT 'Fecha en la que el usuario se registró.',
    CONSTRAINT usuario_pk PRIMARY KEY (identificador)
);

-- foreign keys
-- Reference: consulta_usuario (table: consulta)
ALTER TABLE consulta ADD CONSTRAINT consulta_usuario FOREIGN KEY consulta_usuario (usuario_identificador)
    REFERENCES usuario (identificador);

-- Reference: respuesta_consulta (table: respuesta)
ALTER TABLE respuesta ADD CONSTRAINT respuesta_consulta FOREIGN KEY respuesta_consulta (consulta_identificador)
    REFERENCES consulta (identificador);

-- Reference: respuesta_moderador (table: respuesta)
ALTER TABLE respuesta ADD CONSTRAINT respuesta_moderador FOREIGN KEY respuesta_moderador (moderador_identificador)
    REFERENCES moderador (identificador);

-- End of file.

