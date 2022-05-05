import React from 'react';
import Login from './pages/Login/Login';

// Homes
import HomeAnalistas from './pages/HomeAnalistas/HomeAnalistas';
import HomeGerentes from './pages/HomeGerentes/HomeGerentes';

// Asignar analista
import AsignarAnalistas from './pages/AsignarAnalistas/AsignarAnalistas';

// Diferentes secciones
// Gerentes
import ProyectosGerentes from './pages/ProyectosGerentes/ProyectosGerentes';
// Analistas
import EpicasAnalistas from './pages/EpicasAnalistas/EpicasAnalistas';
import HistoriasAnalistas from './pages/HistoriasAnalistas/HistoriasAnalistas';
import PlantillasAnalistas from './pages/PlantillasAnalistas/PlantillasAnalistas';
import CriteriosAnalistas from './pages/CriteriosAnalistas/CriteriosAnalistas';
import ProyectosAnalistas from './pages/ProyectosAnalistas/ProyectosAnalistas';

// Crear
// Analistas
import CrearEpicas from './pages/CrearEpicas/CrearEpicas';
import CrearHistorias from './pages/CrearHistorias/CrearHistorias';
import CrearPlantillas from './pages/CrearPlantillas/CrearPlantillas';
import CrearCriterios from './pages/CrearCriterios/CrearCriterios';
import CrearProyectos from './pages/CrearProyectos/CrearProyectos';

// Ver
// Analistas
import VerEpicas from './pages/VerEpicas/VerEpicas';
import VerHU from './pages/VerHU/VerHU';
import VerPlantillas from './pages/VerPlantillas/VerPlantillas';
import VerProyectos from './pages/VerProyectos/VerProyectos';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homes */}
        <Route path="/" element={<Login />} />
        <Route path="/home-analistas" element={<HomeAnalistas />} />
        <Route path="/home-gerentes" element={<HomeGerentes />} />

        {/* Asignar analitstas */}
        <Route path='/home-gerentes/proyectos/asignar-analistas' element={<AsignarAnalistas />} />

        {/* Diferentes secciones */}
        {/* Gerentes */}
        <Route path='/proyectos-gerentes' element={<ProyectosGerentes />} />

        {/* Diferentes secciones */}
        {/* Analistas */}
        <Route path="/epicas-analistas" element={<EpicasAnalistas />} />
        <Route path="/historias-analistas" element={<HistoriasAnalistas />} />
        <Route path="/plantillas-analistas" element={<PlantillasAnalistas />} />
        <Route path="/criterios-analistas" element={<CriteriosAnalistas />} />
        <Route path="/proyectos-analistas" element={<ProyectosAnalistas />} />


        {/* Creaciones */}
        {/* Analistas */}
        <Route path="/epicas-analistas/crear-epicas" element={<CrearEpicas />} />
        <Route path="/historias-analistas/crear-historias" element={<CrearHistorias />} />
        <Route path="/plantillas-analistas/crear-plantillas" element={<CrearPlantillas />} />
        <Route path="/criterios-analistas/crear-criterios" element={<CrearCriterios />} />
        <Route path="/proyectos-analistas/crear-proyectos" element={<CrearProyectos />} />

        {/* Ver */}
        {/* Analistas */}
        <Route path="/epicas-analistas/ver-epicas" element={<VerEpicas />} />
        <Route path="/historias-analistas/ver-historias" element={<VerHU />} />
        <Route path="/plantillas-analistas/ver-plantillas" element={<VerPlantillas />} />
        <Route path="/proyectos-analistas/ver-proyectos" element={<VerProyectos />} />
      </Routes>
    </Router>
  );
}

export default App;
