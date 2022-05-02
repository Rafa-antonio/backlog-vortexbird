const cVersiones = require('./versiones.controller');

// Crear épicas
exports.postHistorias = (connection, req, res) => {

    let usuario = req.body.usuario;
    let necesidad = req.body.necesidad;
    let objetivo = req.body.objetivo;

    connection.query('INSERT INTO HUS(??, ??, ??) VALUES(?, ?, ?)', 
        [
            'usuario', 'necesidad', 'objetivo',
            usuario, necesidad, objetivo
        ],
            (err, results, fields) => {
                if (err) {
                    res.status(500).send('Ocurrió un error');
                } else {
                    let id_historia = results.insertId;
                    let seCreoVersion = cVersiones.versionParaHistorias(connection, id_historia, res);
                };
            }
    )
}