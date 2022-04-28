import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormularioCrearPlantilla.module.css';

const FormularioCrearPlantilla = (props) => {

  const maplabelsSelects = props.labelsSelects.map((x, i) => (
    <>
      <label forHTML={props.labelsSelects[i][0]}>{props.labelsSelects[i][1]}</label>
      <select name={props.labelsSelects[i][0]}>
        <option value="Sí" selected>Sí</option>
        <option value="No">No</option>
      </select>
    </>
  ));

  return (
    <div className={styles.FormularioCrearPlantilla}>
      {maplabelsSelects}
      <label forHTML='tipo'>Tipo</label>
      <select>
        <option value='DoD'>DoD</option>
        <option value='DoR'>DoR</option>
        <option value='DoUI'>DoUI</option>
      </select>
    </div>
  )};

FormularioCrearPlantilla.propTypes = {
  labelsSelects: PropTypes.array  
};

FormularioCrearPlantilla.defaultProps = {
  labelsSelects: [
    ['pruebasUnitarias', '¿Pruebas unitarias finalizadas?'],
    ['pruebasCalidadCodigo', '¿Pruebas de calidad de código finalizadas?'],
    ['pruebasFuncionales', '¿Pruebas funcionales finalizadas?'],
    ['requisitosNFuncionales', '¿Requisitos no funcionales finalizadas?'],
    ['documentacion', '¿Documentación finalizada?']
  ]
};

export default FormularioCrearPlantilla;
