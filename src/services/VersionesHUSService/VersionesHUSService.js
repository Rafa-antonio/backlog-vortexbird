import axios from "axios";

class VersionesHUSService {

  async obtenerVersionesHUS (idHU) {
    return await axios.get('http://localhost:3001/versiones-hus', {
      params: {
        idHU: idHU,
      }
    })
  }


}

export default new VersionesHUSService();
