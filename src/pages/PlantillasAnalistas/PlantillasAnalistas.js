import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlantillasAnalistas.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const PlantillasAnalistas = (props) => {

  const location = useLocation();

  let navigate = useNavigate();
  function irCrear() {
    if (location.state) {
      navigate('/plantillas-analistas/crear-plantillas', {state: { nombre: location.state.nombre, correo: location.state.correo }} );
    } else {
      navigate('/plantillas-analistas/crear-plantillas', {state: { nombre: props.nombre, correo: props.correo }} );
    }
  }

  function irVerPlantillas() {
    if (location.state) {
      navigate('/plantillas-analistas/ver-plantillas', {state: { nombre: location.state.nombre, correo: location.state.correo }} );
    } else {
      navigate('/plantillas-analistas/ver-plantillas', {state: { nombre: props.nombre, correo: props.correo }} );
    }
  }

  return (
    <div className={styles.PlantillasAnalistas}>
      <MenuLateral nombre={location.state ? location.state.nombre : 'Usuario'} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <Boton texto={props.texto[0]} onClick={irCrear}/>
          <Boton texto={props.texto[1]} icono={faFileArrowDown} />
          <Boton texto={props.texto[2]} icono={faFileArrowDown} />
          <Boton texto={props.texto[3]} onClick={irVerPlantillas}  icono={faFolder} />
        </div>
      </div>
    </div>
  )};

PlantillasAnalistas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto: PropTypes.array
};

PlantillasAnalistas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Plantillas',
  texto: [
    'Crear plantilla',
    'Plantilla a épica',
    'Plantilla a HU',
    'Plantillas'
  ]
};

export default PlantillasAnalistas;
