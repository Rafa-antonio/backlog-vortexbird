
exports.getProyectos = (connection, req, res) => {
    connection.query('SELECT * FROM PROYECTOS', (err, results, fields) => {
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

    connection.query('INSERT INTO PROYECTOS(nombre, descripcion) VALUES(?, ?)', [
        nombre, descripcion
    ], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error en postProyectos');
        } else {
            res.status(200).send(true);
        }
    });
}