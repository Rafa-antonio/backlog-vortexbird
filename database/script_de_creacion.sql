-- Creación de la base de datos
CREATE DATABASE vortex_bird_db;

-- Se usa la base de datos
use vortex_bird_db;

-- Creación de la tabla de Usuarios
CREATE TABLE USUARIOS(
    correo VARCHAR(255) NOT NULL PRIMARY KEY,
    usuario VARCHAR(255) NULL,
    contrasena VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    tipo INT NOT NULL
);

-- Inserción de un usuario
-- Al insertar un usuario, el tipo corresponde a:
-- 1 --> Gerente
-- 2 --> Analista
--  3 --> Arquitecto
INSERT INTO USUARIOS VALUES('rafael_antonio.gomez@uao.edu.co', 'rafa_antonio.gomez', 
    '123456', 'Rafael Antonio', 2);

-- Prueba de búsqueda
SELECT nombre FROM USUARIOS WHERE (correo = 'rafael_antonio.gomez@uao.edu.co' 
    OR usuario = 'rafa_antonio.gomez') AND contrasena = '123456';

