import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TablaVer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Iconos
import { faE, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faH } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faV } from '@fortawesome/free-solid-svg-icons';
import { faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// Service
import ProyectosService from '../../services/Proyectos.Service/Proyectos.Service';
import EpicasService from '../../services/Epicas.Service/Epicas.Service';
import CriteriosService from '../../services/Criterios.Service/Criterios.Service';
import PlantillasService from '../../services/Plantillas.Service/Plantillas.Service';
import HistoriasService from '../../services/Historias.Service/Historias.Service';
import VersionesEpicasService from '../../services/VersionesEpicasService/VersionesEpicasService';
import VersionesHUSService from '../../services/VersionesHUSService/VersionesHUSService';

// Exportar a Excel
import * as XLSX from 'xlsx';

// Exportar a PDF
import jsPDF from 'jspdf';

// Estilo VortexBird

const TablaVer = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  // Función eliminar proyecto
  function eliminarProyectos(id) {
    ProyectosService.deleteProyectos(id)
      .then(datos => {
        props.funcionesHandle[0](datos.data);
        alert('¡El proyecto ha sido eliminado con éxito!');
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar eliminar un proyecto');
      })
  }

  // Función editar proyecto
  function editarProyectos(proyecto) {
    navigate('/proyectos-analistas/ver-proyectos/editar-proyectos', { state: {
        nombre: location.state.nombre, 
        correo: location.state.correo,
        id: proyecto.id,
        nombreProyecto: proyecto.nombre,
        descripcion: proyecto.descripcion
      }
    })
  }

  async function descargarProyectos(proyecto) {    
    const pdfDoc = new jsPDF();
    console.log(pdfDoc.getFontList());
    pdfDoc.addImage('/esquemaVisual.jpg', 'JPEG', 0, 0, 210, 297);
    pdfDoc.setTextColor(23, 189, 169);
    pdfDoc.setFont('helvetica', 'normal', 'bold');
    pdfDoc.text(`PROYECTO: ${proyecto.nombre}`, 20, 30);
    pdfDoc.setTextColor(255, 192, 0);
    pdfDoc.text(`Descripción del proyecto`, 20, 40);
    pdfDoc.setTextColor(0, 0, 0);
    pdfDoc.setFont('helvetica', 'normal', 'normal');
    pdfDoc.text(`${proyecto.descripcion}.`, 20, 50);
    pdfDoc.setTextColor(255, 192, 0);
    pdfDoc.setFont('helvetica', 'normal', 'bold');
    pdfDoc.text(`Épicas del proyecto`, 20, 60);
    pdfDoc.setFont('helvetica', 'normal', 'normal');
    pdfDoc.setTextColor(0, 0, 0);

    let datosEpicas = await EpicasService.obtenerEpicas(proyecto.id);
    let nuevaAltura = 70;

    for (let i = 0; i < datosEpicas.data.length; i++) {
      let epica = datosEpicas.data[i];
      let datosHUS = await HistoriasService.obtenerHistoriasEpica(epica.id);

      if (nuevaAltura >= 210) {
        pdfDoc.addPage();
        pdfDoc.addImage('/esquemaVisual.jpg', 'JPEG', 0, 0, 210, 297);
        nuevaAltura = 30;
      }

      pdfDoc.text(`\u2022\ Épica #${i+1}`, 20, nuevaAltura);
      pdfDoc.text(`\u2022\ Id: ${epica.id}`, 30, nuevaAltura + 10);
      pdfDoc.text(`\u2022\ Correo de quien la creó: ${epica.correo_usuario}`, 30, nuevaAltura + 20);
      pdfDoc.text(`\u2022\ Id del proyecto correspondiente: ${epica.id_proyecto}`, 30, nuevaAltura + 30);
      pdfDoc.text(`\u2022\ Resumen: ${epica.resumen}`, 30, nuevaAltura + 40);
      pdfDoc.text(`\u2022\ Tipo de incidencia: ${epica.tipoIncidencia}`, 30, nuevaAltura + 50);
      pdfDoc.text(`\u2022\ Estimación original: ${epica.estimacionOriginal}`, 30, nuevaAltura + 60);
      pdfDoc.addPage();
      pdfDoc.addImage('/esquemaVisual.jpg', 'JPEG', 0, 0, 210, 297);
      nuevaAltura = 30;
      pdfDoc.setTextColor(255, 192, 0);
      pdfDoc.setFont('helvetica', 'normal', 'bold');
      pdfDoc.text(`Historias de usuario`, 20, nuevaAltura);
      pdfDoc.setFont('helvetica', 'normal', 'normal');
      pdfDoc.setTextColor(0, 0, 0);
      
      for (let j = 0; j < datosHUS.data.length; j++) {
        let hu = datosHUS.data[j];
        
        if (nuevaAltura >= 150) {
          pdfDoc.addPage();
          pdfDoc.addImage('/esquemaVisual.jpg', 'JPEG', 0, 0, 210, 297);
          nuevaAltura = 30;
        }

        pdfDoc.text(`\u2022\ Historia de usuario #${j+1}`, 20, nuevaAltura + 10);
        pdfDoc.text(`\u2022\ Usuario: ${hu.usuario}`, 30, nuevaAltura + 20);
        pdfDoc.text(`\u2022\ Necesidad: ${hu.necesidad}`, 30, nuevaAltura + 30);
        pdfDoc.text(`\u2022\ Objetivo: ${hu.objetivo}`, 30, nuevaAltura + 40);

        nuevaAltura += 50;
      }

      nuevaAltura = 210; 

    }

    pdfDoc.save(`Proyecto con id #${proyecto.id}.pdf`);
  }

  function irEpicas(proyecto) {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas', {
      state: {
        nombre: location.state ? location.state.nombre : props.nombre,
        correo: location.state ? location.state.correo : props.correo,
        idProyecto: proyecto.id
      }
    });
  }

  function irHUS(epica) {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas', {
      state: {
        nombre: location.state ? location.state.nombre : props.nombre,
        correo: location.state ? location.state.correo : props.correo,
        idProyecto: epica.id_proyecto,
        idEpica: epica.id
      }
    });
  }

  function irVersionesEpicas(epica) {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/versiones-epicas', {
      state: {
        nombre: location.state.nombre,
        correo: location.state.correo,
        idProyecto: epica.id_proyecto,
        idEpica: epica.id
      }
    })
  }

  function eliminarEpicas(idEpica, idProyecto) {
    EpicasService.deleteEpicas(idEpica, idProyecto)
      .then(datos => {
        console.log(datos);
        props.funcionesHandle[0](datos.data);
        alert('¡Se ha eliminado la épica con éxito!');
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un erro al intentar eliminar las épicas');
      })
  }

  function editarEpicas(epica) {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/editar-epicas', { state: {
        nombre: location.state.nombre, 
        correo: location.state.correo,
        idEpica: epica.id,
        idProyecto: epica.id_proyecto,
        resumen: epica.resumen,
        tipoIncidencia: epica.tipoIncidencia,
        estimacionOriginal: epica.estimacionOriginal
      }
    })
  }

  function descargarEpicas(epica) {
    VersionesEpicasService.obtenerVersionesEpicas(epica.id)
      .then(datos => {
        let versionesEpicas = datos.data;
        HistoriasService.obtenerHistoriasEpica(epica.id)
          .then(async datos2 => {
            let workbook = XLSX.utils.book_new();
            let worksheetEpica = XLSX.utils.json_to_sheet([epica]);
            let worksheetVersiones = XLSX.utils.json_to_sheet(versionesEpicas);
            XLSX.utils.book_append_sheet(workbook, worksheetEpica, `Epica con id #${epica.id}`);
            XLSX.utils.book_append_sheet(workbook, worksheetVersiones, `Versiones`);


            if (datos2.data.length > 0) {
              let worksheetHistorias = XLSX.utils.json_to_sheet(datos2.data);
              XLSX.utils.book_append_sheet(workbook, worksheetHistorias, `Historias de usuario`);

              for (let index in datos2.data) {
                let hu = datos2.data[index];
                let versiones = await VersionesHUSService.obtenerVersionesHUS(hu.id);
                let worksheetVersionesHistoria = XLSX.utils.json_to_sheet(versiones.data);
                XLSX.utils.book_append_sheet(workbook, worksheetVersionesHistoria, `Versiones HU id #${hu.id}`);
              }

              XLSX.writeFile(workbook, `Epica con id #${epica.id}.xlsx`);

            } else {
              let workbook = XLSX.utils.book_new();
              let worksheetEpica = XLSX.utils.json_to_sheet([epica]);
              let worksheetVersiones = XLSX.utils.json_to_sheet(versionesEpicas);
              XLSX.utils.book_append_sheet(workbook, worksheetEpica, `Epica con id #${epica.id}`);
              XLSX.utils.book_append_sheet(workbook, worksheetVersiones, `Versiones`);
              XLSX.writeFile(workbook, `Epica con id #${epica.id}.xlsx`);
              alert('No existen historias de usuario asociadas a la épica descargada');
            }


            VersionesHUSService.obtenerVersionesHUS()
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar descargar las épicas con las versiones');
      })
  }

  function eliminarCriterios(idCriterio) {
    CriteriosService.deleteCriterios(idCriterio)
      .then(datos => {
        props.funcionesHandle[0](datos.data);
        alert('¡Se ha eliminado el criterio con éxito!');
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un erro al intentar eliminar los criterios');
      })
  }

  function editarCriterios(criterio){
    navigate('/criterios-analistas/ver-criterios/editar-criterios', { state: {
        nombre: location.state.nombre, 
        correo: location.state.correo,
        idCriterio: criterio.id,
        usuario: criterio.usuario,
        objetivo: criterio.objetivo
      }
    })
  }

  function eliminarPlantillas(idPlantilla) {
    PlantillasService.deletePlantillas(idPlantilla)
    .then(datos => {
      props.funcionesHandle[0](datos.data);
      alert('¡Se ha eliminado el criterio con éxito!');
    })
    .catch(err => {
      console.log(err);
      alert('Ocurrió un erro al intentar eliminar las plantillas');
    })
  }

  function editarPlantillas(plantilla) {
    navigate('/plantillas-analistas/ver-plantillas/editar-plantillas', { state: {
      nombre: location.state.nombre, 
      correo: location.state.correo,
      idPlantilla: plantilla.id,
      pruebasUnitarias: plantilla.pruebasUnitarias, 
      pruebasCalidadCodigo: plantilla.pruebasCalidadCodigo,
      pruebasFuncionales: plantilla.pruebasFuncionales,
      requisitosNFuncionales: plantilla.requisitosNFuncionales,
      documentacion: plantilla.documentacion,
      tipo: plantilla.tipo
    }
  })
  }

  function eliminarHUS(hu) {
    let idHU = hu.id;

    HistoriasService.deleteHistorias(idHU)
      .then(datos => {
          props.funcionesHandle[0](datos.data);
          alert('¡Se ha eliminado la historia de usuario con éxito!');
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar eliminar la historia de usuario');
      })
  }

  function descargarHUS(hu) {
    VersionesHUSService.obtenerVersionesHUS(hu.id)
      .then(datos => {
        if (datos.data.length > 0) {
          let versionesHUS = datos.data;
          let workbook = XLSX.utils.book_new();
          let worksheet = XLSX.utils.json_to_sheet([hu]);
          let worksheetVersiones = XLSX.utils.json_to_sheet(versionesHUS);
          XLSX.utils.book_append_sheet(workbook, worksheet, `Historia de usuario con id#${hu.id}`);
          XLSX.utils.book_append_sheet(workbook, worksheetVersiones, `Versiones`);
          XLSX.writeFile(workbook, `Historia de usuaio con id#${hu.id}.xlsx`);
        } else {
          alert('Al parecer no se encontraron versiones. No se pudo descargar');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Ocurrió un error al intentar descargar junto con las versiones de la HU');
      })
  }

  function versionesHUS(hu) {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/ver-historias/versiones-historias', {
      state: {
        nombre: location.state.nombre, 
        correo: location.state.correo,
        idHU: hu.id,
        idProyecto: location.state.idProyecto,
      }
    })
  }

  function editarHUS(hu) {
    navigate('/proyectos-analistas/ver-proyectos/epicas-analistas/ver-epicas/historias-analistas/ver-historias/editar-historias', {
      state: {
        nombre: location.state.nombre, 
        correo: location.state.correo,
        idHU: hu.id,
        idProyecto: location.state.idProyecto,
        usuario: hu.usuario,
        necesidad: hu.necesidad,
        objetivo: hu.objetivo,
        elCriterio: hu.id_criterio,
        laPlantilla: hu.id_plantilla
      }
    })
  }

  return (
    <table>
      <thead>
        <tr>
        {
          props.columnasTabla.map((x, i) => {

            return (
              <th>{x}</th>
            );
          })
        }
        </tr>
      </thead>
      <tbody>
        {
          props.filas.map((x, i) => {
            return (
              <tr>
                {                  
                  props.keys.map((y, n) => {
                    if (x[y] != null) {
                      return (
                        <td>{x[y]}</td>
                      )
                    } else {
                      return (
                        <td>{'No asociado'}</td>
                      )
                    }
                  
                  })
                }

                {
                  // Ver proyectos
                  props.elementoVer == 1 ?
                    <td>
                      <div className={styles.ColumnaAcciones}>
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() =>  irEpicas(x)} icon={faE} />
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={faH} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarProyectos(x.id)} icon={faTrashCan} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarProyectos(x)} icon={faPen} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => descargarProyectos(x)} icon={faDownload} />
                      </div>
                    </td>
                  :
                  // Ver criterios
                  props.elementoVer == 2 ?
                    <td>
                      <div className={styles.ColumnaAcciones}>
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarCriterios(x.id)} icon={faTrashCan} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarCriterios(x)} icon={faPen} />
                      </div>
                    </td>
                  :
                  // Ver Plantillas
                  props.elementoVer == 3 ?
                    <td>
                      <div className={styles.ColumnaAcciones}>                      
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarPlantillas(x.id)} icon={faTrashCan} />
                        <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarPlantillas(x)} icon={faPen} />
                      </div>
                    </td>
                  :
                  // Ver epicas
                  props.elementoVer == 4 ?
                  <td>
                    <div className={styles.ColumnaAcciones}>
                      <FontAwesomeIcon className={styles.IconoAcciones} onClick={() =>  irVersionesEpicas(x)} icon={faV} />
                      <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => irHUS(x)} icon={faH} />
                      <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarEpicas(x.id, x.id_proyecto)} icon={faTrashCan} />
                      <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarEpicas(x)} icon={faPen} />
                      <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => descargarEpicas(x)} icon={faDownload} />
                    </div>
                  </td>
                :
                // Ver HU'S
                props.elementoVer == 5 ?
                <td>
                  <div className={styles.ColumnaAcciones}>
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => descargarHUS(x)} icon={faDownload} />
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => versionesHUS(x)} icon={faV} />
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => eliminarHUS(x)} icon={faTrashCan} />
                    <FontAwesomeIcon className={styles.IconoAcciones} onClick={() => editarHUS(x)} icon={faPen} />
                  </div>
                </td>
                :
                // Versiones Epicas
                props.elementoVer == 6 ?
                  // Verificamos si ya es lineaBase o no
                  x.lineaBase == 'No' ?
                    <td>
                      <div className={styles.ColumnaAcciones1}>
                        <FontAwesomeIcon className={styles.IconoAcciones} icon={ faHighlighter } />
                      </div>
                    </td>
                  :
                  <td>
                    Es la línea base
                  </td>
                :
                // Versiones HUS
                props.elementoVer == 7 ?
                // Verificamos si ya es lineaBase o no
                x.lineaBase == 'No' ?
                <td>
                  <div className={styles.ColumnaAcciones1}>
                    <FontAwesomeIcon className={styles.IconoAcciones} icon={ faHighlighter } />
                  </div>
                </td>
              :
              <td>
                Es la línea base
              </td>
                :
                ''
                }

              </tr>
            )
          })  
        }
      </tbody>
    </table>
  )};

TablaVer.propTypes = {
  nombre: PropTypes.string,
  correo: PropTypes.string,
  columnasTabla: PropTypes.array,
  filas: PropTypes.array,
  keys: PropTypes.array,
  elementoVer: PropTypes.number
};

TablaVer.defaultProps = {
  nombre: 'Usuario',
  correo: 'prueba@hotmail.com',
  columnasTabla: [
    'Id', 'Correo del usuario', 'Resumen', 'Tipo incidencia', 'Estimación original'
  ],
  filas: [],
  keys: [],
  /*
    elementoVer = 1 --> Proyecto
    elementoVer = 2 --> Criterio
    elementoVer = 3 --> Plantilla
    elementoVer = 4 --> Epicas
    elementoVer = 5 --> HU's
    elementoVer = 6 --> Versiones epicas
    elementoVer = 7 --> Versiones HUS
  */
  elementoVer: 1
};

export default TablaVer;
