// Cuando se deseen obtener todas las versiones.
// Se verifica si se desea obtener alguna en particular
// o si se desea verificar que ya hay una versión anterior

exports.postVersionesEpicas = async (connection, id_epica, res) => {
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

exports.postVersionesHUS = async (connection, id_historia, res) => {
    return await connection.query('INSERT INTO VERSIONES_HUS(??, ??, ??) VALUES(?, ?, ?)', 
        [
            'id_hu', 'numVersion', 'lineaBase',
            id_historia, 1, 1
        ], 
        (err, result, fields) => {
        if (err) {
            // No se logro crear la version_hu
            res.status(200).send({
                hu: true,
                version_hu: false
            })
        } else {
            // Se logro crear la versión epica
            res.status(200).send({
                hu: true,
                version_hu: true
            })
        }
    })
}

exports.postVersionesEpicasNuevaVersion = (connection, id_epica, res) => {
    connection.query('SELECT numVersion FROM VERSIONES_EPICAS WHERE id_epica = ?', 
    [
        id_epica
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar insertar en las versiones épicas la nueva versión');
        } else {


            let nuevaVersion = results[results.length - 1].numVersion || 0;

            console.log('NUEVA VERSION: ' + nuevaVersion);
            nuevaVersion += 1;
            
            connection.query('INSERT INTO VERSIONES_EPICAS(id_epica, numVersion, lineaBase)' + 
                'VALUES(?, ?, ?)', [
                    id_epica, nuevaVersion, 0
                ], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Ocurrió un error al intentar insertar la nueva versión épica');
                    } else {
                        res.status(200).send(true);
                    }
                })
        }
    })
}

exports.postVersionesHUSNuevaVersion = (connection, id_hu, res) => {
    connection.query('SELECT numVersion FROM VERSIONES_HUS WHERE id_hu = ?', 
    [
        id_hu
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar insertar en las versiones épicas la nueva versión');
        } else {
            let nuevaVersion = results[results.length - 1].numVersion || 0;            
            nuevaVersion += 1;
            
            connection.query('INSERT INTO VERSIONES_HUS(id_hu, numVersion, lineaBase)' + 
                'VALUES(?, ?, ?)', [
                    id_hu, nuevaVersion, 0
                ], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Ocurrió un error al intentar insertar la nueva versión épica');
                    } else {
                        res.status(200).send(true);
                    }
                })
        }
    })
}

exports.getVersionesEpicas =  (connection, req, res) => {
    let idEpica = req.query.idEpica;
    connection.query('SELECT * FROM VERSIONES_EPICAS WHERE id_epica = ?', [idEpica], 
        (err, results, fields) => {

        if (err) {
            res.status(500).send('Ocurrió un error');
        } else {
            // Hacemos que para cada results se ponga como línea base un si o un no
            for (let i = 0; i < results.length; i++) {
                if (results[i].lineaBase == 1) {
                    results[i].lineaBase = 'Sí';
                } else {
                    results[i].lineaBase = 'No';
                }
            }

            res.status(200).send(results);
        }

    })
    
}

exports.getVersionesHUS = (connection, req, res) => {

    let idHU = req.query.idHU;

    connection.query('SELECT * FROM VERSIONES_HUS WHERE id_hu = ?', [
        idHU
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar crear la versión HU');
        } else {
            // Hacemos que para cada results se ponga como línea base un si o un no
            for (let i = 0; i < results.length; i++) {
                if (results[i].lineaBase == 1) {
                    results[i].lineaBase = 'Sí';
                } else {
                    results[i].lineaBase = 'No';
                }
            }

            res.status(200).send(results);
        }        
    })
}