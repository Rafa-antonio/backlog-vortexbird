-- Creación de la base de datos
CREATE DATABASE vortex_bird_db;

-- Creación de la tabla de Analista
CREATE TABLE ANALISTA(
    correo VARCHAR(255) NOT NULL,
    usuario VARCHAR(255),
    contrasena VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (correo)
);