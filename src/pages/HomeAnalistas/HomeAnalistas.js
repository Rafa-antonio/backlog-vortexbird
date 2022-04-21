import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';

const HomeAnalistas = () => (
  <div className={styles.HomeAnalistas}>
    <MenuLateral />

    {/* Header */}
    <h1 className={styles.Header}>
      Inicio - Analistas
    </h1>
  </div>
);

HomeAnalistas.propTypes = {};

HomeAnalistas.defaultProps = {};

export default HomeAnalistas;
