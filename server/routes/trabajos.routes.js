'use strict';

module.exports = function (app, connection) {

    // Controller
    const cTrabajos = require('../controllers/trabajos.controller');

    app.route('/trabajos')

        .get((req, res) => {
            cTrabajos.getTrabajos(connection, req, res);
        })

        .post((req, res) => {
            cTrabajos.postTrabajos(connection, req, res);
        })


}