import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerEpicas.module.css';
import { useEffect } from 'react';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import EpicasService from '../../services/Epicas.Service/Epicas.Service';

const VerEpicas = (props) => {

  let epicas = [];
  useEffect(() => {
    let promesaResultados = EpicasService.obtenerEpicas();

    promesaResultados
      .then((datos) => {

        let datosData = datos.data;
        let lengthData = datosData.length;

        if (lengthData > 0) {
          for (let i = 0; i < lengthData; i++) {
            let id = datosData[i].id;
            let correo_usuario = datosData[i].correo_usuario;
            let resumen = datosData[i].resumen;
            let tipoIncidencia = datosData[i].tipoIncidencia;
            let estimacionOriginal = datosData[i].estimacionOriginal; 

            epicas.push([id, correo_usuario, resumen, tipoIncidencia, estimacionOriginal]);
          }

          alert('Se obtuvieron los datos');
  

          console.log(epicas);
        }


      })
      .catch((err) => {
        alert('Ocurrió un error al intentar obtener todas las épicas creadas.');
        console.log(err);
      })
  }, [])

  return (
    <div className={styles.VerEpicas}>
      <MenuLateral urlImagen={props.urlImagen} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />

        <table>
          <thead>
            <tr>
            {
              props.columnasTabla.map((x, i) => {

                return (
                  <th>{x}</th>
                );
              })
            }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                epicas.length == 0 
                  ? alert('No existen épicas en la base de datos.')
                  :  epicas.map((x, i) => {

                      return(
                        <td>${x}</td>
                      )
                    })
              }
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )};

VerEpicas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array
};

VerEpicas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Épicas/Ver Épicas',
  urlImagen: '../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Correo del usuario', 'Resumen', 'Tipo incidencia', 'Estimación original'
  ]
};

export default VerEpicas;
