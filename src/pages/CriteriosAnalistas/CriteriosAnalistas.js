import React from 'react';
import PropTypes from 'prop-types';
import styles from './CriteriosAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';

const CriteriosAnalistas = (props) => (
  <div className={styles.CriteriosAnalistas}>
    <MenuLateral nombre={props.nombre} />
    
    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <Boton texto={props.texto}/>
      </div>
    </div>
  </div>
);

CriteriosAnalistas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto: PropTypes.string
};

CriteriosAnalistas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Criterios de aceptación',
  texto: 'Crear criterio'
};

export default CriteriosAnalistas;
