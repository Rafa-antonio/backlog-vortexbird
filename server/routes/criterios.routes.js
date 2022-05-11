'use strict';

module.exports = function(app, connection) {

    // Controller Criterios
    const cCriterios = require('../controllers/criterios.controller');

    app.route('/criterios')

        .get((req, res) => {
            cCriterios.getCriterios(connection, req, res);
        })

        .post((req, res) => {
            cCriterios.postCriterios(connection, req, res);
        })

        .put((req, res) => {
            cCriterios.putCriterios(connection, req, res);
        })

        .delete((req, res) => {
            cCriterios.deleteCriterios(connection, req, res);
        });

}