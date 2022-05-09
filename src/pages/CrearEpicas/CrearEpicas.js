import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CrearEpicas.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

// Service
import EpicasService from '../../services/Epicas.Service/Epicas.Service';

const CrearEpicas = (props) => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [resumen, setResumen] = useState('');
  const [tipoIncidencia, setTipoIncidencia] = useState('');
  const [estimacionOriginal, setEstimacionOriginal] = useState('');
  const[campoResumen, setCampoResumen] = React.useState(styles.BordesNegros);
  const[campoTipoIncidencia, setCampoTipoIncidencia] = React.useState(styles.BordesNegros);
  const[campoEstimacionOriginal, setCampoEstimacionOriginal] = React.useState(styles.BordesNegros);
  const[visibleAdvertenciaResumen, setVisibleAdvertenciaResumen] = React.useState(styles.VisibleFalse);
  const[visibleAdvertenciaTipoIncidencia, setVisibleAdvertenciaTipoIncidencia] = React.useState(styles.VisibleFalse);
  const[visibleAdvertenciaEstimacionOriginal, setVisibleAdvertenciaEstimacionOriginal] = React.useState(styles.VisibleFalse);

  function handleResumen(e) {
    setResumen(e.target.value);
    setCampoResumen(styles.BordesNegros);
    setVisibleAdvertenciaResumen(styles.VisibleFalse);
  }

  function handleTipo(e) {
    setTipoIncidencia(e.target.value);
    setCampoTipoIncidencia(styles.BordesNegros);
    setVisibleAdvertenciaTipoIncidencia(styles.VisibleFalse);
  }

  function handleEstimacion(e) {
    setEstimacionOriginal(e.target.value);
    setCampoEstimacionOriginal(styles.BordesNegros);
    setVisibleAdvertenciaEstimacionOriginal(styles.VisibleFalse);
  }

  function clickCrear() {

    // Verificamos que el campo resumen no esté vacío
    if (resumen == '') {
      setCampoResumen(styles.BordesRojos);
      setVisibleAdvertenciaResumen(styles.VisibleTrue);
    } else {
      setCampoResumen(styles.BordesNegros);
      setVisibleAdvertenciaResumen(styles.VisibleFalse);
    }

    // Verificamos que el campo tipoIncidencia no esté vacío
    if (tipoIncidencia == '') {
      setCampoTipoIncidencia(styles.BordesRojos);
      setVisibleAdvertenciaTipoIncidencia(styles.VisibleTrue);
    } else {
      setCampoTipoIncidencia(styles.BordesNegros);
      setVisibleAdvertenciaTipoIncidencia(styles.VisibleFalse);
    }

    // Verificamos que el campo estimacionOriginal no esté vacío
    if (estimacionOriginal == '') {
      setCampoEstimacionOriginal(styles.BordesRojos);
      setVisibleAdvertenciaEstimacionOriginal(styles.VisibleTrue);
    } else {
      setCampoEstimacionOriginal(styles.BordesNegros);
      setVisibleAdvertenciaEstimacionOriginal(styles.VisibleFalse);
    }

    
    if (resumen != '' && tipoIncidencia != '' && estimacionOriginal != '') {
      let correo = location.state ? location.state.correo : props.correo;
      let idProyecto = location.state.idProyecto;
      let respuesta = EpicasService.crearEpicas(correo, idProyecto, resumen, tipoIncidencia, estimacionOriginal);
  
      respuesta
        .then((datos) => {
          let seCreoEpica = datos.data.epica;
          let seCreoVersionEpica = datos.data.version_epica;
  
          if (seCreoEpica && seCreoVersionEpica) {
            alert('¡Se ha creado con éxito la épica!');
            setResumen('');
            setTipoIncidencia('');
            setEstimacionOriginal('');
          } else {
            alert('¡Se ha creado con éxito la épica (Sin su versión inicial)!');
            setResumen('');
            setTipoIncidencia('');
            setEstimacionOriginal('');
          }
        })
        .catch((err) => {
          alert('Ocurrió un error al momento de intentar crear la épica.');
        })
    } else {
      alert('Por favor digite todos los campos para crear la épica.')
    }
        
  }

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas', { state: location.state });
  }

  return (
    <div className={styles.CrearEpicas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
        <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear 
            labelsInputs={props.labelsInputs}
            funcionesHandle={[handleResumen, handleTipo, handleEstimacion]} 
            values={[resumen, tipoIncidencia, estimacionOriginal]} 
            campos={[campoResumen, campoTipoIncidencia, campoEstimacionOriginal]}  
            visibles={[visibleAdvertenciaResumen, visibleAdvertenciaTipoIncidencia, visibleAdvertenciaEstimacionOriginal]} 
            textoAdvertencia={props.textoAdvertencia}
          />

          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
    </div>
  )};

CrearEpicas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array,
  funcionesHandle: PropTypes.array,
  textoAdvertencia: PropTypes.array
};

CrearEpicas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Proyectos/Ver Proyectos/Épicas/Crear épica',
  urlImagen: '../../../usuario-analista-crop.png',
  textoAdvertencia: [
    'El resumen de la épica es requerida',
    'El tipo de incidencia de la épica es requerida',
    'La estimación original de la épica es requerida'
  ],
  labelsInputs: [
    ['resumen', 'Resumen*', 'De manera resumida...'],
    ['tipoIncidencia', 'Tipo de incidencia*', 'El tipo de incidencia de esta épica es...'],
    ['estimacionOriginal', 'Estimación original*', 'La estimación original...']
  ]
};

export default CrearEpicas;
