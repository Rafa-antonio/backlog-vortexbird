exports.logIn = (connection, req, res) => {

    let correo = req.query.correo;
    let usuario = req.query.usuario;
    let contrasena = req.query.contrasena;

    connection.query('SELECT correo, nombre FROM USUARIOS WHERE (correo = ? OR usuario = ?) AND (contrasena = AES_ENCRYPT(?, "masterkey"))', 
        [
            correo, usuario, contrasena
        ],
        (err, results, fields) => {            

            if (err) {
                res.status(500).send('Ocurrió un error');
            } else {
                console.log(correo);
                if (results[0] != undefined) {
                    res.status(200).send({
                        nombre: results[0].nombre,
                        correo: results[0].correo,
                    });
                } else {
                    res.status(200).send({nombre: false});
                }
            };
        }
    );
}