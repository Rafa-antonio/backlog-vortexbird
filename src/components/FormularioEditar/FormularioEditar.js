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
    <form className={
      props.elementoEditar == 3 ?
      styles.FormularioEditarPlantilla : styles.FormularioEditar
    } >
      {
        // Si el elemento editar es 3 es porque es plantillas
        props.elementoEditar == 3 ?
          <>
            {
              props.labelsInputs.map((x, i) => (

              <>
                <label forhtml={props.labelsInputs[i][0]}>{props.labelsInputs[i][1]}</label>
                <select id={props.labelsInputs[i][0]} onChange={props.funcionesHandle[i]}>
                  {
                    ['Sí', 'No'].map((y, j) => (
                      y == props.values[i] ?                  
                        <option selected='selected'>{y}</option>
                      :
                        <option>{y}</option>
                    )) 
                  }
                </select>
              </>
              ))
            }

            {/* Añadiendo la parte de los tipos (DoD, DoR, DoUI) */}
            <label forhtml={'tipo'}>Tipo</label>
            <select onChange={props.funcionesHandle[props.funcionesHandle.length - 1]} value={props.values[props.values.length - 1]}>
              {
                ['DoD', 'DoR', 'DoUI'].map((y, j) => (
                    y == props.values[j] ?                  
                      <option selected='selected'>{y}</option>
                    :
                      <option>{y}</option>
                  ))
              }
            </select>
          </>
        :
        maplabelsInputs
      }
    </form>
  )};

FormularioEditar.propTypes = {
  labelsInputs: PropTypes.array,
  funcionesHandle: PropTypes.array,
  values: PropTypes.array,
  elementoEditar: PropTypes.number
};

FormularioEditar.defaultProps = {
  labelsInputs: [
    ['nombre', 'Nuevo nombre', 'El nuevo nombre es...'],
    ['descripcion', 'Nueva descripción', 'La nueva descripción es...']
  ],
  /*
    elementoEditar = 1 --> Proyecto
    elementoEditar = 2 --> Criterio
    elementoEditar = 3 --> Plantilla
    elementoEditar = 4 --> Epicas
    elementoEditar = 5 --> HU's
    elementoEditar = 6 --> Versiones epicas
    elementoEditar = 7 --> Versiones HUS
  */
  elementoEditar: 1,
  values: [
    'Sí', 'Sí', 'Sí', 'Sí', 'Sí'
  ]
};

export default FormularioEditar;
