import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormularioEditar.module.css';

const FormularioEditar = (props) => {

  const maplabelsInputs = props.labelsInputs.map((x, i) => (
    <>
      <label forhtml={props.labelsInputs[i][0]}>{props.labelsInputs[i][1]}</label>
      <input name={props.labelsInputs[i][0]} id={props.labelsInputs[i][0]} placeholder={props.labelsInputs[i][2]} onChange={props.funcionesHandle[i]} value={props.values[i]}/>
    </>
));

  return (
    <form className={styles.FormularioEditar} >
      {maplabelsInputs}
    </form>
  )};

FormularioEditar.propTypes = {
  labelsInputs: PropTypes.array,
  funcionesHandle: PropTypes.array,
  values: PropTypes.array
};

FormularioEditar.defaultProps = {
  labelsInputs: [
    ['nombre', 'Nuevo nombre', 'El nuevo nombre es...'],
    ['descripcion', 'Nueva descripción', 'La nueva descripción es...']
  ]
};

export default FormularioEditar;
