import axios from "axios";

class VersionesEpicasService {

  async obtenerVersionesEpicas (idEpica, idProyecto) {
    return await axios.get('http://localhost:3001/versiones-epicas', {
      params: {
        idEpica: idEpica,
        idProyecto: idProyecto
      }
    })
  }


}

export default new VersionesEpicasService();
