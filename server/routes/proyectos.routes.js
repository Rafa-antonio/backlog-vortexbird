'use strict';

module.exports = function (app, connection) {

    // Controller
    const cProyectos = require('../controllers/proyectos.controller');

    app.route('/proyectos')

        .get((req, res) => {
            cProyectos.getProyectos(connection, req, res);
        })

        .post((req, res) => {
            cProyectos.postProyectos(connection, req, res);
        })


}