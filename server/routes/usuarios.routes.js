'use strict';

module.exports = function (app, connection) {
    const cUsuarios = require('../controllers/usuarios.controller');

    // Para iniciar sesión
    app.route('/login')

        .get((req, res) => {
            cUsuarios.login(req, connection).then(val => console.log(val));
            // connection.query(`SELECT nombre FROM USUARIOS`, (err, results, fields) => {
            //     console.log(results);
            // });
        })
}