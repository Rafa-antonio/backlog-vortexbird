import React from 'react';
import PropTypes from 'prop-types';
import styles from './EpicasAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import CrearElemento from '../../components/CrearElemento/CrearElemento';

const EpicasAnalistas = (props) => (
  <div className={styles.EpicasAnalistas}>
    <MenuLateral nombre={props.nombre} />
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <CrearElemento elemento={props.elemento}/>
      </div>
    </div>
  </div>
);

EpicasAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string
};

EpicasAnalistas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Épicas',
  elemento: 'épica'
};

export default EpicasAnalistas;
