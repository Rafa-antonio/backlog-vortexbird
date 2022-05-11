import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './VerPlantillas.module.css';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import PlantillasService from '../../services/Plantillas.Service/Plantillas.Service';
import TablaVer from '../../components/TablaVer/TablaVer';


const VerPlantillas = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [plantillas, setPlantillas] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    PlantillasService.obtenerPlantillas()
      .then(datos => {
          if (datos.data.length > 0) {
            setKeys(Object.keys(datos.data[0]));
            setPlantillas(datos.data);
          } else {
            alert('No existen plantillas en la base de datos');
          }
        })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener las plantillas');
    })  
  }, []);

  function irAtras() {
    navigate('/plantillas-analistas', { state: location.state });
  }


  return (
    <div className={styles.VerPlantillas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>

        <TablaVer 
          funcionesHandle={[setPlantillas]}
          columnasTabla={props.columnasTabla} 
          filas={plantillas} 
          keys={keys} 
          elementoVer={3}
          />
      </div>
    </div>
  )};

VerPlantillas.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array
};

VerPlantillas.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Plantillas/Ver Plantillas',
  urlImagen: '../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Pruebas unitarias', 'Pruebas de calidad de código', 'Pruebas funcionales', 'Requisitos no funcionales',
    'Documentación', 'Tipo', 'Acciones'
  ]
};

export default VerPlantillas;
