-- Creación de la base de datos
CREATE DATABASE vortex_bird_db;

-- Se usa la base de datos
use vortex_bird_db;

-- Creación de la tabla de Usuarios
CREATE TABLE USUARIOS(
    correo VARCHAR(255) NOT NULL PRIMARY KEY,
    usuario VARCHAR(255) NULL,
    contrasena BLOB NOT NULL,
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
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    id_plantillas INTEGER NULL
);

-- Creación de criterios
CREATE TABLE CRITERIOS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(300) NOT NULL,
    objetivo VARCHAR(300) NOT NULL
);

-- Creación de trabajo
CREATE TABLE TRABAJOS(
    id INTEGER NOT NULL AUTO_INCREMENT,
    id_proyecto INTEGER NOT NULL,
    correo_usuario VARCHAR(255) NOT NULL,
    fechaAsignacion DATETIME NOT NULL,
    fechaFinalizacion DATETIME NULL,
    CONSTRAINT fk_proyectos1 FOREIGN KEY(id_proyecto) REFERENCES PROYECTOS(id) ON DELETE CASCADE ,
    CONSTRAINT fk_usuarios1 FOREIGN KEY(correo_usuario) REFERENCES USUARIOS(correo) ON DELETE CASCADE,
    CONSTRAINT pk_1 PRIMARY KEY(id, id_proyecto, correo_usuario)
);

-- Creación de la tabla Épicas
CREATE TABLE EPICAS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    correo_usuario VARCHAR(255) NOT NULL,
    id_proyecto INTEGER NULL,
    resumen VARCHAR(350) NOT NULL,
    tipoIncidencia VARCHAR(350) NOT NULL,
    estimacionOriginal VARCHAR(300) NOT NULL,
    CONSTRAINT fk_usuarios_1 FOREIGN KEY (correo_usuario) REFERENCES USUARIOS(correo) ON DELETE CASCADE
);

-- Creación de las historias de usuario
CREATE TABLE HUS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_proyecto INTEGER NOT NULL,
    id_epica INTEGER NOT NULL,
    id_criterio INTEGER NOT NULL,
    id_plantilla INTEGER NOT NULL,
    usuario VARCHAR(300) NOT NULL,
    necesidad VARCHAR(300) NOT NULL,
    objetivo VARCHAR(300) NOT NULL,
    CONSTRAINT fk_proyecto_hus FOREIGN KEY (id_proyecto) REFERENCES PROYECTOS(id) ON DELETE CASCADE,
    CONSTRAINT fk_epica_hus FOREIGN KEY (id_epica) REFERENCES EPICAS(id) ON DELETE CASCADE,
    CONSTRAINT fk_criterio_hus FOREIGN KEY (id_criterio) REFERENCES CRITERIOS(id) ON DELETE CASCADE,
    CONSTRAINT fk_plantilla_hus FOREIGN KEY (id_plantilla) REFERENCES PLANTILLAS(id) ON DELETE CASCADE
z);

-- Creación de la tabla VersionesEpicas
CREATE TABLE VERSIONES_EPICAS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_epica INTEGER NOT NULL,
    numVersion INTEGER NOT NULL,
    lineaBase INTEGER NOT NULL,
    CONSTRAINT fk_epicas_1 FOREIGN KEY (id_epica) REFERENCES EPICAS(id) ON DELETE CASCADE
);

-- Creación de la tabla VersionesHU
CREATE TABLE VERSIONES_HUS(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_hu INTEGER NOT NULL,
    numVersion INTEGER NOT NULL,
    lineaBase INTEGER NOT NULL,
    CONSTRAINT fk_hus_1 FOREIGN KEY (id_hu) REFERENCES HUS(id) ON DELETE CASCADE
);

-- Inserción de un usuario
-- Al insertar un usuario, el tipo corresponde a:
-- 1 --> Gerente
-- 2 --> Analista
--  3 --> Arquitecto
INSERT INTO USUARIOS VALUES('rafael_antonio.gomez@uao.edu.co', 'rafa_antonio.gomez', 
    AES_ENCRYPT('masterkey', 'masterkey'), 'Rafael Antonio', 2);

INSERT INTO USUARIOS VALUES('gerente', 'Gerente', 
    AES_ENCRYPT('masterkey', 'masterkey'), 'Gerente', 1);

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
-- Aquí se evidencia que masterkey es la palabra secreta
INSERT INTO USUARIOS(correo, usuario, contrasena, nombre, tipo) VALUES('prueba1@hotmail.com', 'prueba1',
    AES_ENCRYPT('Prueba1', 'masterkey'), 'Prueba1', 2);

-- Inserción de segundo usuario
INSERT INTO USUARIOS(correo, usuario, contrasena, nombre, tipo) VALUES('usuariodiferente', 'usuariodiferente1',
    AES_ENCRYPT('masterkey', 'masterkey'), 'Hola soy Juan', 2);

-- Inserción de proyectos
INSERT INTO PROYECTOS(id, nombre, descripcion) VALUES(1, 'Prueba #1', 'Prueba #1');
INSERT INTO PROYECTOS(nombre, descripcion) VALUES('Prueba #2', 'Prueba #2');
INSERT INTO PROYECTOS(nombre, descripcion) VALUES('Prueba #3', 'Prueba #3');

-- Prueba de encriptación
SELECT AES_ENCRYPT('Prueba1', 'masterkey');

-- Resultados exitosos:
SELECT nombre FROM USUARIOS WHERE (correo = 'prueba' OR usuario = 'prueba1') AND contrasena = 0xDEC0200DCD02161732B7F8BB4C9B7D31;

-- Modificar la columna contrasena de la tabla de usuarios
ALTER TABLE USUARIOS MODIFY COLUMN contrasena BLOB NOT NULL;

-- Adicionales
-- Prueba de desencriptación
SELECT AES_DECRYPT(0xDEC0200DCD02161732B7F8BB4C9B7D31, 'masterkey');
-- Traducción final
SELECT CONVERT(AES_DECRYPT(0xDEC0200DCD02161732B7F8BB4C9B7D31, 'masterkey') USING utf8mb4) AS CONTRASENA;

