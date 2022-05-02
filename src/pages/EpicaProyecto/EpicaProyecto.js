import React from 'react';
import PropTypes from 'prop-types';
import styles from './EpicaProyecto.module.css';
import { useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones';


const EpicaProyecto = () => {

  const location = useLocation();

    return (
    <div className={styles.EpicaProyecto}>
      EpicaProyecto Component
    </div>
  )};

EpicaProyecto.propTypes = {};

EpicaProyecto.defaultProps = {};

export default EpicaProyecto;
