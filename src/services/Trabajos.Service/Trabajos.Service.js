import axios from "axios";

class TrabajosService {
  
  async postTrabajos(id_proyecto, correo_usuario, fechaAsignacion) {
    return await axios.post('http://localhost:3001/trabajos', {
      id_proyecto: id_proyecto,
      correo_usuario: correo_usuario,
      fechaAsignacion: fechaAsignacion,
    })
  }
}

export default new TrabajosService();
