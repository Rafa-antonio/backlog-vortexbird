import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TablaVer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Iconos
import { faE } from '@fortawesome/free-solid-svg-icons';
import { faH } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faV } from '@fortawesome/free-solid-svg-icons';
import { faHighlighter } from '@fortawesome/free-solid-svg-icons';

// Service
import ProyectosService from '../../services/Proyectos.Service/Proyectos.Service';
import EpicasService from '../../services/Epicas.Service/Epicas.Service';

const TablaVer = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  // Función eliminar proyecto
  function eliminarProyectos(id) {
    ProyectosService.deleteProyectos(id)
      .then(datos => {
        props.funcionesHandle[0](datos.data);
        alert('¡El proyecto ha sido eliminado con éxito!');
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar eliminar un proyecto');
      })
  }

  // Función editar proyecto
  function editarProyectos(proyecto) {
    navigate('/proyectos-analistas/ver-proyectos/editar-proyectos', { state: {
        nombre: location.state.nombre, 
        correo: location.state.correo,
        id: proyecto.id,
        nombreProyecto: proyecto.nombre,
        descripcion: proyecto.descripcion
      }
    })
  }

  function irEpicas(proyecto) {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas', {
      state: {
        nombre: location.state ? location.state.nombre : props.nombre,
        correo: location.state ? location.state.correo : props.correo,
        idProyecto: proyecto.id
      }
    });
  }

  function irVersionesEpicas(epica) {
    navigate('/proyectos-epicas/ver-proyectos/epicas-analistas/ver-epicas/versiones-epicas', {
      state: {
        nombre: location.state.nombre,
        correo: location.state.correo,
        idProyecto: epica.id_proyecto,
        idEpica: epica.id
      }
    })
  }

  function eliminarEpicas(idEpica, idProyecto) {
    EpicasService.deleteEpicas(idEpica, idProyecto)
      .then(datos => {
        console.log(datos);
        props.funcionesHandle[0](datos.data);
        alert('¡Se ha eliminado la épica con éxito!');
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un erro al intentar eliminar las épicas');
      })
  }

  function editarEpicas(epica) {

  }

  return (
    <table>
      <thead>
        <tr>
        {
          props.columnasTabla.map((x, i) => {

            return (
              <th>{x}</th>
            );
          })
        }
        </tr>
      </thead>
      <tbody>
        {
          props.filas.map((x, i) => {
            return (
              <tr>
                {
                  props.keys.map((y, n) => {
                    if (x[y] != null) {
                      return (
                        <td>{x[y]}</td>
                      )
                    } else {
                      return (
                        <td>{'No asociado'}</td>
                      )
                    }
                    
                  })
                }

                {
                  // Ver proyectos
                  props.elementoVer == 1 ?
                    <td>
                      <div className={styles.ColumnaAcciones}>
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() =>  irEpicas(x)} icon={faE} />
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={faH} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarProyectos(x.id)} icon={faTrashCan} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarProyectos(x)} icon={faPen} />
                      </div>
                    </td>
                  :
                  // Ver criterios
                  props.elementoVer == 2 ?
                    <td>
                      <div className={styles.ColumnaAcciones}>
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() =>  irEpicas(x)} icon={faE} />
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={faH} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarProyectos(x.id)} icon={faTrashCan} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarProyectos(x)} icon={faPen} />
                      </div>
                    </td>
                  :
                  // Ver Plantillas
                  props.elementoVer == 3 ?
                    <td>
                      <div className={styles.ColumnaAcciones}>
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() =>  irEpicas(x)} icon={faE} />
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={faH} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarProyectos(x.id)} icon={faTrashCan} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarProyectos(x)} icon={faPen} />
                      </div>
                    </td>
                  :
                  // Ver epicas
                  props.elementoVer == 4 ?
                  <td>
                    <div className={styles.ColumnaAcciones}>
                      <FontAwesomeIcon className={styles.IconoAcciones} onClick={() =>  irVersionesEpicas(x)} icon={faV} />
                      <FontAwesomeIcon className={styles.IconoAcciones} icon={faH} />
                      <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarEpicas(x.id, x.id_proyecto)} icon={faTrashCan} />
                      <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarEpicas(x)} icon={faPen} />
                    </div>
                  </td>
                :
                // Ver HU'S
                props.elementoVer == 5 ?
                <td>
                  <div className={styles.ColumnaAcciones}>
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() =>  irEpicas(x)} icon={faE} />
                    <FontAwesomeIcon className={styles.IconoAcciones} icon={faH} />
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarProyectos(x.id)} icon={faTrashCan} />
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarProyectos(x)} icon={faPen} />
                  </div>
                </td>
                :
                // Versiones Epicas
                props.elementoVer == 6 ?
                  // Verificamos si ya es lineaBase o no
                  x.lineaBase == 0 ?
                    <td>
                      <div className={styles.ColumnaAcciones1}>
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={ faHighlighter } />
                      </div>
                    </td>
                  :
                  <td>
                    Es la línea base
                  </td>
                :
                props.elementoVer == 7 ?
                <td>
                  <div className={styles.ColumnaAcciones}>
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() =>  irEpicas(x)} icon={faE} />
                    <FontAwesomeIcon className={styles.IconoAcciones} icon={faH} />
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarProyectos(x.id)} icon={faTrashCan} />
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarProyectos(x)} icon={faPen} />
                  </div>
                </td>
                :
                ''
                }

              </tr>
            )
          })  
        }
      </tbody>
    </table>
  )};

TablaVer.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  keys: PropTypes.array,
  elementoVer: PropTypes.number
};

TablaVer.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',
  columnasTabla: [
    'Id', 'Correo del usuario', 'Resumen', 'Tipo incidencia', 'Estimación original'
  ],
  filas: [],
  keys: [],
  /*
    elementoVer = 1 --> Proyecto
    elementoVer = 2 --> Criterio
    elementoVer = 3 --> Plantilla
    elementoVer = 4 --> Epicas
    elementoVer = 5 --> HU's
    elementoVer = 6 --> Versiones epicas
    elementoVer = 7 --> Versiones HUS
  */
  elementoVer: 1
};

export default TablaVer;
