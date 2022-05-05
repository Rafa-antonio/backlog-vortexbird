import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './VerHU.module.css';
import { useLocation } from 'react-router-dom';
import MenuLateralAnalistas from '../../components/MenuLateralAnalistas/MenuLateralAnalistas';
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

        if (datos.data.length > 0) {
          setKeys(Object.keys(datos.data[0]));
          setHUS(datos.data);
        } else {
          alert('No se encontrar Historias de usuario en la base de datos.');
        }
      })
      .catch(err => {
        alert('Ocurrió un error al intentar obtener las historias de usuario');
        console.log(err);
      })
  }, []);

  return (
    <div className={styles.VerHU}>
      <MenuLateralAnalistas urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />

        <TablaVer columnasTabla={props.columnasTabla} filas={hus} keys={keys} />
      </div>
    </div>
  )};

VerHU.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  keys: PropTypes.array
};

VerHU.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: "HU/Ver HU'S",
  urlImagen: '../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Id épica asociada', 'Id plantilla asociada', 'Usuario', 'Necesidad', 'Objetivo'
  ],
  filas: [],
  keys: []
};

export default VerHU;
