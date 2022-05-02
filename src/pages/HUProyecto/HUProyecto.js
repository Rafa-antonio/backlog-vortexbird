import React from 'react';
import PropTypes from 'prop-types';
import styles from './HUProyecto.module.css';
import { useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';

const HUProyecto = () => {

  const location = useLocation();

  return (
    <div className={styles.HUProyecto}>
      HUProyecto Component
    </div>
  )};

HUProyecto.propTypes = {};

HUProyecto.defaultProps = {};

export default HUProyecto;
