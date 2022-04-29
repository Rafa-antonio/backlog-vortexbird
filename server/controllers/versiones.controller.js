// Cuando se deseen obtener todas las versiones.
// Se verifica si se desea obtener alguna en particular
// o si se desea verificar que ya hay una versión anterior

exports.versionParaEpica = async (connection, id_epica, res) => {
    return await connection.query('INSERT INTO VERSIONES_EPICAS(??, ??, ??) VALUES(?, ?, ?)', 
        [
            'id_epica', 'numVersion', 'lineaBase',
            id_epica, 1, 1
        ], 
        (err, result, fields) => {
        if (err) {
            // No se logro crear la version_epica
            res.status(200).send({
                epica: true,
                version_epica: false
            })
        } else {
            // Se logro crear la versión epica
            res.status(200).send({
                epica: true,
                version_epica: true
            })
        }
    })
}

exports.getVersiones =  (connection, req, res) => {
    connection.query('SELECT * FROM VERSIONES', (err, results, fields) => {
        if (err) res.status(500).send({error: 'Ocurrió un error'});

        let tamanoResultados = Object.keys(results).length;
        if (tamanoResultados == 0) res.status(200).send({respuesta: 'No existen versiones en la base de datos.'});

        res.status(200).send(results);
    })
    
}