import React from 'react';
import Login from './pages/Login/Login';
import HomeAnalistas from './pages/HomeAnalistas/HomeAnalistas';
import EpicasAnalistas from './pages/EpicasAnalistas/EpicasAnalistas';
import HistoriasAnalistas from './pages/HistoriasAnalistas/HistoriasAnalistas';
import PlantillasAnalistas from './pages/PlantillasAnalistas/PlantillasAnalistas';
import CriteriosAnalistas from './pages/CriteriosAnalistas/CriteriosAnalistas';
import ProyectosAnalistas from './pages/ProyectosAnalistas/ProyectosAnalistas';
import CrearEpicas from './pages/CrearEpicas/CrearEpicas';
import CrearHistorias from './pages/CrearHistorias/CrearHistorias';
import CrearPlantillas from './pages/CrearPlantillas/CrearPlantillas';
import CrearCriterios from './pages/CrearCriterios/CrearCriterios';
import CrearProyectos from './pages/CrearProyectos/CrearProyectos';
import VerEpicas from './pages/VerEpicas/VerEpicas';
import VerHU from './pages/VerHU/VerHU';

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
        <Route path="/" element={<Login />} />
        <Route path="/home-analistas" element={<HomeAnalistas />} />

        {/* Diferentes secciones */}
        <Route path="/epicas-analistas" element={<EpicasAnalistas />} />
        <Route path="/historias-analistas" element={<HistoriasAnalistas />} />
        <Route path="/plantillas-analistas" element={<PlantillasAnalistas />} />
        <Route path="/criterios-analistas" element={<CriteriosAnalistas />} />
        <Route path="/proyectos-analistas" element={<ProyectosAnalistas />} />

        {/* Creaciones */}
        <Route path="/epicas-analistas/crear-epicas" element={<CrearEpicas />} />
        <Route path="/historias-analistas/crear-historias" element={<CrearHistorias />} />
        <Route path="/plantillas-analistas/crear-plantillas" element={<CrearPlantillas />} />
        <Route path="/criterios-analistas/crear-criterios" element={<CrearCriterios />} />
        <Route path="/proyectos-analistas/crear-proyectos" element={<CrearProyectos />} />

        {/* Ver */}
        <Route path="/epicas-analistas/ver-epicas" element={<VerEpicas />} />
        <Route path="/historias-analistas/ver-historias" element={<VerHU />} />
      </Routes>
    </Router>
  );
}

export default App;
