import React  from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import Header from '../../components/Header/Header';
import { useNavigate } from "react-router-dom";
import UsuariosService from '../../services/Usuarios.Service/Usuarios.Service';

function Login() {
  
  const [usuario, setUsuario] = React.useState();
  const [contrasena, setContrasena] = React.useState();

  function handleUsuario(event) {
    setUsuario(event.target.value);
  }

  function handleContrasena(event) {
    setContrasena(event.target.value);
  }

  let navigate = useNavigate();
  function IniciarSesion(e) {
    e.preventDefault();
    UsuariosService.login(usuario, contrasena);
  }

  return (
    <div className={styles.Login}>
      <Header></Header>
      <div className={styles.Section}>
        <form className={styles.Formulario} onSubmit={IniciarSesion}>
          <label>Correo electrónico o nombre de usuario</label>
          <input type="text" name="email" id="email" onChange={handleUsuario} />
          <label>Contraseña</label>
          <input type="password" name="password" id="password" onChange={handleContrasena}/>
          <button>Acceder</button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
