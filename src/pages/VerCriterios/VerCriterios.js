import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerCriterios.module.css';
import { useLocation } from 'react-router-dom';

const VerCriterios = () => {

  const location = useLocation();

  return (
    <div className={styles.VerCriterios}>
      VerCriterios Component
    </div>
  )};

VerCriterios.propTypes = {};

VerCriterios.defaultProps = {};

export default VerCriterios;
