import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './VerEpicas.module.css';
import { useLocation } from 'react-router-dom';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import EpicasService from '../../services/Epicas.Service/Epicas.Service';
import TablaVer from '../../components/TablaVer/TablaVer';

const VerEpicas = (props) => {

  const location = useLocation();
  const [epicas, setEpicas] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    EpicasService.obtenerEpicas()
      .then(datos => {
          setKeys(Object.keys(datos.data[0]));
          setEpicas(datos.data);
        })
      .catch(err => {
        alert('Ocurrió un error');
        console.log(err);
    })  
  }, [])

  return (
    <div className={styles.VerEpicas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />

        <TablaVer columnasTabla={props.columnasTabla} filas={epicas} keys={keys} />
      </div>
    </div>
  )};

VerEpicas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array
};

VerEpicas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Épicas/Ver Épicas',
  urlImagen: '../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Correo del usuario', 'Resumen', 'Tipo incidencia', 'Estimación original'
  ]
};

export default VerEpicas;
