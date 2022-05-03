import axios from "axios";

class PlantillasService {

    // Crear plantillas
    async crearPlantillas(pruebasUnitarias, pruebasCalidadCodigo, pruebasFuncionales, 
        requisitosNFuncionales, documentacion, tipo) {
            return await axios.post('http://localhost:3001/plantillas', {
                pruebasUnitarias: pruebasUnitarias,
                pruebasCalidadCodigo: pruebasCalidadCodigo,
                pruebasFuncionales: pruebasFuncionales,
                requisitosNFuncionales: requisitosNFuncionales,
                documentacion: documentacion,
                tipo: tipo
            })
    }

    // Obtener plantillas
    async obtenerPlantillas() {
        return await axios.get('http://localhost:3001/plantillas');
    }

}

export default new PlantillasService();