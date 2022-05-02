import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CrearHistorias.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

// Service
import HistoriasService from '../../services/Historias.Service/Historias.Service';

const CrearHistorias = (props) => {

  const location = useLocation();
  let navigate = useNavigate();
  function clickCrear(){ 
    let respuesta = HistoriasService.crearHistorias(usuario, necesidad, objetivo);

    respuesta
      .then((datos) => {
        let seCreoHU = datos.data.hu;
        let seCreoVersionHU = datos.data.version_hu;

        if (seCreoHU && seCreoVersionHU) {
          alert('¡Se ha creado con éxito la historia de usuario!');
        } else {
          alert('¡Se ha creado con éxito la historia de usuario (Sin su versión inicial)!');
        }
      })
      .catch((err) => {
        alert('Ocurrió un error al momento de intentar crear la historia de usuario.');
      })
  }

  const [usuario, setUsuario] = useState();
  const [necesidad, setNecesidad] = useState();
  const [objetivo, setObjetivo] = useState();

  function handleUsuario(e) {
    setUsuario(e.target.value);
  }

  function handleNecesidad(e) {
    setNecesidad(e.target.value);
  }

  function handleObjetivo(e) {
    setObjetivo(e.target.value);
  }

  return (
    <div className={styles.CrearHistorias} onClick={props.onClick}>
      <MenuLateral urlImagen={props.urlImagen}  nombre={location.state ? location.state.nombre : props.nombre} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear labelsInputs={props.labelsInputs} funcionesHandle={[handleUsuario, handleNecesidad, handleObjetivo]}/>
          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
      
    </div>  
  )};

CrearHistorias.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

CrearHistorias.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'HU/Crear HU',
  urlImagen: '../usuario-analista-crop.png',
  labelsInputs: [
    ['usuario', 'Usuario', 'El usuario de esta HU...'],
    ['necesidad', 'Necesidad', 'La necesidad de este usuario es...'],
    ['objetivo', 'Objetivo', 'El objetivo es...']
  ]
};

export default CrearHistorias;
