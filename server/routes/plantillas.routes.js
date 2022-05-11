'use strict';

module.exports = function (app, connection) {    

        const cPlantillas = require('../controllers/plantillas.controller');

        app.route('/plantillas')

            .get((req, res) => {
                cPlantillas.getPlantillas(connection, req, res);
            })

            .post((req, res) => {
                cPlantillas.postPlantillas(connection, req, res);
            })

            .delete((req, res) => {
                cPlantillas.deletePlantillas(connection, req, res);
            })

            .put((req, res) => {
                cPlantillas.putPlantillas(connection, req, res);
            })
}