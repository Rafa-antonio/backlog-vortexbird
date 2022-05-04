import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CrearProyectos.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

const CrearProyectos = (props) => {

  const location = useLocation();

  let navigate = useNavigate();
  function clickCrear(){ 
    
  }

  return (
    <div className={styles.CrearProyectos} onClick={props.onClick}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } correo={location.state ? location.state.correo : props.correo }/>

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear labelsInputs={props.labelsInputs}/>
          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
      
    </div>  
  )};

CrearProyectos.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

CrearProyectos.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyecto/Crear proyecto',
  urlImagen: '../usuario-analista-crop.png',
  labelsInputs: [
    ['nombre', 'Nombre', 'El nombre del proyecto es'],
    ['descripcion', 'Descripción', 'Este proyecto trata acerca de...']
  ]
};

export default CrearProyectos;
