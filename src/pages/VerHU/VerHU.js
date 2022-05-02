import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './VerHU.module.css';
import { useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import TablaVer from '../../components/TablaVer/TablaVer.js';

// Services
import HistoriasService from '../../services/Historias.Service/Historias.Service';


const VerHU = (props) => {

  const location = useLocation();
  const [hus, setHUS] = useState([]);
  const[keys, setKeys] = useState([]);

  useEffect(() => {
    HistoriasService.obtenerHistorias()
      .then(datos => {
        setKeys(Object.keys(datos.data[0]));
        setHUS(datos.data);
      })
      .catch(err => {
        alert('Ocurrió un error al intentar obtener las historias de usuario');
        console.log(err);
      })
  }, []);

  return (
    <div className={styles.VerHU}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />

        <TablaVer columnasTabla={props.columnasTabla} filas={hus} keys={keys} />
      </div>
    </div>
  )};

VerHU.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array,
};

VerHU.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: "HU/Ver HU'S",
  urlImagen: '../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Usuario', 'Necesidad', 'Objetivo'
  ]
};

export default VerHU;
