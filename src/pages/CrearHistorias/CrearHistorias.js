import React from 'react';
import PropTypes from 'prop-types';
import styles from './CrearHistorias.module.css';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';

const CrearHistorias = (props) => (
  <div className={styles.CrearHistorias} onClick={props.onClick}>
    <FormularioCrear />
  </div>
);

CrearHistorias.propTypes = {};

CrearHistorias.defaultProps = {};

export default CrearHistorias;
