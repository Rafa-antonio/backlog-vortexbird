import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLateral.module.css';
import { useNavigate } from 'react-router-dom';

const MenuLateral = (props) => {

  const [nombre, setNombre] = React.useState();

  let navigate = useNavigate();
  function cerrarSesion() {
    navigate('/');
  }

  function irInicio() {
    navigate('/home-analistas');
  }

  function irEpicas(){
    navigate('/epicas-analistas');
  }

  function irHistorias() {
    navigate('/historias-analistas');
  }

  function irCriterios() {
    navigate('/criterios-analistas');
  }

  function irProyectos() {
    navigate('/proyectos-analistas');
  }

  return (
  <div className={styles.MenuLateral}>

    <div className={styles.Perfil}>
        <img className={styles.UsuarioAnalista} src="usuario-analista-crop.png" />
        <p className={styles.ParrafoBienvenida}>Bienvenid@, {props.nombre}</p>
        <button className={styles.BotonCerrarSesion} onClick={cerrarSesion}>Cerrar sesión</button>      
    </div>

    <div className={styles.Submenu}>
      <ul>
        <li><a onClick={irInicio}>Inicio</a></li>
        <li><a onClick={irEpicas}>Épicas</a></li>
        <li><a onClick={irHistorias}>Historias de usuario</a></li>
        <li><a onClick={irCriterios}>Criterios de aceptactión</a></li>
        <li><a onClick={irProyectos}>Proyectos</a></li>
      </ul>
    </div>
  </div>
  )};

MenuLateral.propTypes = {
  nombre: PropTypes.string
};

MenuLateral.defaultProps = {
  nombre: 'Usuario'
};

export default MenuLateral;
