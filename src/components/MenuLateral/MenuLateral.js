import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLateral.module.css';
import { useNavigate } from 'react-router-dom';

const MenuLateral = (props) => {

  let navigate = useNavigate();
  function cerrarSesion() {
    navigate('/', { state: { nombre: props.nombre, correo: props.correo } });
  }

  function irInicio() {
    navigate('/home-analistas', { state: { nombre: props.nombre, correo: props.correo } });
  }

  function irEpicas(){
    navigate('/epicas-analistas', { state: { nombre: props.nombre, correo: props.correo } });
  }

  function irHistorias() {
    navigate('/historias-analistas', { state: { nombre: props.nombre, correo: props.correo } });
  }

  function irCriterios() {
    navigate('/criterios-analistas', { state: { nombre: props.nombre, correo: props.correo } });
  }

  function irProyectos() {
    navigate('/proyectos-analistas', { state: { nombre: props.nombre, correo: props.correo } });
  }

  function irPlantillas() {
    navigate('/plantillas-analistas', { state: { nombre: props.nombre, correo: props.correo } });
  }

  return (
  <div className={styles.MenuLateral}>

    <div className={styles.Perfil}>
        <img className={styles.UsuarioAnalista} src={props.urlImagen} />
        <p className={styles.ParrafoBienvenida}>Bienvenid@, {props.nombre}</p>
        <button className={styles.BotonCerrarSesion} onClick={cerrarSesion}>Cerrar sesión</button>      
    </div>

    <div className={styles.Submenu}>
      <ul>
        <li><a onClick={irInicio}>Inicio</a></li>
        <li><a onClick={irEpicas}>Épicas</a></li>
        <li><a onClick={irHistorias}>Historias de usuario</a></li>
        <li><a onClick={irPlantillas}>Plantillas</a></li>
        <li><a onClick={irCriterios}>Criterios de aceptactión</a></li>
        <li><a onClick={irProyectos}>Proyectos</a></li>
      </ul>
    </div>
  </div>
  )};

MenuLateral.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  urlImagen: PropTypes.string
};

MenuLateral.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',
  urlImagen: 'usuario-analista-crop.png'
};

export default MenuLateral;
