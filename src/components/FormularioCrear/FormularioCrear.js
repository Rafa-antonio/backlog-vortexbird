import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormularioCrear.module.css';

const FormularioCrear = (props) => {

  const labelsInputs = [...Array(props.labels.length)].map((i) =>
    
      <>
      {console.log(props.labels[0].length)}
        <label forHTML={props.labels[0][0]}>{props.labels[0][1]}</label>
        <input name={props.inputs[0][0]} id={props.inputs[0][0]} placeholder={props.inputs[0][1]} />
      </>
    );

  return (
    <form className={styles.FormularioCrear} >
      {labelsInputs}
    </form>
  )};

FormularioCrear.propTypes = {
  labels: PropTypes.array,
  inputs: PropTypes.array
};

FormularioCrear.defaultProps = {
  labels: [
    ['resumen', 'Resumen'],
    ['tipoIncidencia', 'Tipo de incidencia'],
    ['estimacionOriginal', 'Estimación original']
  ],
  inputs: [
    ['resumen', 'De manera resumida...'],
    ['tipoIncidencia', 'El tipo de incidencia de esta épica es...'],
    ['estimacionOriginal', 'La estimación original...']
  ]
};

export default FormularioCrear;
