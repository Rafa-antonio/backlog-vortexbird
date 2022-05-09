import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearCriterios.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

const CrearCriterios = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  function clickCrear() {
    alert('Se presionó click en crear!');
  }

  function irAtras() {
    navigate('/criterios-analistas', { state: location.state });
  }

  return (
    <div className={styles.CrearCriterios}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.correo ? location.state.correo : props.correo} />

        <div className={styles.ContenedorPagina}>
          <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
          <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear labelsInputs={props.labelsInputs}/>

          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
    </div>
  )};

CrearCriterios.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

CrearCriterios.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Criterios/Crear criterio',
  urlImagen: '../usuario-analista-crop.png',
  labelsInputs: [
    ['usuario', 'Usuario', 'El usuario quien realiza el criterio es...'],
    ['objetivo', 'Objetivo', 'La HU debe cumplir con el objetivo de...']
  ]
};

export default CrearCriterios;
