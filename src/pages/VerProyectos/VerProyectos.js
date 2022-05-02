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

VerProyectos.propTypes = {};

VerProyectos.defaultProps = {};

export default VerProyectos;
