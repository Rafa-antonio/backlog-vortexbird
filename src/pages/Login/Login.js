import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import Header from '../../components/Header/Header';

const Login = () => (
  <div className={styles.Login}>
    <Header></Header>
    <div className={styles.Section}>
      <form className={styles.Formulario}>
        <label>Correo electrónico o usuario</label>
        <input type="text" name="email" id="email" />
        <label>Contraseña</label>
        <input type="password" name="password" id="password" />
        <button>Acceder</button>
      </form>
    </div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
