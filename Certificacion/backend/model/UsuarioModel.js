const pool = require('../db/conexion');

async function loginUsuario(usuario, password) {
  const [rows] = await pool.query(
    'SELECT * FROM usuarios WHERE usuario = ? AND password = ?',
    [usuario, password]
  );

  return rows[0];
}

async function crearUsuario(usuario) {
  const { usuario: user, password, rol } = usuario;

  await pool.query(
    'INSERT INTO usuarios (usuario, password, rol) VALUES (?, ?, ?)',
    [user, password, rol]
  );
}

module.exports = { loginUsuario, crearUsuario };