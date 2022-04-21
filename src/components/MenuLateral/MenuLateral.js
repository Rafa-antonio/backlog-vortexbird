import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLateral.module.css';

const MenuLateral = () => (
  <div className={styles.MenuLateral}>

    <div className={styles.Perfil}>
      <img />
      <p></p>
      <p></p>
    </div>

    <div className={styles.Submenu}>
      <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </div>
  </div>
);

MenuLateral.propTypes = {};

MenuLateral.defaultProps = {};

export default MenuLateral;
