import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderSesiones.module.css';

const HeaderSesiones = (props) => (
  <div className={styles.HeaderSesiones}>
    {props.titulo}
  </div>
);

HeaderSesiones.propTypes = {
  titulo: PropTypes.string
};

HeaderSesiones.defaultProps = {
  titulo: 'Bienvenido'
};

export default HeaderSesiones;
