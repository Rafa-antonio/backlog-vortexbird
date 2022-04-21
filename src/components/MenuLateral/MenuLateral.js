import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLateral.module.css';

const MenuLateral = () => (
  <div className={styles.MenuLateral}>

    <div className={styles.Perfil}>
        <img className={styles.UsuarioAnalista} src="usuario-analista-crop.png" />
        <p className={styles.ParrafoBienvenida}>Bienvenida, Ingrid</p>
        <button className={styles.BotonCerrarSesion}>Cerrar sesión</button>      
    </div>

    <div className={styles.Submenu}>
      <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">Épicas</a></li>
        <li><a href="">Historias de usuario</a></li>
        <li><a href="">Criterios de aceptactión</a></li>
        <li><a href="">Proyectos</a></li>
      </ul>
    </div>
  </div>
);

MenuLateral.propTypes = {};

MenuLateral.defaultProps = {};

export default MenuLateral;
