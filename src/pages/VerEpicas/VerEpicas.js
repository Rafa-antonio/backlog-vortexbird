import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerEpicas.module.css';
import { useEffect } from 'react';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import EpicasService from '../../services/Epicas.Service/Epicas.Service';

const VerEpicas = (props) => {

  useEffect(() => {
    let promesaResultados = EpicasService.obtenerEpicas();

    promesaResultados
      .then((datos) => {
        let id = datos.data.id;
        let correo_usuario = datos.data.correo_usuario;
        let resumen = datos.data.resumen;
        let tipoIncidencia = datos.data.tipoIncidencia;
        let estimacionOriginal = datos.data.estimacionOriginal;

        props.epicas = [id, correo_usuario, resumen, tipoIncidencia, estimacionOriginal];
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
          <tr>
            {
              props.columnasTabla.map((x, i) => {

                return (
                  <th>{x}</th>
                );
              })
            }
          </tr>
        </table>
      </div>
    </div>
  )};

VerEpicas.propTypes = {
  nombre: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  columnasTabla: PropTypes.array,
  epicas: PropTypes.array
};

VerEpicas.defaultProps = {
  nombre: 'Usuario',

  // Por defecto es un Analista
  tipo: 2,
  titulo: 'Épicas/Ver Épicas',
  urlImagen: '../usuario-analista-crop.png',
  columnasTabla: [
    'Id', 'Correo del usuario', 'Resumen', 'Tipo incidencia', 'Estimación original'
  ],
  epicas: [
    ['1', 'Prueba', 'Es una prueba', "It's a prove", 'Probando']
  ]
};

export default VerEpicas;
