import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CrearEpicas.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuLateralAnalistas from '../../components/MenuLateralAnalistas/MenuLateralAnalistas';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

// Service
import EpicasService from '../../services/Epicas.Service/Epicas.Service';

const CrearEpicas = (props) => {

  const location = useLocation();
  const [resumen, setResumen] = useState('');
  const [tipoIncidencia, setTipoIncidencia] = useState('');
  const [estimacionOriginal, setEstimacionOriginal] = useState('');

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
    let correo = location.state ? location.state.correo : props.correo;
    let respuesta = EpicasService.crearEpicas(correo, resumen, tipoIncidencia, estimacionOriginal);

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
        }
      })
      .catch((err) => {
        alert('Ocurrió un error al momento de intentar crear la épica.');
      })
        
  }

  return (
    <div className={styles.CrearEpicas}>
      <MenuLateralAnalistas urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
        <div className={styles.SegundoContenedorPagina}>
          <FormularioCrear funcionesHandle={[handleResumen, handleTipo, handleEstimacion]} values={[resumen, tipoIncidencia, estimacionOriginal]} />

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
  funcionesHandle: PropTypes.array
};

CrearEpicas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Épicas/Crear épica',
  urlImagen: '../usuario-analista-crop.png'
};

export default CrearEpicas;
