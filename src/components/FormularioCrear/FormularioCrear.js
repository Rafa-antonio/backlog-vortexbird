import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormularioCrear.module.css';

const FormularioCrear = (props) => {

  const maplabelsInputs = props.labelsInputs.map((x, i) => (
      <>
        <div>
          <label forhtml={props.labelsInputs[i][0]}>{props.labelsInputs[i][1]}</label>
          <input name={props.labelsInputs[i][0]} id={props.labelsInputs[i][0]} placeholder={props.labelsInputs[i][2]} onChange={props.funcionesHandle[i]} value={props.values[i]} className={props.campos[i]}/>
        </div>
        <p className={props.visibles[i]}>{props.textoAdvertencia[i]}</p>
      </>
  ));

  return (
    <form className={
      props.esHUS == true ?
        styles.FormularioHistorias 
      :
        props.labelsInputs.length > 2 ?
          styles.FormularioAlternativo
        :
          styles.FormularioCrear
    } >
      {maplabelsInputs}
      {
        props.esHUS == true ?
        <div>
          <label forhtml='criterio'>Criterio*</label>
          <select onChange={props.funcionesHandle[props.funcionesHandle.length - 2]}>
            {
              props.criterios.map((x, i) => {
                return (
                  <option value={x.id}>Criterio con id #{x.id}</option>
                )
              })
            }
          </select>
          <label forhtml='plantilla'>Plantilla*</label>
          <select onChange={props.funcionesHandle[props.funcionesHandle.length - 1]}>
            {
              props.plantillas.map((x, i) => {
                return (
                  <option value={x.id}>Plantilla con id #{x.id}</option>
                )
              })
            }
          </select>
        </div>
        :
          ""
      }
    </form>
  )};

FormularioCrear.propTypes = {
  labelsInputs: PropTypes.array,
  funcionesHandle: PropTypes.array,
  values: PropTypes.array,
  campos: PropTypes.array,
  visibles: PropTypes.array,
  textoAdvertencia: PropTypes.array,
  esHUS: PropTypes.bool
};

FormularioCrear.defaultProps = {
  labelsInputs: [
    ['resumen', 'Resumen', 'De manera resumida...'],
    ['tipoIncidencia', 'Tipo de incidencia', 'El tipo de incidencia de esta épica es...'],
    ['estimacionOriginal', 'Estimación original', 'La estimación original...']
  ],
  funcionesHandle: [
    'handleResumen',
    'handleTipo',
    'handleEstimacion',
  ],
  values: ['resumen', 'tipoIncidencia', 'estimacionOriginal'],
  campos: [
    'usuario',
    'contrasena'
  ],
  visibles: [
    'visiblesAdvertenciaUsuario',
    'visiblesAdvertenciaContrasena'
  ],
  textoAdvertencia: [
    'El correo o usuario es requerido',
    'La contrasena es requerida'
  ],
  esHUS: false
};

export default FormularioCrear;
