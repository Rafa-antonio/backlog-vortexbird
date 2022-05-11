import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, UNSAFE_NavigationContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EditarPlantillas.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioEditar from '../../components/FormularioEditar/FormularioEditar';
import BotonEditarElemento from '../../components/BotonEditarElemento/BotonEditarElemento';

// Service
import PlantillasService from '../../services/Plantillas.Service/Plantillas.Service';

const EditarPlantillas = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const[id, setId] = useState(0);
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

  function clickEditar() {
    PlantillasService.putPlantillas(
      id, pruebasUnitarias, pruebasCalidadCodigo, pruebasFuncionales,
      requisitosNFuncionales, documentacion, tipo)
      .then(datos => {
        if (datos.data) {
          alert('¡Se realizo la actualización con éxito!');
          navigate('/plantillas-analistas/ver-plantillas', {
            state: location.state
          });
        }
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar actualizar el la plantilla');
      })
  }

  useEffect(() => {
    setId(location.state.idPlantilla);
    setPruebasUnitarias(location.state.pruebasUnitarias);
    setPruebasCalidadCodigo(location.state.pruebasCalidadCodigo);
    setPruebasFuncionales(location.state.pruebasFuncionales);
    setRequisitosNFuncionales(location.state.requisitosNFuncionales);
    setDocumentacion(location.state.documentacion);
    setTipo(location.state.tipo);
  }, []);

  function irAtras() {
    navigate('/plantillas-analistas/ver-plantillas', { state: location.state });
  }

  return (
  <div className={styles.EditarPlantillas}>
    <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo } submenus={location.state ? location.state.submenus : props.submenus} tipo={location.state ? location.state.tipo : props.tipo}/>

    <div className={styles.ContenedorPagina}>
      <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
      <div className={styles.SegundoContenedorPagina}>
        <FormularioEditar 
          labelsInputs={props.labelsInputs} 
          funcionesHandle={
            [
              handlePruebasUnitarias, handlePruebasCalidadCodigo, handlePruebasFuncionales,
              handleRequisitosNFuncionales, handleDocumentacion, handleTipo
            ]
          }
          values={
            [
              pruebasUnitarias, pruebasCalidadCodigo, pruebasFuncionales,
              requisitosNFuncionales, documentacion, tipo
            ]
          }
          elementoEditar={3}
        />

        <BotonEditarElemento onClick={clickEditar} />
      </div>
    </div>
  </div>
  )};

EditarPlantillas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

EditarPlantillas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Plantillas/Ver Plantillas/Editar Plantillas',
  urlImagen: '../../usuario-analista-crop.png',
  labelsInputs: [
    ['pruebasUnitarias', '¿Pruebas unitarias finalizadas?*', ''],
    ['pruebasCalidadCodigo', '¿Pruebas de calidad de código finalizadas?*', ''],
    ['pruebasFuncionales', '¿Pruebas funcionales finalizadas?*', ''],
    ['requisitosNFuncionales', '¿Requisitos no funcionales finalizadas?*', ''],
    ['documentacion', '¿Documentación finalizada?*', '']
  ]
};

export default EditarPlantillas;
