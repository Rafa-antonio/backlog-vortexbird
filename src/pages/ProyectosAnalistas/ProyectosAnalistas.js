import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProyectosAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';

const ProyectosAnalistas = (props) => (
  <div className={styles.ProyectosAnalistas}>
    <MenuLateral nombre={props.nombre} />
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div>

      </div>
    </div>
  </div>
);

ProyectosAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string
};

ProyectosAnalistas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyectos'
};

export default ProyectosAnalistas;
