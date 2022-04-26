import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoriasAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';

const HistoriasAnalistas = (props) => (
  <div className={styles.HistoriasAnalistas}>
    <MenuLateral nombre={props.nombre} />
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div>

      </div>
    </div>
  </div>
);

HistoriasAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string
};

HistoriasAnalistas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Historias de usuario'
};

export default HistoriasAnalistas;
