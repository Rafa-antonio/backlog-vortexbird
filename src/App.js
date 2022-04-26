import React from 'react';
import Login from './pages/Login/Login';
import HomeAnalistas from './pages/HomeAnalistas/HomeAnalistas';
import EpicasAnalistas from './pages/EpicasAnalistas/EpicasAnalistas';
import HistoriasAnalistas from './pages/HistoriasAnalistas/HistoriasAnalistas';
import CriteriosAnalistas from './pages/CriteriosAnalistas/CriteriosAnalistas';
import ProyectosAnalistas from './pages/ProyectosAnalistas/ProyectosAnalistas';
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
        <Route path="/epicas-analistas" element={<EpicasAnalistas />} />
        <Route path="/historias-analistas" element={<HistoriasAnalistas />} />
        <Route path="/criterios-analistas" element={<CriteriosAnalistas />} />
        <Route path="/proyectos-analistas" element={<ProyectosAnalistas />} />
      </Routes>
    </Router>
  );
}

export default App;
