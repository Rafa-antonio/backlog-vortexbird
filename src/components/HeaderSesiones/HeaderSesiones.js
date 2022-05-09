import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderSesiones.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const HeaderSesiones = (props) => {

  return (
    <div className={styles.HeaderSesiones}>
      {props.titulo}
      {
        props.esSubmenu == false ? 
          <FontAwesomeIcon icon={faArrowLeftLong} onClick={props.onClick} className={styles.FlechaIcono} />
        :
          ''
      }
    </div>
  )};

HeaderSesiones.propTypes = {
  titulo: PropTypes.string,
  onClick: PropTypes.func,
  esSubmenu: PropTypes.bool
};

HeaderSesiones.defaultProps = {
  titulo: 'Bienvenido',
  onClick: 'irAtras',
  esSubmenu: false
};

export default HeaderSesiones;
