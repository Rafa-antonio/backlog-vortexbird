import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearPlantillas.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import FormularioCrearPlantilla from '../../components/FormularioCrearPlantilla/FormularioCrearPlantilla';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

const CrearPlantillas = (props) => {

  const location = useLocation();

  let navigate = useNavigate();
  function clickCrear(){ 
    navigate('/plantillas-analistas/crear-plantillas');
  }

  return (
  <div className={styles.CrearPlantillas}>
    <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } />

    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <FormularioCrearPlantilla />
        <BotonCrearElemento onClick={clickCrear} />
      </div>
    </div>
  </div>
  )};

CrearPlantillas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string
};

CrearPlantillas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Plantillas/Crear plantillas',
  urlImagen: '../usuario-analista-crop.png'
};

export default CrearPlantillas;
