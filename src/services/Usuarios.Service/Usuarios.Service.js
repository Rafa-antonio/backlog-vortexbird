import axios from "axios";

class UsuariosService {

  async login(correo, usuario, contrasena) {
    return await axios.get('http://localhost:3001/usuarios', 
      {
        params: {
          correo: correo,
          usuario: usuario,
          contrasena: contrasena
        }
      });
  }

  async getAnalistas() {
    return await axios.get('http://localhost:3001/usuarios-asignar');
  }

}

export default new UsuariosService();