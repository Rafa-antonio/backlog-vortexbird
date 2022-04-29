'use strict';

module.exports = function (app, connection) {

    // Controlador de versiones
    const cVersiones = require('../controllers/versiones.controller');

    app.route('/versiones')

        // Obtener todas las versiones 
        .get((req, res) => {
            cVersiones.getVersiones(connection, req, res);
        })

        .post((req, res) => {
            connection.query('INSERT INTO VERSIONES ')
        })

}