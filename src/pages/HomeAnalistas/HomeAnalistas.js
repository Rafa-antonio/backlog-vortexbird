import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HomeAnalistas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';

import TrabajosService from '../../services/Trabajos.Service/Trabajos.Service';

const HomeAnalistas = (props) => {
  const location = useLocation();
  const [losProyectos, setLosProyectos] = useState([]);

  useEffect(() => {

    let correo = location.state ? location.state.correo : correo.props;

    TrabajosService.getTrabajos(correo)
      .then(datos => {
        if (datos.data.length > 0) {
          setLosProyectos(datos.data);
        } else {
          alert('No hay trabajos asignados para ti en la base de datos');
        }
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener los trabajos correspondientes al analista');
      })
  }, [])

  return (
  <div className={styles.HomeAnalistas}>
    <MenuLateral nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo}/>

    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo='Inicio - Analistas' esSubmenu={true}/>
      <div className={styles.SegundoContenedorPagina}>
        <h1>¡Bienvenid@ analista {location.state ? location.state.nombre : props.nombre}!</h1>
        <div className={styles.TablaTrabajos}>
          <h1>
            Estos son tus trabajos asignados:
          </h1>

          <div>
            <h2>
              Id proyecto
            </h2>

            <h2>
              Correo del usuario asginado
            </h2>

            <h2>
              Fecha de asignación
            </h2>

            <h2>
              Fecha de finalización
            </h2>
          </div>

          <div>
            { 
              losProyectos.map((proyecto, i) => {

                return (
                  <>
                  <h2>{proyecto.id}</h2>
                  <h2>{proyecto.correo_usuario}</h2>
                  <h2>{proyecto.fechaAsignacion}</h2>
                  <h2>{proyecto.fechaFinalizacion}</h2>
                  </>
                )
            })
            } 
          </div>
        </div>
      </div>
    </div>
  </div>
  )};

HomeAnalistas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string
};

HomeAnalistas.defaultProps = {
  nombre: "Usuario",
  correo: "prueba@hotmail.com"
};

export default HomeAnalistas;
