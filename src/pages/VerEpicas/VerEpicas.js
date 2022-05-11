import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './VerEpicas.module.css';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import TablaVer from '../../components/TablaVer/TablaVer';

// Service
import EpicasService from '../../services/Epicas.Service/Epicas.Service';

const VerEpicas = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [epicas, setEpicas] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {    
    let idProyecto = location.state.idProyecto;
    EpicasService.obtenerEpicas(idProyecto)
      .then(datos => {
          if (datos.data.length > 0) {
            setKeys(Object.keys(datos.data[0]));
            setEpicas(datos.data);
          } else {
            alert('No se encontraron épicas en la base de datos.');
          }
        })
      .catch(err => {
        alert('Ocurrió un error');
        console.log(err);
    })  
  }, []);

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas', { state: location.state});
  }

  return (
    <div className={styles.VerEpicas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>

        <TablaVer 
          funcionesHandle={[setEpicas]}
          columnasTabla={props.columnasTabla} 
          filas={epicas} 
          keys={keys} 
          elementoVer={4}/>
      </div>
    </div>
  )};

VerEpicas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  key: PropTypes.array
};

VerEpicas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyectos/Ver Proyectos/Épicas/Ver Épicas',
  urlImagen: '../../../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Correo del usuario', 'Id proyecto asociado', 'Resumen', 'Tipo incidencia', 'Estimación original', 'Acciones'
  ],
  filas: [],
  key: []
};

export default VerEpicas;
