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

    async obtenerHistoriasEpica(idEpica) {
        return await axios.get('http://localhost:3001/historias-epica', {
            params: {
                idEpica: idEpica
            }
        })
    }

    async deleteHistorias(idHU) {
        return await axios.delete('http://localhost:3001/historias', {
            params: {
                idHU: idHU
            }
        })
    }

    async putHistorias(id, usuario, necesidad, objetivo, elCriterio, laPlantilla) {
        return await axios.put('http://localhost:3001/historias', {
            id: id, 
            usuario: usuario, 
            necesidad: necesidad,
            objetivo: objetivo,
            elCriterio: elCriterio,
            laPlantilla: laPlantilla
        })
    }
}

export default new HistoriasService();