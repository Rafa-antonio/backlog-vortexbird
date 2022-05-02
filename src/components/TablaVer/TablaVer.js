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
            return (
              <tr>
                {
                  props.keys.map((y, n) => {
                    return (
                      <td>{x[y]}</td>
                    )
                  })
                }
              </tr>
            )
          })  
        }
      </tbody>
    </table>
  )};

TablaVer.propTypes = {
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  keys: PropTypes.array
};

TablaVer.defaultProps = {
  columnasTabla: [
    'Id', 'Correo del usuario', 'Resumen', 'Tipo incidencia', 'Estimación original'
  ],
  filas: [],
  keys: []
};

export default TablaVer;
