import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearElemento.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CrearElemento = (props) => (
  <div className={styles.CrearElemento}>
    <FontAwesomeIcon className={styles.Icono} icon={faPlus} />
    <p>Crear {props.elemento}</p>
  </div>
);

CrearElemento.propTypes = {
  elemento: PropTypes.string
};

CrearElemento.defaultProps = {
  elemento: 'elemento'
};

export default CrearElemento;
