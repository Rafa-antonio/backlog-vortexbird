import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerPlantillas.module.css';
import { useLocation } from 'react-router-dom';

const VerPlantillas = () => {

  const location = useLocation();

  return (
    <div className={styles.VerPlantillas}>
      VerPlantillas Component
    </div>
  )};

VerPlantillas.propTypes = {};

VerPlantillas.defaultProps = {};

export default VerPlantillas;
