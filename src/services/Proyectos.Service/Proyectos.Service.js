import axios from "axios";

class ProyectosService {

  // Obtiene todos los proyectos
  async getProyectos() {
    return await axios.get('http://localhost:3001/proyectos');
  }

  async postProyectos(nombre, descripcion) {
    return await axios.post('http://localhost:3001/proyectos', 
    {
      nombre: nombre,
      descripcion: descripcion
    })
  }

  async putProyectos() {
    
  }

  async deleteProyectos(id) {
    return await axios.delete('http://localhost:3001/proyectos')
  }

}

export default new ProyectosService();
