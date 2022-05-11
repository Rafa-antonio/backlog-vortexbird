import axios from "axios";

class TrabajosService {
  
  async postTrabajos(id_proyecto, correo_usuario, fechaAsignacion) {
    return await axios.post('http://localhost:3001/trabajos', {
      id_proyecto: id_proyecto,
      correo_usuario: correo_usuario,
      fechaAsignacion: fechaAsignacion,
    })
  }

  async getTrabajos(correo) {
    return await axios.get('http://localhost:3001/trabajos', {
      params: {
        correo: correo
      }
    })
  }
}

export default new TrabajosService();
