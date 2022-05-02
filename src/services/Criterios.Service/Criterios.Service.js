import axios from "axios";

class CriteriosService {

    // Crear criterios
    async crearCriterios(correo_usuario, resumen, tipoIncidencia, estimacionOriginal) {
        return await axios.post('http://localhost:3001/criterios', {
            correo_usuario: correo_usuario,
            resumen: resumen,
            tipoIncidencia: tipoIncidencia,
            estimacionOriginal: estimacionOriginal
        })
    }

    // Obtener criterios
    async obtenerCriterios() {
        return await axios.get('http://localhost:3001/criterios');
    }
}

export default new CriteriosService();