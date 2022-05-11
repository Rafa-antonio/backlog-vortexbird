'use strict';

module.exports = function(app, connection) {

    // Controller historias
    const cHistorias = require('../controllers/historias.controller');

    // Para historias
    app.route('/historias')

        .get((req, res) => {
            cHistorias.getHistorias(connection, req, res);
        })

        .post((req, res) => {
            cHistorias.postHistorias(connection, req, res);
        })

        .put((req, res) => {
            cHistorias.putHistorias(connection, req, res);
        })

        .delete((req, res) => {
            cHistorias.deleteHistorias(connection, req, res);
        });
    
    app.route('/historias-epica')
        
        .get((req, res) => {
            cHistorias.getHistoriasEpica(connection, req, res);
        })

}