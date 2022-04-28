const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const rUsuarios = require('./routes/usuarios.routes');

const connection = mysql.createConnection(
    {
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database: 'vortex_bird_db'
    }
);
 
connection.connect(err => {
  if (err) console.error('error connecting: ' + err.stack);
});

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());  

// Se establece el uso de las rutas
rUsuarios(app, connection);

app.listen(3001, () => {
  console.log('Server on port 3001');
});