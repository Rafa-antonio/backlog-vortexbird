import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HistoriasAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const HistoriasAnalistas = (props) => {

  const location = useLocation();
  const navigate = useNavigate(); 

  function clickCrear() {
    if (location.state) {
      navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/crear-historias',
       { 
         state: 
         { 
           nombre: location.state.nombre, 
           correo: location.state.correo, 
           idProyecto: location.state.idProyecto, 
           idEpica: location.state.idEpica 
          }
        });

    } else {
      navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/crear-historias',
       { 
         state: 
         { 
           nombre: props.nombre, 
           correo: props.correo, 
           idProyecto: location.state.idProyecto, 
           idEpica: location.state.idEpica 
          }
        });
    }
  }

  function irVerHistorias() {
    if (location.state) {
      navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/ver-historias', 
      { 
        state: 
        { 
          nombre: location.state.nombre, 
          correo: location.state.correo, 
          idProyecto: location.state.idProyecto, 
          idEpica: location.state.idEpica 
        }
      });
    } else {
      navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/ver-historias',
       { 
         state: 
         { 
           nombre: props.nombre, 
           correo: props.correo, 
           idProyecto: location.state.idProyecto, 
           idEpica: location.state.idEpica 
          }
        });
    }
  }

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas', { state: location.state});
  }

  return (
  <div className={styles.HistoriasAnalistas}>
    <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } correo={location.state ? location.state.correo : props.correo}/>
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
      <div className={styles.SegundoContenedorPagina}>
        <Boton texto={props.texto[0]} onClick={clickCrear} />        
        <Boton texto={props.texto[2]} onClick={irVerHistorias} icono={faFolder} />
      </div>
    </div>
  </div>
  )};

HistoriasAnalistas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  texto: PropTypes.array
};

HistoriasAnalistas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: '.../HUS',
  urlImagen: '../../../../usuario-analista-crop.png',
  texto: [
    'Crear historia',
    'HU a proyecto',
    "HU's"
  ]
};

export default HistoriasAnalistas;
