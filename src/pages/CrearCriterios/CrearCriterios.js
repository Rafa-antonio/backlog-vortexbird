import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CrearCriterios.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

// Service
import CriteriosService from '../../services/Criterios.Service/Criterios.Service';

const CrearCriterios = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const[campoUsuario, setCampoUsuario] = React.useState(styles.BordesNegros);
  const[campoObjetivo, setCampoObjetivo] = React.useState(styles.BordesNegros);
  const[visibleAdvertenciaUsuario, setVisibleAdvertenciaUsuario] = React.useState(styles.VisibleFalse);
  const[visibleAdvertenciaObjetivo, setVisibleAdvertenciaObjetivo] = React.useState(styles.VisibleFalse);

  function handleUsuario(e) {
    setUsuario(e.target.value);
    setCampoUsuario(styles.BordesNegros);
    setVisibleAdvertenciaUsuario(styles.VisibleFalse);
  }

  function handleObjetivo(e) {
    setObjetivo(e.target.value);
    setCampoObjetivo(styles.BordesNegros);
    setVisibleAdvertenciaObjetivo(styles.VisibleFalse);
  }

  function clickCrear() {

    if (usuario == '') {
      setCampoUsuario(styles.BordesRojos);
      setVisibleAdvertenciaUsuario(styles.VisibleTrue);
    } else {
      setCampoUsuario(styles.BordesNegros);
      setVisibleAdvertenciaUsuario(styles.VisibleFalse);
    }

    if (objetivo == '') {
      setCampoObjetivo(styles.BordesRojos);
      setVisibleAdvertenciaObjetivo(styles.VisibleTrue);
    } else {
      setCampoObjetivo(styles.BordesNegros);
      setVisibleAdvertenciaObjetivo(styles.VisibleFalse);
    }

    if (usuario != '' && objetivo != '') {
      CriteriosService.crearCriterios(usuario, objetivo)
        .then(datos => {
          if (datos.data) {
            alert('¡Se han creado los criterios con éxito!');
            setUsuario('');
            setObjetivo('');
          } else {
            alert('¡Ops! No se han creado los criterios con éxito');
          }
        })
        .catch(err => {
          console.log(err);
          alert('Ocurrió un error al crear criterios');
        })
    } else {
      alert('Por favor digite todos los campos requeridos');
    }
  }

  function irAtras() {
    navigate('/criterios-analistas', { state: location.state });
  }

  return (
    <div className={styles.CrearCriterios}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.correo ? location.state.correo : props.correo} />

        <div className={styles.ContenedorPagina}>
          <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
          <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear 
            labelsInputs={props.labelsInputs}
            funcionesHandle={[handleUsuario, handleObjetivo]} 
            values={[usuario, objetivo]} 
            campos={[campoUsuario, campoObjetivo]}  
            visibles={[visibleAdvertenciaUsuario, visibleAdvertenciaObjetivo]} 
            textoAdvertencia={props.textoAdvertencia}
          />

          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
    </div>
  )};

CrearCriterios.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array,
  funcionesHandle: PropTypes.array,
  textoAdvertencia: PropTypes.array
};

CrearCriterios.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Criterios/Crear criterio',
  urlImagen: '../usuario-analista-crop.png',
  textoAdvertencia: [
    'El usuario es requerido',
    'El objetivo es requerido'
  ],
  labelsInputs: [
    ['usuario', 'Usuario*', 'El usuario quien realiza el criterio es...'],
    ['objetivo', 'Objetivo*', 'La HU debe cumplir con el objetivo de...']
  ]
};

export default CrearCriterios;
