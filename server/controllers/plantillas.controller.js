
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

            let dataTexto = [];
  
            for (let i = 0; i < results.length; i++) {
              let dataI = results[i];
              let id = dataI.id;
              let pruebasUnitarias = dataI.pruebasUnitarias == 1 ? 'Sí' : 'No';
              let pruebasCalidadCodigo = dataI.pruebasCalidadCodigo == 1 ? 'Sí' : 'No';
              let pruebasFuncionales = dataI.pruebasFuncionales == 1 ? 'Sí' : 'No';
              let requisitosNFuncionales = dataI.requisitosNFuncionales == 1 ? 'Sí' : 'No';
              let documentacion = dataI.documentacion == 1 ? 'Sí' : 'No';
              let tipo = dataI.tipo;
  
              dataTexto.push(
                {
                  id: id,
                  pruebasUnitarias: pruebasUnitarias, 
                  pruebasCalidadCodigo: pruebasCalidadCodigo, 
                  pruebasFuncionales: pruebasFuncionales, 
                  requisitosNFuncionales: requisitosNFuncionales, 
                  documentacion: documentacion, 
                  tipo: tipo
                });
            }

            res.status(200).send(dataTexto);
        }
    })
}

exports.deletePlantillas = (connection, req, res) => {

    let idPlantilla = req.query.idPlantilla;

    connection.query('DELETE FROM PLANTILLAS WHERE id = ?', [
        idPlantilla
    ], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocurrió un error al intentar eliminar las plantillas.');
        } else {
            this.getPlantillas(connection, req, res);
        }
    })
}

exports.putPlantillas = (connection, req, res) => {
    let idPlantilla = req.body.idPlantilla;
    let pruebasUnitarias = req.body.pruebasUnitarias == 'Sí' ? 1 : 0;
    let pruebasCalidadCodigo = req.body.pruebasCalidadCodigo == 'Sí' ? 1 : 0;
    let pruebasFuncionales = req.body.pruebasFuncionales == 'Sí' ? 1 : 0;
    let requisitosNFuncionales= req.body.requisitosNFuncionales == 'Sí' ? 1 : 0;
    let documentacion= req.body.documentacion == 'Sí' ? 1 : 0;
    let tipo =  req.body.tipo;

    /*
        UPDATE PLANTILLAS SET pruebasUnitarias = 1, pruebasCalidadCodigo = 0, pruebasFuncionales = 0, requisitosNFuncionales = 0, documentacion = 0, tipo = 'DoR' WHERE id = 13;
    */

    connection.query('UPDATE PLANTILLAS SET pruebasUnitarias = ?, pruebasCalidadCodigo = ?,' + 
    'pruebasFuncionales = ?, requisitosNFuncionales = ?, documentacion = ?, tipo = ? WHERE id = ?', [
        pruebasUnitarias, pruebasCalidadCodigo, pruebasFuncionales, 
        requisitosNFuncionales, documentacion, tipo, idPlantilla
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send('Ocurrió un error al intentar actualizar las plantillas.');
        } else {
            res.status(200).send(true);
        }
    })

}