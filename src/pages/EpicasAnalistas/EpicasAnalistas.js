import React from 'react';
import PropTypes from 'prop-types';
import styles from './EpicasAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { useNavigate, useLocation } from 'react-router-dom';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const EpicasAnalistas = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  function irCrear() {    
    if (location.state) {
      navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/crear-epicas', { state: { nombre: location.state.nombre, correo: location.state.correo, idProyecto: location.state.idProyecto }});
    } else {
      navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/crear-epicas', { state: { nombre: props.nombre, correo: props.correo, idProyecto: location.state.idProyecto }});
    }
  }

  function irVerEpicas() {
    if (location.state) {
      navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas', { state: { nombre: location.state.nombre, correo: location.state.correo, idProyecto: location.state.idProyecto }});
    } else {
      navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas', { state: { nombre: props.nombre, correo: props.correo, idProyecto: location.state.idProyecto }});
    }
  }

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos', { state: location.state });
  }

  return (
    <div className={styles.EpicasAnalistas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras} />
        <div className={styles.SegundoContenedorPagina}>
          <Boton onClick={irCrear} texto={props.texto[0]} />
          <Boton onClick={irVerEpicas} texto={props.texto[1]} icono={faFolder} />
        </div>
      </div>
    </div>
  )};

EpicasAnalistas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  texto: PropTypes.array
};

EpicasAnalistas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',
  urlImagen: '../../../usuario-analista-crop.png',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyectos/Ver Proyectos/Épicas',
  texto: [
    'Crear épica',
    'Epicas'
  ]
};

export default EpicasAnalistas;
