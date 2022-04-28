import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearHistorias.module.css';
import { useNavigate } from 'react-router-dom';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

const CrearHistorias = (props) => {

  let navigate = useNavigate();
  function clickCrear(){ 
    navigate('/historias-analistas/crear-historias');
  }

  return (
    <div className={styles.CrearHistorias} onClick={props.onClick}>
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

CrearHistorias.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

CrearHistorias.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'HU/Crear HU',
  urlImagen: '../usuario-analista-crop.png',
  labelsInputs: [
    ['usuario', 'Usuario', 'El usuario de esta HU...'],
    ['necesidad', 'Necesidad', 'La necesidad de este usuario es...'],
    ['objetivo', 'Objetivo', 'El objetivo es...']
  ]
};

export default CrearHistorias;
