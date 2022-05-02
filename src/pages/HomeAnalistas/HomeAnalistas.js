import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeAnalistas.module.css';
import { useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';

const HomeAnalistas = (props) => {
  const location = useLocation();
  let nombreRecibido = "Usuario";

  return (
  <div className={styles.HomeAnalistas}>
    <MenuLateral nombre={location.state ? location.state.nombre : 'Usuario'} />

    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo='Inicio - Analistas' />
    </div>
  </div>
  )};

HomeAnalistas.propTypes = {
  nombre: PropTypes.string
};

HomeAnalistas.defaultProps = {
  nombre: "Usuario"
};

export default HomeAnalistas;
