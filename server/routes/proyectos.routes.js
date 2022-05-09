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

        .delete((req, res) => {
            cProyectos.deleteProyectos(connection, req, res);
        })

        .put((req, res) => {
            cProyectos.putProyectos(connection, req, res);
        })


}