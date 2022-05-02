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
  const [resumen, setResumen] = useState();
  const [tipoIncidencia, setTipoIncidencia] = useState();
  const [estimacionOriginal, setEstimacionOriginal] = useState();

  function handleResumen(e) {
    setResumen(e.target.value);
  }

  function handleTipo(e) {
    setTipoIncidencia(e.target.value);
  }

  function handleEstimacion(e) {
    setEstimacionOriginal(e.target.value);
  }

  let navigate = useNavigate();
  function clickCrear() {
    let respuesta = EpicasService.crearEpicas(props.correo_usuario, resumen, tipoIncidencia, estimacionOriginal);

    respuesta
      .then((datos) => {
        let seCreoEpica = datos.data.epica;
        let seCreoVersionEpica = datos.data.version_epica;

        if (seCreoEpica && seCreoVersionEpica) {
          alert('¡Se ha creado con éxito la épica!');
        } else {
          alert('¡Se ha creado con éxito la épica (Sin su versión inicial)!');
        }
      })
      .catch((err) => {
        alert('Ocurrió un error al momento de intentar crear la épica.');
      })
        
  }

  return (
    <div className={styles.CrearEpicas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear funcionesHandle={[handleResumen, handleTipo, handleEstimacion]} />

          <BotonCrearElemento onClick={clickCrear} />
        </div>
      </div>
    </div>
  )};

CrearEpicas.propTypes = {
  correo_usuario: PropTypes.string,
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  funcionesHandle: PropTypes.array
};

CrearEpicas.defaultProps = {
  correo_usuario: 'rafael_antonio.gomez@uao.edu.co',
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Épicas/Crear épica',
  urlImagen: '../usuario-analista-crop.png'
};

export default CrearEpicas;
