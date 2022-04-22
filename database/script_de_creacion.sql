-- Creación de la base de datos
CREATE DATABASE vortex_bird_db;

-- Se usa la base de datos
use vortex_bird_db;

-- Creación de la tabla de Analista
CREATE TABLE USUARIO(
    correo VARCHAR(255) NOT NULL PRIMARY KEY,
    usuario VARCHAR(255) NULL,
    contrasena VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    tipo INT NOT NULL,
);

