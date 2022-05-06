import axios from "axios";

class TrabajosService {
  
  async postTrabajos(id_proyecto, correo_usuario, fechaInicio, fechaFinalizacion) {
    return await axios.post('http://localhost:3001/trabajos', {
      id_proyecto: id_proyecto,
      correo_usuario: correo_usuario,
      fechaInicio: fechaInicio,
      fechaFinalizacion: fechaFinalizacion
    })
  }
}

export default new TrabajosService();
