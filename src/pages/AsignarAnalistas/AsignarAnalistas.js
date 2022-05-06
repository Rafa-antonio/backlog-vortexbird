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

  function clickCrear() {    
    TrabajosService.postTrabajos(idProyecto, correoUsuario)
      .then(datos => {
        alert('¡Analista asignado con éxito!');
        console.log(datos);
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
        <FormularioAsignar funcionesHandle={[handleCorreoUsuario, handleIdProyecto]} asignarCual={2} />

        <button className={styles.BotonCrear} onClick={clickCrear}>Asignar</button>
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
