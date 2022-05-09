import axios from "axios";

class HistoriasService {

    // Crear historias
    async crearHistorias(usuario, necesidad, objetivo, idEpica, idProyecto, idCriterio, idPlantilla) {
        return await axios.post('http://localhost:3001/historias', {
            usuario: usuario,
            necesidad: necesidad,
            objetivo: objetivo,
            idEpica: idEpica,
            idProyecto: idProyecto,
            idCriterio: idCriterio,
            idPlantilla: idPlantilla
        })
    }

    // Obtener historias
    async obtenerHistorias() {
        return await axios.get('http://localhost:3001/historias');
    }
}

export default new HistoriasService();