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

exports.deleteHistorias = (connection, req, res) => {
    let idHU = req.query.idHU;
    
    connection.query('DELETE FROM HUS WHERE id = ?', [
        idHU
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar eliminar la HU');
        } else {
            this.getHistorias(connection, req, res);
        }
    })
}

exports.putHistorias = (connection, req, res) => {
    let id = req.body.id;
    let usuario = req.body.usuario;
    let necesidad = req.body.necesidad;
    let objetivo = req.body.objetivo;
    let elCriterio = req.body.elCriterio;
    let laPlantilla = req.body.laPlantilla;

    connection.query('UPDATE HUS SET usuario = ?, necesidad = ?, objetivo = ?, ' +
    'id_criterio = ?, id_plantilla = ? WHERE id = ?', [
        usuario, necesidad, objetivo,
        elCriterio, laPlantilla, id
    ], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error');
        } else {
            cVersiones.postVersionesHUSNuevaVersion(connection, id, res);
        }
    })
}

exports.getHistoriasEpica = (connection, req, res) => {
    let idEpica = req.query.idEpica;

    connection.query('SELECT * FROM HUS WHERE id_epica = ?', [
        idEpica
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar obtener las historias de usuario con la epica establecida');
        } else {
            res.status(200).send(results);
        }
    })
}