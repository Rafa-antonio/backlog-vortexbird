exports.logIn = (connection, req, res) => {

    let correo = req.query.correo;
    let usuario = req.query.usuario;
    let contrasena = req.query.contrasena;

    connection.query('SELECT nombre FROM USUARIOS WHERE (correo = ? OR usuario = ?) AND (contrasena = AES_ENCRYPT(?, "masterkey"))', 
        [
            correo, usuario, contrasena
        ],
        (err, results, fields) => {            

            if (err) {
                res.status(500).send('Ocurrió un error');
            } else {
                if (results[0] != undefined) {
                    res.status(200).send({nombre: results[0].nombre});
                } else {
                    res.status(200).send({nombre: false});
                }
            };
        }
    );
}