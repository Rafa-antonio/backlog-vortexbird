const cVersiones = require('./versiones.controller');

// Listar épicas
exports.getEpicas =  (connection, req, res) => {
    connection.query('SELECT * FROM EPICAS', (err, results, fields) => {
        if (err) res.status(500).send('Ocurrió un error');
        console.log(results);
    })
}

// Crear épicas
exports.postEpicas = (connection, req, res) => {

    let correo_usuario = req.body.correo_usuario;
    let resumen = req.body.resumen;
    let tipoIncidencia = req.body.tipoIncidencia;
    let estimacionOriginal = req.body.estimacionOriginal;

    connection.query('INSERT INTO EPICAS(??, ??, ??, ??) VALUES(?, ?, ?, ?)', 
        [
            'correo_usuario', 'resumen', 'tipoIncidencia', 'estimacionOriginal',
            correo_usuario, resumen, tipoIncidencia, estimacionOriginal
        ],
            (err, results, fields) => {
                if (err) {
                    console.log('ENRTO AQUI');
                    res.status(500).send('Ocurrió un error');
                } else {
                    
                    let id_epica = results.insertId;
                    let seCreoVersion = cVersiones.versionParaEpica(connection, id_epica, res);
                };
            }
    )
}