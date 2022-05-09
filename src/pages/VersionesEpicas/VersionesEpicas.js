import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './VersionesEpicas.module.css';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import TablaVer from '../../components/TablaVer/TablaVer';

// Service
import VersionesEpicasService from '../../services/VersionesEpicasService/VersionesEpicasService';

const VersionesEpicas = (props) => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [versionesEpicas, setVersionesEpicas] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {    
    let idEpica = location.state.idEpica;
    VersionesEpicasService.obtenerVersionesEpicas(idEpica)
      .then(datos => {
          if (datos.data.length > 0) {
            setKeys(Object.keys(datos.data[0]));
            setVersionesEpicas(datos.data);
          } else {
            alert('No se encontraron versiones épicas en la base de datos.');
          }
        })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener las versiones epicas');
    })  
  }, []);

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas', { state: location.state});
  }

  return (
    <div className={styles.VersionesEpicas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>

        <TablaVer 
        funcionesHandle={[setVersionesEpicas]}
        columnasTabla={props.columnasTabla} 
        filas={versionesEpicas} 
        keys={keys} 
        elementoVer={6}/>
      </div>
    </div>
  )};

VersionesEpicas.propTypes = {
  nombre: PropTypes.string,  
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  key: PropTypes.array
};

VersionesEpicas.defaultProps = {
  nombre: 'Usuario',  
  titulo: '.../Versiones Épicas',
  urlImagen: '../../../../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Id de la épica asociada', 'Numero de versión', '¿Linea base?', 'Acciones'
  ],
  filas: [],
  key: []
};

export default VersionesEpicas;
