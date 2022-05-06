import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './FormularioAsignar.module.css';

// Services
import UsuariosService from '../../services/Usuarios.Service/Usuarios.Service';
import ProyectosService from '../../services/Proyectos.Service/Proyectos.Service';

const FormularioAsignar = (props) => {

  const[analistas, setAnalistas] = useState([]);
  const[arquitectos, setArquitectos] = useState([]);
  const[proyectos, setProyectos] = useState([]);
  const location = useLocation();

  useEffect(() => {

    console.log(analistas);
    console.log('ARQUI');
    console.log(arquitectos);

    // Asginar a analistas o asignar a arquitectos?
    // Analistas --> 2
    // Arquitectos --> 3
    let asignarCual = props.asignarCual;

    if (asignarCual == 2) {
      UsuariosService.getAnalistas()
        .then(datosAnalistas => {

          ProyectosService.getProyectos()
            .then(datosProyectos => {
              if (datosProyectos.data.length > 0) {
                setProyectos(datosProyectos.data);
              } else {
                console.log(datosProyectos.data);
                alert('Al parecer no existen proyectos en la base de datos');
              }
            })
            .catch(err => {
              console.log(err);
              alert('Ocurrió un error al intentar obtener los proyectos.');
            })

          if (datosAnalistas.data.length > 0) {
            setAnalistas(datosAnalistas.data);
          } else {
            console.log(datosAnalistas.data);
            alert('Al parecer no existen analistas en la base de datos.');
          }
        })
        .catch(err => {
          console.log(err);
          alert('Ocurrió un error al intentar obtener analistas para asignar a un proyecto.');
        })

    } else if (asignarCual == 3) {
      UsuariosService.getArquitectos()
        .then(datosArquitectos => {

          

          if (datosArquitectos.data.length > 0) {
            setArquitectos(datosArquitectos.data);
          } else {
            console.log(datosArquitectos.data);
            alert('Al parecer no existen arquitectos en la base de datos.');
          }
        })
        .catch(err => {
          console.log(err);
          alert('Ocurrió un error al intentar obtener arquitectos para asignar a un proyecto.');
        })
    } else {
      alert('Ocurrió un error al determinar el tipo de usuario que se debe asignar.')
    }
  }, []);

  return (
    <form className={styles.FormularioAsignar}>
      <label>{analistas != undefined ? 'Analistas' : 'Arquitectos'}</label>
      <select onChange={props.funcionesHandle[0]} >
        {
          analistas != undefined ? 
            analistas.map((analista, index) => {
              return (
                <option value={analista.correo}>{analista.nombre}</option>
              );
            }) 
          :
            arquitectos != undefined ?
              arquitectos.map((arquitecto, index) => {
                return (
                  <option value={arquitecto.correo}>{arquitecto.nombre}</option>
                );
              })
            :
            <option value={0}>
              {
                arquitectos == undefined ?
                  'No se encontraron analistas'
                :
                  'No se encontraron arquitectos'
              }
            </option>
        }
      </select>
      <label>Proyectos</label>
      <select onChange={props.funcionesHandle[1]} >
        {
          proyectos != undefined ?
            proyectos.map((proyecto, index) => {
              return (
                <option value={proyecto.id}>{proyecto.nombre}</option>
              );
            })
          :
            <option value={0}>No se encontraron proyectos</option> 
        }
      </select>
    </form>
  )};

FormularioAsignar.propTypes = {
  asignarCual: PropTypes.number,
  funcionesHandle: PropTypes.array

};

FormularioAsignar.defaultProps = {
  asignarCual: 2,
  funcionesHandle: [
    'handleCorreoUsuario',
    'handleIdProyecto'
  ]
};

export default FormularioAsignar;
