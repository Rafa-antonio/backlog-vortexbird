import React from 'react';
import PropTypes from 'prop-types';
import styles from './Boton.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Boton = (props) => {
  return (
    <div onClick={props.onClick} className={styles.CrearElemento} >
      <FontAwesomeIcon className={styles.Icono} icon={props.icono} />
      <p>{props.texto}</p>
    </div>
  )};

Boton.propTypes = {
  texto: PropTypes.string,
  icono: PropTypes.element
};

Boton.defaultProps = {
  texto: 'Crear',
  icono: faPlus
};

export default Boton;
