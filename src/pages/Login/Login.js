import React  from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import Header from '../../components/Header/Header';
import { useNavigate } from "react-router-dom";
import UsuariosService from '../../services/Usuarios.Service/Usuarios.Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Login() {
  
  const [usuario, setUsuario] = React.useState();
  const [contrasena, setContrasena] = React.useState();
  const [tipoInput, setTipoInput] = React.useState('password');
  const [iconoVerContrasena, seticonoVerContrasena] = React.useState(faEye);
  const [soyRobot, setSoyRobot] = React.useState(true);

  function handleUsuario(event) {
    setUsuario(event.target.value);
  }

  function handleContrasena(event) {
    setContrasena(event.target.value);
  }

  function handleVerContrasena(event) {
    if (tipoInput == 'password') {
      seticonoVerContrasena(faEyeSlash);
      setTipoInput('text');
    } else {
      seticonoVerContrasena(faEye);      
      setTipoInput('password');
    }    
  }

  function handleSoyRobot(){
    setSoyRobot(!soyRobot);
  }

  let navigate = useNavigate();
  function IniciarSesion(e) {

    e.preventDefault();
    if (soyRobot == false) {
      
      let correo = usuario;
      UsuariosService.login(correo, usuario, contrasena)
        .then(datos => {
          if (datos.data.nombre != false) {
            console.log(datos.data);
            navigate('/home-analistas', {
              state: {
                nombre: datos.data.nombre,
                correo: datos.data.correo
              }
            });
          } else {
            alert('Correo/Usuario o contraseña incorrectos.');
          }
        })

        .catch(err => {
          console.log(err);
          alert('Ocurrió un error');
        })
    } else {
      alert('Por favor: confirme que no es un robot.');
    }
  }

  return (
    <div className={styles.Login}>
      <Header></Header>
      <div className={styles.Section}>
        <form className={styles.Formulario} onSubmit={IniciarSesion}>
          <label>Correo electrónico o nombre de usuario</label>
          <input className={styles.Input1} type="text" name="email" id="email" onChange={handleUsuario} />
          <label>Contraseña</label>
          <div className={styles.DivFormulario}>
            <input className={styles.Input2} type={tipoInput} name="password" id="password" onChange={handleContrasena}/>
            <FontAwesomeIcon className={styles.IconoOjo} icon={iconoVerContrasena} onClick={handleVerContrasena} />
          </div>
          <div className={styles.DivNotRobot}>
            <button>Acceder</button>
            <div>
              <input type="checkbox" onClick={handleSoyRobot} />
              <span>No soy un robot</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
