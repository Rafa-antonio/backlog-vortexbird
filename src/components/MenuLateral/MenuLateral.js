import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLateral.module.css';
import { useNavigate } from 'react-router-dom';

const MenuLateral = (props) => {

  let navigate = useNavigate();
  function cerrarSesion() {
    navigate('/', { state: { nombre: props.nombre } });
  }

  function irInicio() {
    navigate('/home-analistas', { state: { nombre: props.nombre } });
  }

  function irEpicas(){
    navigate('/epicas-analistas', { state: { nombre: props.nombre } });
  }

  function irHistorias() {
    navigate('/historias-analistas', { state: { nombre: props.nombre } });
  }

  function irCriterios() {
    navigate('/criterios-analistas', { state: { nombre: props.nombre } });
  }

  function irProyectos() {
    navigate('/proyectos-analistas', { state: { nombre: props.nombre } });
  }

  function irPlantillas() {
    navigate('/plantillas-analistas', { state: { nombre: props.nombre } });
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
  urlImagen: PropTypes.string
};

MenuLateral.defaultProps = {
  nombre: 'Usuario',
  urlImagen: 'usuario-analista-crop.png'
};

export default MenuLateral;
