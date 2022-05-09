const cVersiones = require('./versiones.controller');

// Crear épicas
exports.postHistorias = (connection, req, res) => {

    let usuario = req.body.usuario;
    let necesidad = req.body.necesidad;
    let objetivo = req.body.objetivo;
    let idProyecto = req.body.idProyecto;
    let idEpica = req.body.idEpica;
    let idPlantilla = req.body.idPlantilla;
    let idCriterio = req.body.idCriterio;

    connection.query('INSERT INTO HUS(??, ??, ??, ??, ??, ??, ??) VALUES(?, ?, ?, ?, ?, ?, ?)', 
        [
            'id_proyecto', 'id_epica', 'id_criterio', 'id_plantilla', 'usuario', 'necesidad', 'objetivo',
            idProyecto, idEpica, idCriterio, idPlantilla, usuario, necesidad, objetivo
        ],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Ocurrió un error');
                } else {
                    let id_historia = results.insertId;
                    cVersiones.postVersionesHUS(connection, id_historia, res);
                };
            }
    )
}

exports.getHistorias = (connection, req, res) => {
    connection.query('SELECT * FROM HUS', (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error');
        } else {
            res.status(200).send(results);
        }
    })
}