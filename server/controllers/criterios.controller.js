// Obtener todos los criterios
exports.getCriterios = (connection, req, res) => {
    connection.query('SELECT * FROM CRITERIOS', (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar obtener todos los criterios');
        } else {
            res.status(200).send(results);
        }
    })
}

exports.postCriterios = (connection, req, res) => {
    let usuario = req.body.usuario;
    let objetivo = req.body.objetivo;

    connection.query('INSERT INTO CRITERIOS(usuario, objetivo) VALUES(?, ?)', [
        usuario, objetivo
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar insertar los criterios');
        } else {
            res.status(200).send(true);
        }
    })
}

exports.putCriterios = (connection, req, res) => {
    let idCriterio = req.body.idCriterio;
    let usuario = req.body.usuario;
    let objetivo = req.body.objetivo;

    connection.query('UPDATE CRITERIOS SET usuario = ?, objetivo = ? WHERE id = ?', [
        usuario, objetivo, idCriterio
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar actualizar el criterio');
        } else {
            res.status(200).send(true);
        }
    })
}

exports.deleteCriterios = (connection, req, res) => {
    let idCriterio = req.query.idCriterio;

    connection.query('DELETE FROM CRITERIOS WHERE id = ?', [
        idCriterio
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar eliminar el criterio');
        } else {
            this.getCriterios(connection, req, res);
        }
    })
}
