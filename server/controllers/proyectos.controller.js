
exports.getProyectos = (connection, req, res) => {
    connection.query('SELECT * FROM proyectos', (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error en getProyectos');
        } else {
            res.status(200).send(results);
        }
    })
}

exports.postProyectos = (connection, req, res) => {
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;

    connection.query('INSERT INTO proyectos(nombre, descripcion) VALUES(?, ?)', [
        nombre, descripcion
    ], (err, results, fields) => {
        
        if (err) {
            res.status(500).send('Ocurrió un error en postProyectos');
        } else {
            res.status(200).send(true);
        }
    });

}

exports.deleteProyectos = (connection, req, res) => {
    console.log(req.query);
    let id = req.query.id;

    connection.query('DELETE FROM PROYECTOS WHERE id = ?', [id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar eliminar los proyectos');
        } else {

            connection.query('SELECT id FROM PROYECTOS', (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Ocurrió un error al intentar seleccionar al eliminar proyectos');
                } else {
                    if (results.length > 0) {
                        let ultimoId = results[results.length - 1].id;
                        connection.query('ALTER TABLE PROYECTOS AUTO_INCREMENT = ?', [ultimoId], (err, results, fields) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('Ocurrió un errro al intentar modificar el auto_increment');
                            } else {
                                console.log('Se ha modificado el id del auto_increment con éxito');
                                this.getProyectos(connection, req, res);
                            }
                        })

                    } else {
                        connection.query('ALTER TABLE PROYECTOS AUTO_INCREMENT = 1', (err, results, fields) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('Ocurrió un errro al intentar modificar el auto_increment a 1');
                            } else {
                                console.log('Se ha modificado el id del auto_increment con éxito');
                                this.getProyectos(connection, req, res);
                            }
                        })

                    }
                }
            })


        }
    })
}

exports.putProyectos = (connection, req, res) => {

    let id = req.body.id;
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;    
    
    connection.query('UPDATE PROYECTOS SET nombre = ?, descripcion = ? WHERE id = ?', [
        nombre, descripcion, id
    ], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.status(500).send('Ocurrió un error')
            } else {
                res.status(200).send(true);
            }
        })
}