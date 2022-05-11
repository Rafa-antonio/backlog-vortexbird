import axios from "axios";

class VersionesEpicasService {

  async obtenerVersionesEpicas (idEpica) {
    return await axios.get('http://localhost:3001/versiones-epicas', {
      params: {
        idEpica: idEpica
      }
    })
  }


}

export default new VersionesEpicasService();
