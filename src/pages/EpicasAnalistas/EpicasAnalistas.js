import React from 'react';
import PropTypes from 'prop-types';
import styles from './EpicasAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { useNavigate } from 'react-router-dom';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const EpicasAnalistas = (props) => {

  let navigate = useNavigate();
  function irCrear() {
    navigate('/epicas-analistas/crear-epicas');
  }

  return (
    <div className={styles.EpicasAnalistas}>
      <MenuLateral nombre={props.nombre} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <Boton onClick={irCrear} texto={props.texto[0]} />
          <Boton texto={props.texto[1]} icono={faFileArrowDown} />
          <Boton texto={props.texto[2]} icono={faFolder} />
        </div>
      </div>
    </div>
  )};

EpicasAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto: PropTypes.array,
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
