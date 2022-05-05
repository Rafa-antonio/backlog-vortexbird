import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ProyectosGerentes.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import Boton from '../../components/Boton/Boton';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const ProyectosGerentes = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  function irCrear() {
    navigate('/proyectos-gerentes/crear-proyectos', { state: { submenus: props.submenus, tipo: 1 }});
  }

  function irVerProyectos(){
    navigate('/proyectos/ver-proyectos', { state: { submenus: props.submenus, tipo: 1 }});
  }

  function irAsignarAnalistas() {
    navigate('/proyectos-gerentes/asignar-analistas', { state: { submenus: props.submenus, tipo: 1 }});
  }

  function irAsignarArquitectos() {
    navigate('/proyectos-gerentes/asignar-arquitectos', { state: { submenus: props.submenus, tipo: 1 }});
  }

  return (
    <div className={styles.ProyectosGerentes}>
      <MenuLateral nombre={location.state ? location.state.nombre : 'Usuario'} correo={location.state ? location.state.correo : props.correo} submenus={props.submenus} tipo={1}/>

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <Boton texto={props.texto[0]} onClick={irCrear} tipo={1}/>
          <Boton texto={props.texto[1]} onClick={irAsignarAnalistas} icono={faUserPlus} tipo={1}/>
          <Boton texto={props.texto[2]} onClick={irAsignarArquitectos} icono={faUserPlus} tipo={1}/>
          <Boton texto={props.texto[3]} onClick={irVerProyectos} icono={faFolder} tipo={1}/>
        </div>
      </div>
    </div>
  )};

ProyectosGerentes.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  texto:  PropTypes.array,
  submenus: PropTypes.array
};

ProyectosGerentes.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',
  tipo: 1,
  titulo: 'Proyectos',
  texto: [
    'Crear proyecto',
    'Asignar Analista', 
    'Asignar Arquitecto',
    'Proyectos'
    ],
  submenus: [
    'Inicio', 'Proyectos'
  ]
};

export default ProyectosGerentes;
