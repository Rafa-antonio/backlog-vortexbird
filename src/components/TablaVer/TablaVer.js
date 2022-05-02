import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablaVer.module.css';

const TablaVer = (props) => {

  return (
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
        {
          props.filas.map((x, i) => {
            console.log(x);
            return (
              <tr>
                <td>{x.id}</td>
                <td>{x.correo_usuario}</td>
                <td>{x.resumen}</td>
                <td>{x.tipoIncidencia}</td>
                <td>{x.estimacionOriginal}</td>
              </tr>
            )
          })  
        }
      </tbody>
    </table>
  )};

TablaVer.propTypes = {
  columnasTabla: PropTypes.array,
  filas: PropTypes.array
};

TablaVer.defaultProps = {
  columnasTabla: [
    'Id', 'Correo del usuario', 'Resumen', 'Tipo incidencia', 'Estimación original'
  ],
  filas: []
};

export default TablaVer;
