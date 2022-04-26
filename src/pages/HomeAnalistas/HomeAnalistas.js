import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';

const HomeAnalistas = () => {

  return (
  <div className={styles.HomeAnalistas}>
    <MenuLateral />

    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo='Inicio - Analistas' />
    </div>
  </div>
  )};

HomeAnalistas.propTypes = {};

HomeAnalistas.defaultProps = {};

export default HomeAnalistas;
