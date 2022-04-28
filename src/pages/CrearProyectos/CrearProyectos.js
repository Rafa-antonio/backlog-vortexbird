import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearProyectos.module.css';
import { useNavigate } from 'react-router-dom';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

const CrearProyectos = (props) => {

  let navigate = useNavigate();
  function clickCrear(){ 
    navigate('/proyectos-analistas/proyectos-historias');
  }

  return (
    <div className={styles.CrearProyectos} onClick={props.onClick}>
      <MenuLateral urlImagen={props.urlImagen} />

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
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

CrearProyectos.defaultProps = {
  nombre: 'Usuario',

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
