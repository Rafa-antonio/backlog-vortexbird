import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablaVer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faE } from '@fortawesome/free-solid-svg-icons';
import { faH } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
                    if (x[y] != null) {
                      return (
                        <td>{x[y]}</td>
                      )
                    } else {
                      return (
                        <td>{'No asociado'}</td>
                      )
                    }
                    
                  })
                }

                {
                  props.elementoVer == 1 ?
                    <td className={styles.pruebaFinal}>
                      <div className={styles.ColumnaAcciones}>
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={faE} />
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={faH} />
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={faTrashCan} />
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={faPen} />
                      </div>
                    </td>
                  :
                    ''
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
  keys: PropTypes.array,
  elementoVer: PropTypes.number
};

TablaVer.defaultProps = {
  columnasTabla: [
    'Id', 'Correo del usuario', 'Resumen', 'Tipo incidencia', 'Estimación original'
  ],
  filas: [],
  keys: [],
  /*
    elementoVer = 1 --> Proyecto
    elementoVer = 2 --> Criterio
    elementoVer = 3 --> Plantilla
    elementoVer = 4 --> Epicas
    elementoVer = 5 --> HU's
  */
  elementoVer: 1
};

export default TablaVer;
