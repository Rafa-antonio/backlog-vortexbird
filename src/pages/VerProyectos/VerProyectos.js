import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerProyectos.module.css';
import { useLocation } from 'react-router-dom';

const VerProyectos = () => {

  const location = useLocation();

  return (
    <div className={styles.VerProyectos}>
      VerProyectos Component
    </div>
  )};

VerProyectos.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string
};

VerProyectos.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com'
};

export default VerProyectos;
