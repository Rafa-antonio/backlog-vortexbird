import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProyectosAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

const ProyectosAnalistas = (props) => (
  <div className={styles.ProyectosAnalistas}>
    <MenuLateral nombre={props.nombre} />
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <Boton texto={props.texto[0]}/>
        <Boton texto={props.texto[1]} icono={faFileExport} />
      </div>
    </div>
  </div>
);

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
    'Asignar HU'
    ]
};

export default ProyectosAnalistas;
