import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header}>
    <img src='./logo.png' />
    BACKLOG LOGIN
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
