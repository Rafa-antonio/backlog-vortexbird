import axios from "axios";

class CriteriosService {

    // Crear criterios
    async crearCriterios(usuario, objetivo) {
        return await axios.post('http://localhost:3001/criterios', {
            usuario: usuario,
            objetivo: objetivo
        })
    }

    // Obtener criterios
    async obtenerCriterios() {
        return await axios.get('http://localhost:3001/criterios');
    }

    // Eliminar criterios
    async deleteCriterios(idCriterio) {
        return await axios.delete('http://localhost:3001/criterios', {
            params: {
                idCriterio: idCriterio
            }
        });
    }

    // Actualizar criterios
    async putCriterios(idCriterio, usuario, objetivo) {
        return await axios.put('http://localhost:3001/criterios', {
                idCriterio: idCriterio,
                usuario: usuario,
                objetivo: objetivo
            }
        );
    }
}

export default new CriteriosService();