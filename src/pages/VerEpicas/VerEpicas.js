import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerEpicas.module.css';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import MenuLateral from '../../components/MenuLateral/MenuLateral';

const VerEpicas = (props) => {

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
          <tr>
            <td>Prueba1</td>
            <td>Prueba2</td>
            <td>Prueba3</td>
          </tr>
          <tr>
            <td>Prueba4</td>
            <td>Prueba5</td>
            <td>Prueba6</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
          </tr>
          <tr>
            <td>Prueba7</td>
            <td>Prueba8</td>
            <td>Prueba9</td>
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
