import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './VerPlantillas.module.css';
import { useLocation } from 'react-router-dom';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import PlantillasService from '../../services/Plantillas.Service/Plantillas.Service';
import TablaVer from '../../components/TablaVer/TablaVer';


const VerPlantillas = (props) => {

  const location = useLocation();
  const [plantillas, setPlantillas] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    PlantillasService.obtenerPlantillas()
      .then(datos => {
          setKeys(Object.keys(datos.data[0]));

          let dataTexto = [];

          for (let i = 0; i < datos.data.length; i++) {
            let dataI = datos.data[i];
            console.log(dataI);
            let id = dataI.id;
            let pruebasUnitarias = dataI.pruebasUnitarias == 1 ? 'Sí' : 'No';
            let pruebasCalidadCodigo = dataI.pruebasCalidadCodigo == 1 ? 'Sí' : 'No';
            let pruebasFuncionales = dataI.pruebasFuncionales == 1 ? 'Sí' : 'No';
            let requisitosNFuncionales = dataI.requisitosNFuncionales == 1 ? 'Sí' : 'No';
            let documentacion = dataI.documentacion == 1 ? 'Sí' : 'No';
            let tipo = dataI.tipo;

            dataTexto.push(
              {
                id: id,
                pruebasUnitarias: pruebasUnitarias, 
                pruebasCalidadCodigo: pruebasCalidadCodigo, 
                pruebasFuncionales: pruebasFuncionales, 
                requisitosNFuncionales: requisitosNFuncionales, 
                documentacion: documentacion, 
                tipo: tipo
              }
            );
          }

          console.log(dataTexto);

          setPlantillas(dataTexto);
        })
      .catch(err => {
        alert('Ocurrió un error al intentar obtener las plantillas');
        console.log(err);
    })  
  }, []);

  return (
    <div className={styles.VerPlantillas}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />

        <TablaVer columnasTabla={props.columnasTabla} filas={plantillas} keys={keys} />
      </div>
    </div>
  )};

VerPlantillas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array
};

VerPlantillas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Plantillas/Ver Plantillas',
  urlImagen: '../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Pruebas unitarias', 'Pruebas de calidad de código', 'Pruebas funcionales', 'Requisitos no funcionales',
    'Documentación', 'Tipo'
  ]
};

export default VerPlantillas;
