import React from 'react';
import PropTypes from 'prop-types';
import styles from './CriteriosAnalistas.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const CriteriosAnalistas = (props) => {

  const location = useLocation();

  let navigate = useNavigate();
  function irCrear() {
    if (location.state) {
      navigate('/criterios-analistas/crear-criterios', { state: { nombre: location.state.nombre } });
    } else {
      navigate('/criterios-analistas/crear-criterios', { state: { nombre: props.nombre } });
    }
  }

  return (
    <div className={styles.CriteriosAnalistas}>
      <MenuLateral nombre={location.state ? location.state.nombre : props.nombre} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <Boton texto={props.texto[0]} onClick={irCrear}/>
          <Boton texto={props.texto[1]} icono={faFileArrowDown} />
          <Boton texto={props.texto[2]} icono={faFolder} />
        </div>
      </div>
    </div>
  )};

CriteriosAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto: PropTypes.array
};

CriteriosAnalistas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Criterios de aceptación',
  texto: [
    'Crear criterio', 
    'Asignar a HU',
    'Criterios'
  ]
};

export default CriteriosAnalistas;
