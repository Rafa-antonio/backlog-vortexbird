import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './VerProyectos.module.css';
import { useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import TablaVer from '../../components/TablaVer/TablaVer';

// Service
import ProyectosService from '../../services/Proyectos.Service/Proyectos.Service';

const VerProyectos = (props) => {

  const location = useLocation();
  const [proyectos, setProyectos] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    ProyectosService.getProyectos()
      .then(datos => {
        if (datos.data.length > 0) {
          setKeys(Object.keys(datos.data[0]));
          setProyectos(datos.data);
        } else {
          alert('No se encontraron proyectos en la base de datos.');
        }
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error');
      })
  }, [])

  return (
    <div className={styles.VerProyectos}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        
        <TablaVer columnasTabla={props.columnasTabla} filas={proyectos} keys={keys} elementoVer={1} />
      </div>
    </div>
  )};

VerProyectos.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  key: PropTypes.array
};

VerProyectos.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyectos/Ver Proyectos',
  urlImagen: '../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Nombre', 'Descripción', 'Id de plantillas', 'Acciones'
  ],
  filas: [],
  key: []
};

export default VerProyectos;
