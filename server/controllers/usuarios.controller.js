const mysql = require('mysql');

exports.login = async (req, connection) => {
    usuario = req.query.usuario;
    contrasena = req.query.contrasena;

    let resultados = '';

    connection.query('SELECT name FROM USUARIOS', (err, result, fields) => {
        resultados = result;
    })

    let contadorSegundos = 0;
    while (resultados == '') {
        setTimeout(() => {
            console.log('Han pasado ' + contadorSegundos + '...');
        }, 1000);
    }

    return resultados;
}