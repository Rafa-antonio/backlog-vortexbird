import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CrearHistorias.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

// Service
import HistoriasService from '../../services/Historias.Service/Historias.Service';
import CriteriosService from '../../services/Criterios.Service/Criterios.Service';
import PlantillasService from '../../services/Plantillas.Service/Plantillas.Service';

const CrearHistorias = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [necesidad, setNecesidad] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [elCriterio, setElCriterio] = useState('');
  const [laPlantilla, setLaPlantilla] = useState('');
  const [criterios, setCriterios] = useState([]);
  const [plantillas, setPlantillas] = useState([]);
  const [campoUsuario, setCampoUsuario] = React.useState(styles.BordesNegros);
  const [campoNecesidad, setCampoNecesidad] = React.useState(styles.BordesNegros);
  const [campoObjetivo, setCampoObjetivo] = React.useState(styles.BordesNegros);
  const [visibleAdvertenciaUsuario, setVisibleAdvertenciaUsuario] = React.useState(styles.VisibleFalse);
  const [visibleAdvertenciaNecesidad, setVisibleAdvertenciaNecesidad] = React.useState(styles.VisibleFalse);
  const [visibleAdvertenciaObjetivo, setVisibleAdvertenciaObjetivo] = React.useState(styles.VisibleFalse);

  function handleUsuario(e) {
    setUsuario(e.target.value);
    setCampoUsuario(styles.BordesNegros);
    setVisibleAdvertenciaUsuario(styles.VisibleFalse);
  }

  function handleNecesidad(e) {
    setNecesidad(e.target.value);
    setCampoNecesidad(styles.BordesNegros);
    setVisibleAdvertenciaNecesidad(styles.VisibleFalse);
  }

  function handleObjetivo(e) {
    setObjetivo(e.target.value);
    setCampoObjetivo(styles.BordesNegros);
    setVisibleAdvertenciaObjetivo(styles.VisibleFalse);
  }

  function handleElCriterio(e){
    setElCriterio(e.target.value);
  }

  function handleLaPlantilla(e) {
    setLaPlantilla(e.target.value);
  }

  function clickCrear(){ 

    if (usuario == '') {
      setCampoUsuario(styles.BordesRojos);
      setVisibleAdvertenciaUsuario(styles.VisibleTrue);
    } else {
      setCampoUsuario(styles.BordesNegros);
      setVisibleAdvertenciaUsuario(styles.VisibleFalse);
    }

    if (necesidad == '') {
      setCampoNecesidad(styles.BordesRojos);
      setVisibleAdvertenciaNecesidad(styles.VisibleTrue);
    } else {
      setCampoNecesidad(styles.BordesNegros);
      setVisibleAdvertenciaNecesidad(styles.VisibleFalse);
    }

    if (objetivo == '') {
      setCampoObjetivo(styles.BordesRojos);
      setVisibleAdvertenciaObjetivo(styles.VisibleTrue);
    } else {
      setCampoObjetivo(styles.BordesNegros);
      setVisibleAdvertenciaObjetivo(styles.VisibleFalse);
    }

    if (usuario != '' && necesidad != '' && objetivo != '') {
      let respuesta = HistoriasService.crearHistorias(usuario, necesidad, objetivo);
  
      respuesta
        .then((datos) => {
          let seCreoHU = datos.data.hu;
          let seCreoVersionHU = datos.data.version_hu;
  
          if (seCreoHU && seCreoVersionHU) {
            alert('¡Se ha creado con éxito la historia de usuario!');
            setUsuario('');
            setNecesidad('');
            setObjetivo('');
          } else {
            alert('¡Se ha creado con éxito la historia de usuario (Sin su versión inicial)!');
            setUsuario('');
            setNecesidad('');
            setObjetivo('');
          }
        })
        .catch((err) => {
          alert('Ocurrió un error al momento de intentar crear la historia de usuario.');
        })
    } else {
      alert('Por favor digite todos los campos requeridos');
    }
  }

  useEffect(() => {
    // Obtener criterios y plantillas
    CriteriosService.obtenerCriterios()
    .then(datos => {
      setCriterios(datos.data);
    })
    .catch(err => {
      console.log(err);
      alert('Ocurrió un error al intentar obtener los criterios para las historias de usuario');
    })

    PlantillasService.obtenerPlantillas()
      .then(datos => {
        setPlantillas(datos.data);
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener las plantillas para las historias de usuario');
      })
  }, []);

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas', 
    {
      state: location.state      
    })
  }

  return (
    <div className={styles.CrearHistorias} onClick={props.onClick}>
      <MenuLateral urlImagen={props.urlImagen}  nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
        <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear 
            labelsInputs={props.labelsInputs} 
            funcionesHandle={[handleUsuario, handleNecesidad, handleObjetivo, handleElCriterio, handleLaPlantilla]} 
            values={[usuario, necesidad, objetivo]}
            campos={[campoUsuario, campoNecesidad, campoObjetivo]}  
            visibles={[visibleAdvertenciaUsuario, visibleAdvertenciaNecesidad, visibleAdvertenciaObjetivo]} 
            textoAdvertencia={props.textoAdvertencia}
            criterios={criterios}
            plantillas={plantillas}
            esHUS={true}
          />

          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
      
    </div>  
  )};

CrearHistorias.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array,
  funcionesHandle: PropTypes.array,
  textoAdvertencia: PropTypes.array
};

CrearHistorias.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'HU/Crear HU',
  urlImagen: '../../../../../usuario-analista-crop.png',
  textoAdvertencia: [
    'El usuario de la HU es requerido',
    'La necesidad de la HU es requerida',
    'El objetivo de la HU es requerido'
  ],
  labelsInputs: [
    ['usuario', 'Usuario*', 'El usuario de esta HU es...'],
    ['necesidad', 'Necesidad*', 'La necesidad de este usuario es...'],
    ['objetivo', 'Objetivo*', 'El objetivo de esta HU es...']
  ]
};

export default CrearHistorias;
