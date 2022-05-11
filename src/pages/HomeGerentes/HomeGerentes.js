import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HomeGerentes.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';

const HomeGerentes = (props) => {

  const location = useLocation();

  return (
    <div className={styles.HomeGerentes}>
      <MenuLateral nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo} submenus={props.submenus} tipo={1} />

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} />
      </div>
    </div>
  )};

HomeGerentes.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string
};

HomeGerentes.defaultProps = {
  nombre: 'Gerente',
  correo: 'prueba@hotmail.com',
  titulo: 'Inicio - Gerentes',
  submenus: [
    'Inicio', 'Proyectos'
  ]
};

export default HomeGerentes;
