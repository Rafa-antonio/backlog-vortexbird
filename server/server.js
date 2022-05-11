const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Rutas
const rUsuarios = require('./routes/usuarios.routes');
const rEpicas = require('./routes/epicas.routes');
const rVersiones = require('./routes/versiones.routes');
const rHistorias = require('./routes/historias.routes');
const rPlantillas = require('./routes/plantillas.routes');
const rProyectos = require('./routes/proyectos.routes');
const rTrabajos = require('./routes/trabajos.routes');
const rCriterios = require('./routes/criterios.routes');

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
rEpicas(app, connection);
rHistorias(app, connection);
rPlantillas(app, connection);
rProyectos(app, connection);
rCriterios(app, connection);
rTrabajos(app, connection);
rVersiones(app, connection);

app.listen(3001, () => {
  console.log('Server on port 3001');
});