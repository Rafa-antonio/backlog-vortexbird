'use strict';

module.exports = function (app, connection) {    

    // Para iniciar sesión
    app.route('/login')

        .get((req, res) => {
            connection.query('SELECT nombre FROM USUARIOS', (err, result, fields) => {
                if (result[0] != undefined) {
                    console.log({nombre: result[0].nombre});
                    res.json({nombre: result[0].nombre});
                } else {
                    res.json({nombre: false});
                }
            })
        })
}