
// Crear plantillas
exports.postPlantillas = (connection, req, res) => {    
    let pruebasUnitarias = req.body.pruebasUnitarias == 'Sí' ? 1 : 0;
    let pruebasCalidadCodigo = req.body.pruebasCalidadCodigo == 'Sí' ? 1 : 0;
    let pruebasFuncionales = req.body.pruebasFuncionales == 'Sí' ? 1 : 0;
    let requisitosNFuncionales= req.body.requisitosNFuncionales == 'Sí' ? 1 : 0;
    let documentacion= req.body.documentacion == 'Sí' ? 1 : 0;
    let tipo =  req.body.tipo;

    connection.query('INSERT INTO PLANTILLAS(??, ??, ??, ??, ??, ??) ' +
        ' VALUES(?,?,?,?,?,?)', [
            'pruebasUnitarias', 'pruebasCalidadCodigo', 'pruebasFuncionales', 
            'requisitosNFuncionales', 'documentacion', 'tipo',
            pruebasUnitarias, pruebasCalidadCodigo, pruebasFuncionales, 
            requisitosNFuncionales, documentacion, tipo
        ], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.status(500).send('Ocurrió un error');
            } else {
                res.status(200).send({
                    plantillas: true
                });
            }
        })
}

exports.getPlantillas = (connection, req, res) => {
    connection.query('SELECT * FROM PLANTILLAS', (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error al obtener las plantillas.');
        } else {
            res.status(200).send(results);
        }
    })
}