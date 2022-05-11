import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, UNSAFE_NavigationContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EditarEpicas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioEditar from '../../components/FormularioEditar/FormularioEditar';
import BotonEditarElemento from '../../components/BotonEditarElemento/BotonEditarElemento';

// Service
import EpicasService from '../../services/Epicas.Service/Epicas.Service';

const EditarEpicas = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const[id, setId] = useState(0);
  const [resumen, setResumen] = useState('');
  const [tipoIncidencia, setTipoIncidencia] = useState('');
  const [estimacionOriginal, setEstimacionOriginal] = useState('');

  function handleResumen(e) {
    setResumen(e.target.value);
  }

  function handleTipoIncidencia(e) {
    setTipoIncidencia(e.target.value);
  }

  function handleEstimacionOriginal(e) {
    setEstimacionOriginal(e.target.value);
  }

  function clickEditar() {
    EpicasService.putEpicas(id, resumen, tipoIncidencia, estimacionOriginal)
      .then(datos => {
        if (datos.data) {
          alert('¡Se realizo la actualización con éxito!');
          navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas', {
            state: location.state
          });
        }
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar actualizar el la épica');
      })
  }

  useEffect(() => {
    setId(location.state.idEpica);
    setResumen(location.state.resumen);
    setTipoIncidencia(location.state.tipoIncidencia);
    setEstimacionOriginal(location.state.estimacionOriginal);
  }, []);

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas', { state: location.state });
  }

  return (
    <div className={styles.EditarEpicas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo } submenus={location.state ? location.state.submenus : props.submenus} tipo={location.state ? location.state.tipo : props.tipo}/>

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
        <div className={styles.SegundoContenedorPagina}>
          <FormularioEditar labelsInputs={props.labelsInputs} 
            funcionesHandle={[handleResumen, handleTipoIncidencia, handleEstimacionOriginal]}            
            values={[resumen, tipoIncidencia, estimacionOriginal]}
          />

          <BotonEditarElemento onClick={clickEditar} />
        </div>
      </div>
    </div>
  )};

EditarEpicas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array,  
  submenus: PropTypes.array
};

EditarEpicas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: '.../Editar Épicas',
  urlImagen: '../../../../usuario-analista-crop.png',
  labelsInputs: [
    ['resumen', 'Nuevo resumen', 'De manera resumida...'],
    ['tipoIncidencia', 'Nuevo tipo de incidencia', 'El tipo de incidencia de esta épica es...'],
    ['estimacionOriginal', 'Nueva estimación original', 'La estimación original...']
  ],
  submenus: [
    'Inicio', 'Proyectos', 'Criterios', 'Plantillas'
  ]
};

export default EditarEpicas;
