const UsuarioModel = require('../model/UsuarioModel');

const login = async (req, res) => {
  try {
    const { usuario, password } = req.body;

    const user = await UsuarioModel.loginUsuario(usuario, password);

    if (!user) {
      return res.status(401).json({
        mensaje: 'Credenciales incorrectas'
      });
    }

    res.json({
      mensaje: 'Login correcto',
      usuario: user
    });

  } catch (error) {
    res.status(500).json({ mensaje: 'Error en login' });
  }
};

const crearUsuario = async (req, res) => {
  try {
    await UsuarioModel.crearUsuario(req.body);
    res.json({ mensaje: 'Usuario creado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar' });
  }
};

module.exports = { login, crearUsuario };