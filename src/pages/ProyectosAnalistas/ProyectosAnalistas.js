import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProyectosAnalistas.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuLateralAnalistas from '../../components/MenuLateralAnalistas/MenuLateralAnalistas';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const ProyectosAnalistas = (props) => {

  const location = useLocation();

  let navigate = useNavigate();
  function irCrear() {
    if (location.state) {
      navigate('/proyectos-analistas/crear-proyectos', { state: { nombre: location.state.nombre, correo: location.state.correo}});
    } else {
      navigate('/proyectos-analistas/crear-proyectos', { state: { nombre: props.nombre, correo: props.correo }});
    }
  }

  function irVerProyectos() {
    if (location.state) {
      navigate('/proyectos-analistas/ver-proyectos', { state: { nombre: location.state.nombre, correo: location.state.correo}});
    } else {
      navigate('/proyectos-analistas/ver-proyectos', { state: { nombre: props.nombre, correo: props.correo }});
    }
  }

  return (
    <div className={styles.ProyectosAnalistas}>
      <MenuLateralAnalistas nombre={location.state ? location.state.nombre : 'Usuario'} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <Boton texto={props.texto[0]} onClick={irCrear} />
          <Boton texto={props.texto[1]} icono={faFileExport} />
          <Boton texto={props.texto[2]} icono={faFileExport} />
          <Boton texto={props.texto[3]} onClick={irVerProyectos} icono={faFolder} />
        </div>
      </div>
    </div>
  )};

ProyectosAnalistas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto:  PropTypes.array
};

ProyectosAnalistas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyectos',
  texto: [
    'Crear proyecto', 
    'Asignar HU',
    'Asignar épica',
    'Proyectos'
    ]
};

export default ProyectosAnalistas;
