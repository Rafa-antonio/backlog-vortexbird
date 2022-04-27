import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearEpicas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CrearEpicas = (props) => {

  const [resumen, setResumen] = useState();
  const [tipoIncidencia, setTipoIncidencia] = useState();
  const [estimacionOriginal, setEstimacionOriginal] = useState();

  function handleResumen(e) {
    setResumen(e.target.value);
  }

  function handleTipo(e) {
    setTipoIncidencia(e.target.value);
  }

  function handleEstimacion(e) {
    setEstimacionOriginal(e.target.value);
  }

  let navigate = useNavigate();
  function clickCrear() {
    alert('Se presionó click en crear!');
    alert(resumen);
    alert(tipoIncidencia);
    alert(estimacionOriginal);
  }

  return (
    <div className={styles.CrearEpicas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={props.nombre} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <form>
            <label forHTML="resumen">Resumen</label>
            <input name="resumen" id="resumen" type="text" placeholder="De manera resumida..." onChange={handleResumen} />
            <label forHTML="tipoIncidencia">Tipo de incidencia</label>
            <input name="tipoIncidencia" id="tipoIncidencia" type="text" placeholder="El tipo de incidencia de esta épica es..." onChange={handleTipo} />
            <label forHTML="estimacionOriginal">Estimación original</label>
            <input name="estimacionOriginal" id="estimacionOriginal" type="text" placeholder="La estimación original..." onChange={handleEstimacion} />
          </form>

          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
    </div>
  )};

CrearEpicas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string
};

CrearEpicas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Épicas/Crear épica',
  urlImagen: '../usuario-analista-crop.png'
};

export default CrearEpicas;
