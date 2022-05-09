'use strict';

module.exports = function(app, connection) {

    // Controller epicas
    const cEpicas = require('../controllers/epicas.controller');

    // Para crear una épica
    app.route('/epicas')

        .get((req, res) => {
            cEpicas.getEpicas(connection, req, res);
        })

        .post((req, res) => {
            cEpicas.postEpicas(connection, req, res);
        })

        .put((req, res) => {
            cEpicas.putEpicas(connection, req, res);
        })

        .delete((req, res) => {
            cEpicas.deleteEpicas(connection, req, res);
        });

}