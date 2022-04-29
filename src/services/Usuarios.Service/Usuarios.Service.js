import axios from "axios";

class UsuariosService {

  async login(usuario, contrasena) {
    return await axios.get('http://localhost:3001/usuarios', 
      {
        params: {
          usuario: usuario,
          contrasena: contrasena
        }
      });
  }

}

export default new UsuariosService();