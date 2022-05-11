import React, { useLayoutEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CrearProyectos.module.css';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

// Service
import ProyectosService from '../../services/Proyectos.Service/Proyectos.Service';

const CrearProyectos = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const[nombre, setNombre] = useState('');
  const[descripcion, setDescripcion] = useState('');
  const[campoNombre, setCampoNombre] = React.useState(styles.BordesNegros);
  const[campoDescripcion, setCampoDescripcion] = React.useState(styles.BordesNegros);
  const[visibleAdvertenciaNombre, setVisibleAdvertenciaNombre] = React.useState(styles.VisibleFalse);
  const[visibleAdvertenciaDescripcion, setVisibleAdvertenciaDescripcion] = React.useState(styles.VisibleFalse);

  function handleNombre(event) {
    setNombre(event.target.value);
    setCampoNombre(styles.BordesNegros);
    setVisibleAdvertenciaNombre(styles.VisibleFalse);
  }

  function handleDescripcion(event) {
    setDescripcion(event.target.value);
    setCampoDescripcion(styles.BordesNegros);
    setVisibleAdvertenciaDescripcion(styles.VisibleFalse);
  }

  function clickCrear(){
    // Verificamos que el campo usuario no esté vacío
    if (nombre == '') {
      setCampoNombre(styles.BordesRojos);
      setVisibleAdvertenciaNombre(styles.VisibleTrue);
    } else {
      setCampoNombre(styles.BordesNegros);
      setVisibleAdvertenciaNombre(styles.VisibleFalse);
    }

    // Verificamos que el campo contrasena no esté vacío
    if (descripcion == '') {
      setCampoDescripcion(styles.BordesRojos);
      setVisibleAdvertenciaDescripcion(styles.VisibleTrue);
    } else {
      setCampoDescripcion(styles.BordesNegros);
      setVisibleAdvertenciaDescripcion(styles.VisibleFalse);
    }


    if (nombre != '' && descripcion != '') {
      ProyectosService.postProyectos(nombre, descripcion)
        .then(datos => {
          alert('¡El proyecto ha sido creado!');
          setNombre('');
          setDescripcion('');
        })
        .catch(err => {
          console.log(err);
          alert('Ocurrió un error al intentar crear un proyecto');
        })
    } else {
      alert('Por favor complete todos los campos para crear el proyecto');
    }
  }

  function irAtras() {
    navigate('/proyectos-analistas', { state: location.state });
  }

  return (
    <div className={styles.CrearProyectos} onClick={props.onClick}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo } submenus={location.state ? location.state.submenus : props.submenus} tipo={location.state ? location.state.tipo : props.tipo}/>

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
        <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear labelsInputs={props.labelsInputs} 
            funcionesHandle={[handleNombre, handleDescripcion]}
            values={[nombre, descripcion]} 
            campos={[campoNombre, campoDescripcion]}  
            visibles={[visibleAdvertenciaNombre, visibleAdvertenciaDescripcion]} 
            textoAdvertencia={props.textoAdvertencia}
          />

          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
      
    </div>  
  )};

CrearProyectos.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array,
  submenus: PropTypes.array,
  textoAdvertencia: PropTypes.array
};

CrearProyectos.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyecto/Crear proyecto',
  urlImagen: '../usuario-analista-crop.png',
  labelsInputs: [
    ['nombre', 'Nombre*', 'El nombre del proyecto es'],
    ['descripcion', 'Descripción*', 'Este proyecto trata acerca de...']
  ],
  submenus: [
    'Inicio', 'Proyectos', 'Criterios', 'Plantillas'
  ],
  textoAdvertencia: [
    'El nombre del proyecto es requerido',
    'La descripción del proyecto es requerida'
  ]
};

export default CrearProyectos;
