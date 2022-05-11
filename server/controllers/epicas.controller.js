const cVersiones = require('./versiones.controller');

// Obtener épicas (con Id del proyecto)
exports.getEpicas =  (connection, req, res) => {

    let idProyecto = req.query.idProyecto;

    connection.query('SELECT * FROM EPICAS WHERE id_proyecto = ?', [idProyecto], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error')
        } else {
            res.send(results);
        }
    })
}

// Crear épicas
exports.postEpicas = (connection, req, res) => {

    let correo_usuario = req.body.correo_usuario;
    let idProyecto = req.body.idProyecto;
    let resumen = req.body.resumen;
    let tipoIncidencia = req.body.tipoIncidencia;
    let estimacionOriginal = req.body.estimacionOriginal;

    connection.query('INSERT INTO EPICAS(??, ??, ??, ??, ??) VALUES(?, ?, ?, ?, ?)', 
        [
            'correo_usuario', 'id_proyecto', 'resumen', 'tipoIncidencia', 'estimacionOriginal',
            correo_usuario, idProyecto, resumen, tipoIncidencia, estimacionOriginal
        ],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Ocurrió un error');
                } else {
                    let id_epica = results.insertId;
                    cVersiones.postVersionesEpicas(connection, id_epica, res);
                };
            }
    )
}

exports.putEpicas = (connection, req, res) => {

    let idEpica = req.body.idEpica;
    let resumen = req.body.resumen;
    let tipoIncidencia = req.body.tipoIncidencia;
    let estimacionOriginal = req.body.estimacionOriginal;

    connection.query('UPDATE EPICAS SET resumen = ?, tipoIncidencia = ?, estimacionOriginal = ? WHERE id = ?', 
    [
        resumen, tipoIncidencia, estimacionOriginal, idEpica
    ], 
    (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar actualizar las epicas');
        } else {
            cVersiones.postVersionesEpicasNuevaVersion(connection, idEpica, res);
        }
    })
}

exports.deleteEpicas = (connection, req, res) => {
    let idEpica = req.query.idEpica;

    connection.query('DELETE FROM EPICAS WHERE id = ?', [
        idEpica
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar eliminar las épicas');
        } else {

            connection.query('SELECT * FROM EPICAS', (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Ocurrió un error al intentar seleccionar al eliminar epicas');
                } else {
                    if (results.length > 0) {
                        let ultimoId = results[results.length - 1].id;
                        connection.query('ALTER TABLE EPICAS AUTO_INCREMENT = ?', [ultimoId], (err, results, fields) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('Ocurrió un errro al intentar modificar el auto_increment en épicas');
                            } else {
                                console.log('Se ha modificado el id del auto_increment con éxito en épicas');
                                this.getEpicas(connection, req, res);
                            }
                        })

                    } else {
                        connection.query('ALTER TABLE EPICAS AUTO_INCREMENT = 1', (err, results, fields) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('Ocurrió un errro al intentar modificar el auto_increment a 1 en épicas');
                            } else {
                                console.log('Se ha modificado el id del auto_increment con éxito en épicas');
                                this.getEpicas(connection, req, res);
                            }
                        })

                    }
                }
            })
        }
    })
}