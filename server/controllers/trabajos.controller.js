exports.getTrabajos = (connection, req, res) => {
    let correo = req.query.correo;

    connection.query('SELECT * FROM TRABAJOS WHERE correo_usuario = ?', [
        correo
    ], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error en getTrabajos');
        } else {
            res.status(200).send(results);
        }
    })
}

exports.postTrabajos = (connection, req, res) => {

    let id_proyecto = req.body.id_proyecto;
    let correo_usuario = req.body.correo_usuario;
    let fechaAsignacion = req.body.fechaAsignacion;

    connection.query('SELECT * FROM TRABAJOS WHERE id_proyecto = ? AND correo_usuario = ?', [
        id_proyecto, correo_usuario
    ], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.status(500).send('Ocurrió un error al verificar si ya se había asignado anteriormente dicho proyecto.');
            } else {
                console.log(results.length);
                if (results.length > 0) {
                    res.status(200).send(false);
                } else {
                    connection.query('INSERT INTO TRABAJOS(id_proyecto, correo_usuario, fechaAsignacion) VALUES(?, ?, ?)', [
                        id_proyecto, correo_usuario, fechaAsignacion
                    ], (err, results, fields) => {
                        if (err) {
                            console.log(err);
                            res.status(500).send('Ocurrió un error en postTrabajos');
                        } else {
                            res.status(200).send(true);
                        }
                    });
                }
            }
        })

}