import axios from "axios";

class EpicasService {

    // Crear épicas
    async crearEpicas(correo_usuario, resumen, tipoIncidencia, estimacionOriginal) {
        return await axios.post('http://localhost:3001/epicas', {
            correo_usuario: correo_usuario,
            resumen: resumen,
            tipoIncidencia: tipoIncidencia,
            estimacionOriginal: estimacionOriginal
        })
    }

    // Obtener épicas
    async obtenerEpicas() {
        return await axios.get('http://localhost:3001/epicas');
    }
}

export default new EpicasService();