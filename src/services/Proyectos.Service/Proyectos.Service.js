import axios from "axios";

class ProyectosService {

    // Crear épicas
    async crearProyectos(correo_usuario, resumen, tipoIncidencia, estimacionOriginal) {
        return await axios.post('http://localhost:3001/proyectos', {
            correo_usuario: correo_usuario,
            resumen: resumen,
            tipoIncidencia: tipoIncidencia,
            estimacionOriginal: estimacionOriginal
        })
    }

    // Obtener épicas
    async obtenerProyectos() {
        return await axios.get('http://localhost:3001/epicas');
    }
}

export default new ProyectosService();