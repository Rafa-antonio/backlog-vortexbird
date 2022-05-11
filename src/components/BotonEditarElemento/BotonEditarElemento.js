import React from 'react';
import PropTypes from 'prop-types';
import styles from './BotonEditarElemento.module.css';

const BotonEditarElemento = (props) => {  

  return (
    <div className={styles.BotonEditarElemento} onClick={props.onClick}>
      Actualizar
    </div>
  )};

BotonEditarElemento.propTypes = {
  onClick: PropTypes.func
};

BotonEditarElemento.defaultProps = {
  onClick: 'clickEditar'
};

export default BotonEditarElemento;
