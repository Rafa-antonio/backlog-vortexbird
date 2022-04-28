import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearCriterios.module.css';
import { useNavigate } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

const CrearCriterios = (props) => {

  let navigate = useNavigate();
  function clickCrear() {
    alert('Se presionó click en crear!');
  }

  return (
    <div className={styles.CrearCriterios}>
      <MenuLateral urlImagen={props.urlImagen} nombre={props.nombre} />

        <div className={styles.ContenedorPagina}>
          <HeaderSesiones titulo={props.titulo} />
          <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear labelsInputs={props.labelsInputs}/>

          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
    </div>
  )};

CrearCriterios.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

CrearCriterios.defaultProps = {
  nombre: 'Usuario',

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
