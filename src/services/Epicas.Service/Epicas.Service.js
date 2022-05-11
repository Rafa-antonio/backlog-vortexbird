import axios from "axios";

class EpicasService {

    // Crear épicas
    async crearEpicas(correo_usuario, idProyecto, resumen, tipoIncidencia, estimacionOriginal) {
        return await axios.post('http://localhost:3001/epicas', {
            correo_usuario: correo_usuario,
            idProyecto: idProyecto,
            resumen: resumen,
            tipoIncidencia: tipoIncidencia,
            estimacionOriginal: estimacionOriginal
        })
    }

    // Obtener épicas
    async obtenerEpicas(idProyecto) {
        return await axios.get('http://localhost:3001/epicas', {
            params: { 
                idProyecto: idProyecto
            }
        });
    }

    async putEpicas(idEpica, resumen, tipoIncidencia, estimacionOriginal) {
        return await axios.put('http://localhost:3001/epicas', {
            idEpica: idEpica,
            resumen: resumen,
            tipoIncidencia: tipoIncidencia,
            estimacionOriginal: estimacionOriginal
        })
    }

    async deleteEpicas(idEpica, idProyecto) {
        return await axios.delete('http://localhost:3001/epicas', {
            params: {
                idEpica: idEpica,
                idProyecto: idProyecto
            }
        })
    }

}

export default new EpicasService();