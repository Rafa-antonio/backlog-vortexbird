const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

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

connection.query('SELECT correo, usuario, contrasena, nombre FROM ANALISTA', function (error, results, fields) {
    if (error) throw error;
    // connected!
    console.log(results);
  });

const app = express();

// Middlewares
app.use(cors);
app.use(express.json());

app.listen(3001, () => {
    console.log('Server on port 3001');
});

