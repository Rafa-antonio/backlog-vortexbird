import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoriasAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { useNavigate, useLocation } from 'react-router-dom';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const HistoriasAnalistas = (props) => {

  const location = useLocation();

  let navigate = useNavigate(); 
  function clickCrear() {
    if (location.state) {
      navigate('/historias-analistas/crear-historias', { state: { nombre: location.state.nombre }});
    } else {
      navigate('/historias-analistas/crear-historias', { state: { nombre: props.nombre }});
    }
  }

  return (
  <div className={styles.HistoriasAnalistas}>
    <MenuLateral nombre={location.state ? location.state.nombre : props.nombre } />
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <Boton texto={props.texto[0]} onClick={clickCrear} />
        <Boton texto={props.texto[1]} icono={faFileArrowDown} />
        <Boton texto={props.texto[2]} icono={faFolder} />
      </div>
    </div>
  </div>
  )};

HistoriasAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto: PropTypes.array
};

HistoriasAnalistas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Historias de usuario',
  texto: [
    'Crear historia',
    'HU a proyecto',
    "HU's"
  ]
};

export default HistoriasAnalistas;
