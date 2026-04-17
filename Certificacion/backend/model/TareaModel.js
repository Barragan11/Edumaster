const pool = require('../db/conexion');

async function getTareas() {
  const [rows] = await pool.query(`
    SELECT t.*, c.nombre AS curso
    FROM tareas t
    LEFT JOIN cursos c ON t.curso_id = c.id
  `);

  return rows;
}

async function actualizarEstado(id, estado) {
  await pool.query(
    'UPDATE tareas SET estado = ? WHERE id = ?',
    [estado, id]
  );
}

module.exports = {
  getTareas,
  actualizarEstado
};