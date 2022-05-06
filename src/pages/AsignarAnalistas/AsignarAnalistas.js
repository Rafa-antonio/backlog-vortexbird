import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AsignarAnalistas.module.css';
import { useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioAsignar from '../../components/FormularioAsignar/FormularioAsignar';

// Services
import TrabajosService from '../../services/Trabajos.Service/Trabajos.Service';

const AsignarAnalistas = (props) => {

  const location = useLocation();
  const[correoUsuario, setCorreoUsuario] = useState(0);
  const[idProyecto, setIdProyecto] = useState(0);

  function clickAsignar() {
    // Formato para Mysql
    let fechaAsignacion = new Date().toISOString();
    fechaAsignacion = fechaAsignacion.replace('T', ' ');
    fechaAsignacion = fechaAsignacion.replace('Z', '');

    TrabajosService.postTrabajos(idProyecto, correoUsuario, fechaAsignacion)
      .then(respuesta => {        
        if (respuesta.data) {
          alert('¡Analista asignado con éxito!');
        } else {
          alert('El analista ya ha sido asignado a ese proyecto');
        }
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al crear trabajos');
      })
  }

  function handleCorreoUsuario(event) {
    setCorreoUsuario(event.target.value);
  }

  function handleIdProyecto(event) {
    setIdProyecto(event.target.value);
  }

  return (
  <div className={styles.AsignarAnalistas}>
    <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } correo={location.state ? location.state.correo : props.correo} submenus={props.submenus} tipo={props.tipo}/>

    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <FormularioAsignar funcionesSet={[setCorreoUsuario, setIdProyecto]} funcionesHandle={[handleCorreoUsuario, handleIdProyecto]} asignarCual={2} />

        <button className={styles.BotonCrear} onClick={clickAsignar}>Asignar</button>
      </div>
    </div>
  </div>
)};

AsignarAnalistas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  funcionesHandle: PropTypes.array,
  tipo: PropTypes.number,
  submenus: PropTypes.array
};

AsignarAnalistas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',
  tipo: 1,
  titulo: 'Proyectos/Asignar analista',
  urlImagen: '../usuario-analista-crop.png',
  funcionesHandle: [
    'handleCorreoUsuario',
    'handleIdProyecto'
  ],
  submenus: [
    'Inicio', 'Proyectos'
  ]
};

export default AsignarAnalistas;
