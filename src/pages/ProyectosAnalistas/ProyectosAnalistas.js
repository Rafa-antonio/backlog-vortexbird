import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProyectosAnalistas.module.css';
import { useNavigate } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const ProyectosAnalistas = (props) => {

  let navigate = useNavigate();
  function irCrear() {
    navigate('/proyectos-analistas/crear-proyectos');
  }

  return (
    <div className={styles.ProyectosAnalistas}>
      <MenuLateral nombre={props.nombre} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <Boton texto={props.texto[0]} onClick={irCrear} />
          <Boton texto={props.texto[1]} icono={faFileExport} />
          <Boton texto={props.texto[2]} icono={faFileExport} />
          <Boton texto={props.texto[3]} icono={faFolder} />
        </div>
      </div>
    </div>
  )};

ProyectosAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto:  PropTypes.array
};

ProyectosAnalistas.defaultProps = {
  nombre: 'Usuario',

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
