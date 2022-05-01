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

-- Creación de la tabla Épicas
CREATE TABLE EPICAS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    correo_usuario VARCHAR(255) NOT NULL,
    resumen VARCHAR(80) NOT NULL,
    tipoIncidencia VARCHAR(40) NOT NULL,
    estimacionOriginal VARCHAR(60) NOT NULL,
    CONSTRAINT fk_usuarios_1 FOREIGN KEY (correo_usuario) REFERENCES USUARIOS(correo)
);

-- Creación de la tabla VersionesEpicas
CREATE TABLE VERSIONES_EPICAS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_epica INTEGER NOT NULL,
    numVersion INTEGER NOT NULL,
    lineaBase INTEGER NOT NULL,
    CONSTRAINT fk_epicas_1 FOREIGN KEY (id_epica) REFERENCES EPICAS(id)
);

-- Creación de la tabla VersionesHU
CREATE TABLE VERSIONES_HUS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_hu INTEGER NOT NULL,
    numVersion INTEGER NOT NULL,
    lineaBase INTEGER NOT NULL,
    CONSTRAINT fk_hus_1 FOREIGN KEY (id_hu) REFERENCES HUS(id)
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

-- Inserción de Epica
INSERT INTO EPICAS(correo_usuario, resumen, tipoIncidencia, estimacionOriginal) 
    VALUES('rafael_antonio.gomez@uao.edu.co', 'Prueba resumen', 'Prueba tipo' , 'Prueba estimación');

    INSERT INTO EPICAS(correo_usuario, resumen, tipoIncidencia, estimacionOriginal) 
    VALUES('rafael_antonio.gomez@uao.edu.co', 'Prueba resumen2', 'Prueba tipo2' , 'Prueba estimación2');

