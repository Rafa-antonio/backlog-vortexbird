import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearEpicas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';

const CrearEpicas = (props) => (
  <div className={styles.CrearEpicas}>
    <MenuLateral urlImagen={props.urlImagen} nombre={props.nombre} />
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <form>
          <label forHTML="resumen">Resumen</label>
          <input name="resumen" id="resumen" type="text" placeholder="De manera resumida..."/>
          <label forHTML="tipoIncidencia">Tipo de incidencia</label>
          <input name="tipoIncidencia" id="tipoIncidencia" type="text" placeholder="El tipo de incidencia de esta épica es..." />
          <label forHTML="estimacionOriginal">Estimación original</label>
          <input name="estimacionOriginal" id="estimacionOriginal" type="text" placeholder="La estimación original..." />
        </form>
      </div>
    </div>
  </div>
);

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
