import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, UNSAFE_NavigationContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EditarCriterios.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import HeaderSesiones from '../../components/HeaderSesiones/HeaderSesiones';
import FormularioEditar from '../../components/FormularioEditar/FormularioEditar';
import BotonEditarElemento from '../../components/BotonEditarElemento/BotonEditarElemento';

// Service
import CriteriosService from '../../services/Criterios.Service/Criterios.Service';

const EditarCriterios = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const[id, setId] = useState(0);
  const [usuario, setUsuario] = useState('');
  const [objetivo, setObjetivo] = useState('');

  function handleUsuario(e) {
    setUsuario(e.target.value);
  }

  function handleObjetivo(e) {
    setObjetivo(e.target.value);
  }

  function clickEditar() {
    CriteriosService.putCriterios(id, usuario, objetivo)
      .then(datos => {
        if (datos.data) {
          alert('¡Se realizo la actualización con de criterios con éxito!');
          navigate('/criterios-analistas/ver-criterios', {
            state: location.state
          });
        }
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar actualizar los criterios');
      })
  }

  useEffect(() => {
    setId(location.state.idCriterio);
    setUsuario(location.state.usuario);
    setObjetivo(location.state.objetivo);    
  }, []);

  function irAtras() {
    navigate('/criterios-analistas/ver-criterios', { state: location.state });
  }

  return (
    <div className={styles.EditarCriterios}>
      <MenuLateral urlImagen={props.urlImagen} nombre={location.state ? location.state.nombre : props.nombre} correo={location.state ? location.state.correo : props.correo } submenus={location.state ? location.state.submenus : props.submenus} tipo={location.state ? location.state.tipo : props.tipo}/>

      <div className={styles.ContenedorPagina}>
        <HeaderSesiones titulo={props.titulo} onClick={irAtras}/>
        <div className={styles.SegundoContenedorPagina}>
          <FormularioEditar labelsInputs={props.labelsInputs} 
            funcionesHandle={[handleUsuario, handleObjetivo]}            
            values={[usuario, objetivo]}
          />

          <BotonEditarElemento onClick={clickEditar} />
        </div>
      </div>
    </div>
  )};

EditarCriterios.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  tipo: PropTypes.number,
  titulo: PropTypes.string,
  urlImagen: PropTypes.string,
  labelsInputs: PropTypes.array
};

EditarCriterios.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',

  // Por defecto es un Analista
  tipo: 2,
  titulo: '.../Editar Criterios',
  urlImagen: '../../../../usuario-analista-crop.png',
  labelsInputs: [
    ['usuario', 'Nuevo usuario', 'El usuario de la HU debe...'],
    ['objetivo', 'Nuevo objetivo', 'El objetivo del usuario ha de ser...'],
  ]
};

export default EditarCriterios;
