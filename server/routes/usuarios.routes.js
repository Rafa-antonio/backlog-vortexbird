'use strict';

module.exports = function (app, connection) {    

    const cUsuarios = require('../controllers/usuarios.controller');

    app.route('/usuarios')

        // Para iniciar sesión
        .get((req, res) => {
            cUsuarios.logIn(connection, req, res);
        })
}