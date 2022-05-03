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

-- Creación de la tabla Plantillas
CREATE TABLE PLANTILLAS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pruebasUnitarias INTEGER NOT NULL,
    pruebasCalidadCodigo INTEGER NOT NULL,
    pruebasFuncionales INTEGER NOT NULL,
    requisitosNFuncionales INTEGER NOT NULL,
    documentacion INTEGER NOT NULL,
    tipo VARCHAR(5) NOT NULL
);

-- Creación de proyectos
CREATE TABLE PROYECTOS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    id_plantillas INTEGER NULL
);

-- Creación de la tabla Épicas
CREATE TABLE EPICAS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    correo_usuario VARCHAR(255) NOT NULL,
    id_proyecto INTEGER NULL,
    resumen VARCHAR(80) NOT NULL,
    tipoIncidencia VARCHAR(40) NOT NULL,
    estimacionOriginal VARCHAR(60) NOT NULL,
    CONSTRAINT fk_usuarios_1 FOREIGN KEY (correo_usuario) REFERENCES USUARIOS(correo)
);

-- Creación de las historias de usuario
CREATE TABLE HUS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_epica INTEGER NULL,
    id_plantilla INTEGER NULL,
    usuario VARCHAR(100) NOT NULL,
    necesidad VARCHAR(100) NOT NULL,
    objetivo VARCHAR(100) NOT NULL
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

-- Inserción de versiones_hus
INSERT INTO VERSIONES_HUS(id_hu, numVersion, lineaBase) VALUES(1, 1, 1);

-- Inserción de plantilla
INSERT INTO PLANTILLAS(pruebasUnitarias, pruebasCalidadCodigo, pruebasFuncionales, 
    requisitosNFuncionales, documentacion, tipo) VALUES(1, 1, 1, 1, 1, 'DoD');

-- Inserción de usuario con contraseña encriptada
INSERT INTO USUARIOS(correo, usuario, contrasena, nombre, tipo) VALUES('prueba1@hotmail.com', 'prueba1',
    AES_ENCRYPT('Prueba1', 'masterkey', 16), 'Prueba1', 2);

-- Prueba de seguridad
SELECT AES_ENCRYPT('123456', UNHEX(SHA2('masterkey', 512)), 16);

-- Prueba de desencriptación
SELECT AES_DECRYPT(0xDEC0200DCD02161732B7F8BB4C9B7D31, 'masterkey', 16);

-- Traducción final
SELECT CONVERT(0x50727565626131 USING utf8mb4);