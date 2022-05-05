import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CrearPlantillas.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import FormularioCrearPlantilla from '../../components/FormularioCrearPlantilla/FormularioCrearPlantilla';
import MenuLateralAnalistas from '../../components/MenuLateralAnalistas/MenuLateralAnalistas';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import BotonCrearElemento from '../../components/BotonCrearElemento/BotonCrearElemento';

// Service
import PlantillasService from '../../services/Plantillas.Service/Plantillas.Service';

const CrearPlantillas = (props) => {

  const location = useLocation();

  const [pruebasUnitarias, setPruebasUnitarias] = useState('Sí');
  const [pruebasCalidadCodigo, setPruebasCalidadCodigo] = useState('Sí');
  const [pruebasFuncionales, setPruebasFuncionales] = useState('Sí');
  const [requisitosNFuncionales, setRequisitosNFuncionales] = useState('Sí');
  const [documentacion, setDocumentacion] = useState('Sí');
  const [tipo, setTipo] = useState('DoD');

  function handlePruebasUnitarias(e) {
    setPruebasUnitarias(e.target.value);
  }

  function handlePruebasCalidadCodigo(e) {
    setPruebasCalidadCodigo(e.target.value);
  }

  function handlePruebasFuncionales(e) {
    setPruebasFuncionales(e.target.value);
  }

  function handleRequisitosNFuncionales(e) {
    setRequisitosNFuncionales(e.target.value);
  }

  function handleDocumentacion(e) {
    setDocumentacion(e.target.value);
  }

  function handleTipo(e) {
    setTipo(e.target.value);
  }

  let navigate = useNavigate();
  function clickCrear(){ 
    PlantillasService.crearPlantillas(pruebasUnitarias, pruebasCalidadCodigo, pruebasFuncionales, 
      requisitosNFuncionales, documentacion, tipo)
        .then(datos => {
          if (datos.data.plantillas) {
            alert('¡Se ha creado la plantilla con éxito!');
            setPruebasUnitarias('Sí');
            setPruebasCalidadCodigo('Sí');
            setPruebasFuncionales('Sí');
            setRequisitosNFuncionales('Sí');
            setDocumentacion('Sí');
            setTipo('Sí');
          }
        })
        .catch(err => {
          alert('Ocurrió un error al intentar crear la plantilla.');
          console.log(err);
        })
  }

  return (
  <div className={styles.CrearPlantillas}>
    <MenuLateralAnalistas urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre } correo={location.state ? location.state.correo : props.correo} />

    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} />
      <div className={styles.SegundoContenedorPagina}>
        <FormularioCrearPlantilla funcionesHandle={[handlePruebasUnitarias, handlePruebasCalidadCodigo, handlePruebasFuncionales, handleRequisitosNFuncionales, handleDocumentacion, handleTipo]} values={[pruebasUnitarias, pruebasCalidadCodigo, pruebasFuncionales, requisitosNFuncionales, documentacion, tipo]} />
        <BotonCrearElemento onClick={clickCrear} />
      </div>
    </div>
  </div>
  )};

CrearPlantillas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string
};

CrearPlantillas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Plantillas/Crear plantillas',
  urlImagen: '../usuario-analista-crop.png'
};

export default CrearPlantillas;
