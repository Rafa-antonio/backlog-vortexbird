import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EditarHUS.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioEditar from '../../components/FormularioEditar/FormularioEditar';
import BotonEditarElemento from '../../components/BotonEditarElemento/BotonEditarElemento';

// Service
import CriteriosService from '../../services/Criterios.Service/Criterios.Service';
import PlantillasService from '../../services/Plantillas.Service/Plantillas.Service';
import HistoriasService from '../../services/Historias.Service/Historias.Service';

const EditarHUS = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const[id, setId] = useState(0);
  const [usuario, setUsuario] = useState('');
  const [necesidad, setNecesidad] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [elCriterio, setElCriterio] = useState('');
  const [laPlantilla, setLaPlantilla] = useState('');
  const [losCriterios, setLosCriterios] = useState([]);
  const [lasPlantillas, setLasPlantillas] = useState([]);

  function handleUsuario(e) {
    setUsuario(e.target.value);
  }

  function handleNecesidad(e) {
    setNecesidad(e.target.value);
  }

  function handleObjetivo(e) {
    setObjetivo(e.target.value);
  }

  function handleElCriterio(e) {
    setElCriterio(e.target.value);
  }

  function handleLaPlantilla(e) {
    setLaPlantilla(e.target.value);
  }

  function handleLosCriterios(e) {
    setLosCriterios(e.target.value);
  }

  function handleLasPlantillas(e) {
    setLasPlantillas(e.target.value);
  }

  useEffect(() => {
    setId(location.state.idHU);
    setUsuario(location.state.usuario);
    setNecesidad(location.state.necesidad);
    setObjetivo(location.state.objetivo);
    setElCriterio(location.state.elCriterio);
    setLaPlantilla(location.state.laPlantilla);

    // Obtener todos los criterios
    CriteriosService.obtenerCriterios()
      .then(datos => {

        let idsCriterios = [];

        for (let i = 0; i < datos.data.length; i++) {
          idsCriterios.push(datos.data[i].id);
        }

        setLosCriterios(idsCriterios);
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener los criterios en editar historias');
      })

    // Obtener todas las plantillas
    PlantillasService.obtenerPlantillas()
      .then(datos => {

        let idsPlantillas = [];

        for (let i = 0; i < datos.data.length; i++) {
          idsPlantillas.push(datos.data[i].id);
        }

        console.log(idsPlantillas);
        setLasPlantillas(idsPlantillas);
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener las plantillas en editar historias');
      })
  }, []);

  function clickEditar() {
    HistoriasService.putHistorias(id, usuario, necesidad, objetivo, elCriterio, laPlantilla)
      .then(datos => {
        if (datos.data) {
          alert('¡Se realizo la actualización con éxito!');
          navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/ver-historias', {
            state: location.state
          });
        }
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar actualizar el la épica');
      })
  }

  function irAtras() {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/ver-historias', { state: location.state});
  }

  return (
    <div className={styles.EditarHUS}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo } submenus={location.state ? location.state.submenus : props.submenus} tipo={location.state ? location.state.tipo : props.tipo}/>

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
        <div className={styles.SegundoContenedorPagina}>
          <FormularioEditar 
            labelsInputs={props.labelsInputs} 
            funcionesHandle={[handleUsuario, handleNecesidad, handleObjetivo, handleElCriterio, handleLaPlantilla]}
            values={[usuario, necesidad, objetivo, losCriterios, elCriterio, lasPlantillas, laPlantilla]}
            elementoEditar={5}
          />

          <BotonEditarElemento onClick={clickEditar} />
        </div>
      </div>
    </div>
  )};

EditarHUS.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

EditarHUS.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 5,
  titulo: ".../Editar HU'S",
  urlImagen: '../../../../../../usuario-analista-crop.png',
  labelsInputs: [
    ['usuario', 'Nuevo usuario', 'El usuario de esta historia es...'],
    ['necesidad', 'Nueva necesidad', 'La necesidad de este usuario es...'],
    ['objetivo', 'Nuevo objetivo', 'El objetivo de este usuario es...']
  ]
};

export default EditarHUS;
