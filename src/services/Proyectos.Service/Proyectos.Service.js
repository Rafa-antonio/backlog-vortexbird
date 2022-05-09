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

  async putProyectos(id, nombre, descripcion) {
    return await axios.put('http://localhost:3001/proyectos', {
      id: id,
      nombre: nombre,
      descripcion: descripcion
    })
  }

  async deleteProyectos(id) {
    return await axios.delete('http://localhost:3001/proyectos', {
      params: {
        id: id
      }
    })
  }

}

export default new ProyectosService();
