'use strict';

module.exports = function (app, connection) {

    // Controlador de versiones
    const cVersiones = require('../controllers/versiones.controller');

    app.route('/versiones-epicas')

        // Obtener todas las versiones 
        .get((req, res) => {
            cVersiones.getVersionesEpicas(connection, req, res);
        })

        .post((req, res) => {
            cVersiones.postVersionesEpicas(connection, req, res);
        });

    app.route('/versiones-hus')

        // Obtener todas las versiones de las historias de usuario con el id asociado
        .get((req, res) => {
            cVersiones.getVersionesHUS(connection, req, res);
        })

        .post((req, res) => {
            cVersiones.postVersionesHUS(connection, req, res);
        })

}