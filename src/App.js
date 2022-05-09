import React from 'react';
import Login from './pages/Login/Login';

// Homes
import HomeAnalistas from './pages/HomeAnalistas/HomeAnalistas';
import HomeGerentes from './pages/HomeGerentes/HomeGerentes';

// Diferentes secciones
// Gerentes
import ProyectosGerentes from './pages/ProyectosGerentes/ProyectosGerentes';
import AsignarAnalistas from './pages/AsignarAnalistas/AsignarAnalistas';
import AsignarArquitectos from './pages/AsignarArquitectos/AsignarArquitectos';
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
import VerCriterios from './pages/VerCriterios/VerCriterios';
import VerPlantillas from './pages/VerPlantillas/VerPlantillas';
import VerProyectos from './pages/VerProyectos/VerProyectos';

// Editar
import EditarProyectos from './pages/EditarProyectos/EditarProyectos';
import EditarEpicas from './pages/EditarEpicas/EditarEpicas';
import EditarCriterios from './pages/EditarCriterios/EditarCriterios';
import EditarPlantillas from './pages/EditarPlantillas/EditarPlantillas';

// Versiones épicas
import VersionesEpicas from './pages/VersionesEpicas/VersionesEpicas';

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

        {/* Diferentes secciones */}
        {/* Gerentes */}
        <Route path='/proyectos-gerentes' element={<ProyectosGerentes />} />
        <Route path='/proyectos-gerentes/asignar-analistas' element={<AsignarAnalistas />} />
        <Route path='/proyectos-gerentes/asignar-arquitectos' element={<AsignarArquitectos />} />
        {/* Analistas */}
        <Route path="/proyectos-analistas/ver-proyectos/epicas-analistas" element={<EpicasAnalistas />} />
        <Route path="/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas" element={<HistoriasAnalistas />} />
        <Route path="/plantillas-analistas" element={<PlantillasAnalistas />} />
        <Route path="/criterios-analistas" element={<CriteriosAnalistas />} />
        <Route path="/proyectos-analistas" element={<ProyectosAnalistas />} />


        {/* Creaciones */}
        {/* Gerentes */}
        <Route path="/epicas-gerentes/crear-epicas" element={<CrearEpicas />} />
        <Route path="/historias-gerentes/crear-historias" element={<CrearHistorias />} />
        <Route path="/plantillas-gerentes/crear-plantillas" element={<CrearPlantillas />} />
        <Route path="/criterios-gerentes/crear-criterios" element={<CrearCriterios />} />
        <Route path="/proyectos-gerentes/crear-proyectos" element={<CrearProyectos />} />
        {/* Analistas */}
        <Route path="/proyectos-analistas/ver-proyectos/epicas-analistas/crear-epicas" element={<CrearEpicas />} />
        <Route path="/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/crear-historias" element={<CrearHistorias />} />
        <Route path="/plantillas-analistas/crear-plantillas" element={<CrearPlantillas />} />
        <Route path="/criterios-analistas/crear-criterios" element={<CrearCriterios />} />
        <Route path="/proyectos-analistas/crear-proyectos" element={<CrearProyectos />} />

        {/* Ver */}
        {/* Gerentes */}
        <Route path="/epicas-gerentes/ver-epicas" element={<VerEpicas />} />
        <Route path="/historias-gerentes/ver-historias" element={<VerHU />} />
        <Route path="/plantillas-gerentes/ver-plantillas" element={<VerPlantillas />} />
        <Route path="/proyectos-gerentes/ver-proyectos" element={<VerProyectos />} />
        {/* Analistas */}
        <Route path="/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas" element={<VerEpicas />} />
        <Route path="/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/ver-historias" element={<VerHU />} />
        <Route path="/criterios-analistas/ver-criterios" element={<VerCriterios />} />
        <Route path="/plantillas-analistas/ver-plantillas" element={<VerPlantillas />} />
        <Route path="/proyectos-analistas/ver-proyectos" element={<VerProyectos />} />

        {/* Ediciones */}
        <Route path="/proyectos-analistas/ver-proyectos/editar-proyectos" element={<EditarProyectos />} />
        <Route path="/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/editar-epicas" element={<EditarEpicas />} />
        <Route path="/criterios-analistas/ver-criterios/editar-criterios" element={<EditarCriterios />} />
        <Route path="/plantillas-analistas/ver-plantillas/editar-plantillas" element={<EditarPlantillas />} />

        {/* Versiones */}
        <Route path="/proyectos-epicas/ver-proyectos/epicas-analistas/ver-epicas/versiones-epicas" element={<VersionesEpicas />} />

      </Routes>
    </Router>
  );
}

export default App;
