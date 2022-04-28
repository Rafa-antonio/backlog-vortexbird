import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormularioCrear.module.css';

const FormularioCrear = (props) => {

  const maplabelsInputs = props.labelsInputs.map((x, i) => (
      <>
        <label forHTML={props.labelsInputs[i][0]}>{props.labelsInputs[i][1]}</label>
        <input name={props.labelsInputs[i][0]} id={props.labelsInputs[i][0]} placeholder={props.labelsInputs[i][2]} />
      </>
  ));

  return (
    <form className={styles.FormularioCrear} >
      {maplabelsInputs}
    </form>
  )};

FormularioCrear.propTypes = {
  labelsInputs: PropTypes.array
};

FormularioCrear.defaultProps = {
  labelsInputs: [
    ['resumen', 'Resumen', 'De manera resumida...'],
    ['tipoIncidencia', 'Tipo de incidencia', 'El tipo de incidencia de esta épica es...'],
    ['estimacionOriginal', 'Estimación original', 'La estimación original...']
  ]
};

export default FormularioCrear;
