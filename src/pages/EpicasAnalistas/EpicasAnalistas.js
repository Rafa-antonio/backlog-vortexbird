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

  let navigate = useNavigate();
  function irCrear() {
    if (location.state) {
      navigate('/epicas-analistas/crear-epicas', { state: { nombre: location.state.nombre }});
    } else {
      navigate('/epicas-analistas/crear-epicas', { state: { nombre: props.nombre }});
    }
  }

  function irVerEpicas() {
    navigate('/epicas-analistas/ver-epicas');
    if (location.state) {
      navigate('/epicas-analistas/ver-epicas', { state: { nombre: location.state.nombre }});
    } else {
      navigate('/epicas-analistas/ver-epicas', { state: { nombre: props.nombre }});
    }
  }

  return (
    <div className={styles.EpicasAnalistas}>
      <MenuLateral nombre={location.state ? location.state.nombre : props.nombre } />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <Boton onClick={irCrear} texto={props.texto[0]} />
          <Boton texto={props.texto[1]} icono={faFileArrowDown} />
          <Boton onClick={irVerEpicas} texto={props.texto[2]} icono={faFolder} />
        </div>
      </div>
    </div>
  )};

EpicasAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto: PropTypes.array
};

EpicasAnalistas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Épicas',
  texto: [
    'Crear épica',
    'Épica a proyecto',
    'Epicas'
  ]
};

export default EpicasAnalistas;
