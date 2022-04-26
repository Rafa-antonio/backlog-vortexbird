import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlantillasAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const PlantillasAnalistas = (props) => (
  <div className={styles.PlantillasAnalistas}>
    <MenuLateral nombre={props.nombre} />
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <Boton texto={props.texto[0]} />
        <Boton texto={props.texto[1]} icono={faFileArrowDown} />
        <Boton texto={props.texto[2]} icono={faFolder} />
      </div>
    </div>
  </div>
);

PlantillasAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto: PropTypes.array
};

PlantillasAnalistas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Plantillas',
  texto: [
    'Crear plantilla',
    'Plantilla a épica o HU',
    'Plantillas'
  ]
};

export default PlantillasAnalistas;
