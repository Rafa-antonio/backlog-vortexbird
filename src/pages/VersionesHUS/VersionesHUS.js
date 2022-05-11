import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './VersionesHUS.module.css';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import TablaVer from '../../components/TablaVer/TablaVer';

// Service
import VersionesHUSService from '../../services/VersionesHUSService/VersionesHUSService';

const VersionesHUS = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [versionesHUS, setVersionesHUS] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {    
    let idHU = location.state.idHU;
    VersionesHUSService.obtenerVersionesHUS(idHU)
      .then(datos => {
          if (datos.data.length > 0) {
            setKeys(Object.keys(datos.data[0]));
            setVersionesHUS(datos.data);
          } else {
            alert('No se encontraron versiones de historias de usuario en la base de datos.');
          }
        })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener las versiones hus');
    })  
  }, []);

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/ver-historias', { state: location.state});
  }

  return (
    <div className={styles.VersionesHUS}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>

        <TablaVer 
          funcionesHandle={[setVersionesHUS]}
          columnasTabla={props.columnasTabla} 
          filas={versionesHUS} 
          keys={keys} 
          elementoVer={7}
        />
      </div>
    </div>
  )};

VersionesHUS.propTypes = {
  nombre: PropTypes.string,  
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  key: PropTypes.array
};

VersionesHUS.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 5,
  titulo: '.../Versiones HUS',
  urlImagen: '../../../../../../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Id de la HU asociada', 'Numero de versión', '¿Linea base?', 'Acciones'
  ],
  filas: [],
  key: []
};

export default VersionesHUS;
