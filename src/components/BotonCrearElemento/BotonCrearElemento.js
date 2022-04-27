import React from 'react';
import PropTypes from 'prop-types';
import styles from './BotonCrearElemento.module.css';

const BotonCrearElemento = (props) => {



  return (
  <div className={styles.BotonCrearElemento} onClick={props.onClick}>
    Crear
  </div>
  )};

BotonCrearElemento.propTypes = {
  onClick: PropTypes.string
};

BotonCrearElemento.defaultProps = {
  onClick: 'clickCrear'
};

export default BotonCrearElemento;
