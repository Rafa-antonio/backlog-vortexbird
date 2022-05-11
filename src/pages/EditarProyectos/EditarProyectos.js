import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, UNSAFE_NavigationContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EditarProyectos.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioEditar from '../../components/FormularioEditar/FormularioEditar';
import BotonEditarElemento from '../../components/BotonEditarElemento/BotonEditarElemento';

// Service
import ProyectosService from '../../services/Proyectos.Service/Proyectos.Service';

const EditarProyectos = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const[id, setId] = useState(0);
  const[nombre, setNombre] = useState('');
  const[descripcion, setDescripcion] = useState('');

  function handleNombre(event) {
    setNombre(event.target.value);    
  }

  function handleDescripcion(event) {
    setDescripcion(event.target.value);
  }

  function clickEditar() {
    ProyectosService.putProyectos(id, nombre, descripcion)
      .then(datos => {
        if (datos.data) {
          alert('¡Se realizo la actualización con éxito!');
          navigate('/proyectos-analistas/ver-proyectos', {
            state: location.state
          });
        }
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar actualizar el proyecto');
      })
  }

  
  useEffect(() => {
    setId(location.state.id);
    setNombre(location.state.nombreProyecto);
    setDescripcion(location.state.descripcion);
  }, [])
  
  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos', { state: location.state });
  }

  return (
    <div className={styles.EditarProyectos}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo } submenus={location.state ? location.state.submenus : props.submenus} tipo={location.state ? location.state.tipo : props.tipo}/>

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
        <div className={styles.SegundoContenedorPagina}>
          <FormularioEditar labelsInputs={props.labelsInputs} 
            funcionesHandle={[handleNombre, handleDescripcion]}            
            values={[nombre, descripcion]}
          />

          <BotonEditarElemento onClick={clickEditar} />
        </div>
      </div>
    </div>
  )};

EditarProyectos.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array,  
  submenus: PropTypes.array,
};

EditarProyectos.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyectos/Ver Proyectos/Editar proyectos',
  urlImagen: '../../usuario-analista-crop.png',
  labelsInputs: [
    ['nombre', 'Nuevo nombre', 'El nombre del proyecto es...'],
    ['descripcion', 'Nueva descripción', 'Este proyecto trata acerca de...']
  ],
  submenus: [
    'Inicio', 'Proyectos', 'Criterios', 'Plantillas'
  ]
};

export default EditarProyectos;
