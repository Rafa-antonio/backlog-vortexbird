import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './VerCriterios.module.css';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import TablaVer from '../../components/TablaVer/TablaVer';

// Service
import CriteriosService from '../../services/Criterios.Service/Criterios.Service';

const VerCriterios = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [criterios, setCriterios] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {    
    CriteriosService.obtenerCriterios()
      .then(datos => {
          if (datos.data.length > 0) {
            setKeys(Object.keys(datos.data[0]));
            setCriterios(datos.data);
          } else {
            alert('No se encontraron épicas en la base de datos.');
          }
        })
      .catch(err => {
        alert('Ocurrió un error al intentar obtener los criterios');
        console.log(err);
    })  
  }, []);

  function irAtras() {
    navigate('/criterios-analistas', { state: location.state});
  }

  return (
    <div className={styles.VerCriterios}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>

        <TablaVer funcionesHandle={[setCriterios]}
        columnasTabla={props.columnasTabla} 
        filas={criterios} 
        keys={keys} 
        elementoVer={2}/>
      </div>
    </div>
  )};

VerCriterios.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  key: PropTypes.array
};

VerCriterios.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Criterios/Ver Criterios',
  urlImagen: '../../../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Usuario', 'Objetivo', 'Acciones'
  ],
  filas: [],
  key: []
};

export default VerCriterios;
