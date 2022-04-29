'use strict';

module.exports = function(app, connection) {

    // Controller epicas
    const cEpicas = require('../controllers/epicas.controller');

    // Para crear una épica
    app.route('/epicas')

        .get((req, res) => {
            
        })

        .post((req, res) => {
            cEpicas.postEpicas(connection, req, res);
        })

        .put((req, res) => {

        })

        .delete((req, res) => {

        });

}