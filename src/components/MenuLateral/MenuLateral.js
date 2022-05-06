import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLateral.module.css';
import { useNavigate } from 'react-router-dom';

const MenuLateral = (props) => {

  let navigate = useNavigate();

  // Ingresa como parámetro el tipo
  // tipo = 1 --> Gerentes
  // tipo = 2 --> Analistas
  // tipo = 3 --> Arquitectos
  function cerrarSesion() {
    navigate('/', { state: { nombre: props.nombre, correo: props.correo } });
  }

  // Todos los usuarios tienen un inicio, por lo tanto se verifica el tipo
  function irInicio() {
    if (props.tipo == 1) {
      navigate('/home-gerentes', { state: { nombre: props.nombre, correo: props.correo } });
    } else if (props.tipo == 2) {
      navigate('/home-analistas', { state: { nombre: props.nombre, correo: props.correo } });
    } else if (props.tipo == 3) {
      navigate('/home-arquitectos', { state: { nombre: props.nombre, correo: props.correo } });
    }
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

  // Gerentes y Analistas pueden acceder a proyectos, por lo tanto se debe verificar el tipo
  function irProyectos() {
    if (props.tipo == 1) {
      navigate('/proyectos-gerentes', { state: { nombre: props.nombre, correo: props.correo } });
    } else if (props.tipo == 2) {
      navigate('/proyectos-analistas', { state: { nombre: props.nombre, correo: props.correo } });      
    }
  }

  function irPlantillas() {
    navigate('/plantillas-analistas', { state: { nombre: props.nombre, correo: props.correo } });
  }

  const arrayFunciones = [irInicio, irProyectos, irCriterios, irPlantillas];

  return (
  <div className={styles.MenuLateral}>

    <div className={styles.Perfil}>
        <img className={styles.UsuarioAnalista} src={props.urlImagen} />
        <p className={styles.ParrafoBienvenida}>Bienvenid@, {props.nombre}</p>
        <button className={styles.BotonCerrarSesion} onClick={cerrarSesion}>Cerrar sesión</button>      
    </div>

    <div className={styles.Submenu}>
      <ul>
        {
          props.submenus.map((x, index) => {
            return (
              <li><a onClick={arrayFunciones[index]}>{props.submenus[index]}</a></li>
            )
          })
        }
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
  urlImagen: 'usuario-analista-crop.png',

  // Por defecto, hablamos de analistas (tipo = 2 --> Analistas)
  tipo: 2,
  submenus: [
    'Inicio', 'Proyectos', 'Criterios', 'Plantillas'
  ]
};

export default MenuLateral;
