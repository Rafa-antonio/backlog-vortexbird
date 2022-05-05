import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoriasAnalistas.module.css';
import MenuLateralAnalistas from '../../components/MenuLateralAnalistas/MenuLateralAnalistas';
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
      navigate('/historias-analistas/crear-historias', { state: { nombre: location.state.nombre, correo: location.state.correo }});
    } else {
      navigate('/historias-analistas/crear-historias', { state: { nombre: props.nombre, correo: props.correo }});
    }
  }

  function irVerHistorias() {
    if (location.state) {
      navigate('/historias-analistas/ver-historias', { state: { nombre: location.state.nombre, correo: location.state.correo }});
    } else {
      navigate('/historias-analistas/ver-historias', { state: { nombre: props.nombre, correo: props.correo }});
    }
  }

  return (
  <div className={styles.HistoriasAnalistas}>
    <MenuLateralAnalistas nombre={location.state ? location.state.nombre : props.nombre } correo={location.state ? location.state.correo : props.correo}/>
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <Boton texto={props.texto[0]} onClick={clickCrear} />
        <Boton texto={props.texto[1]} icono={faFileArrowDown} />
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
  texto: PropTypes.array
};

HistoriasAnalistas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

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
