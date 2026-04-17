const pool = require('../db/conexion');

async function getAllCursos() {
  const [rows] = await pool.query('SELECT * FROM cursos');
  return rows;
}


async function createCurso(curso) {
  const { 
    nombre, 
    descripcion, 
    imagen,
    descripcion_larga,
    duracion,
    costo,
    nivel
  } = curso;

  const [result] = await pool.query(
    `INSERT INTO cursos 
    (nombre, descripcion, imagen, descripcion_larga, duracion, costo, nivel) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [nombre, descripcion, imagen, descripcion_larga, duracion, costo, nivel]
  );

  return result;
}

async function deleteCurso(id) {
  const [result] = await pool.query(
    'DELETE FROM cursos WHERE id = ?',
    [id]
  );

  return result;
}

async function updateCurso(id, curso) {
  const { 
    nombre, 
    descripcion, 
    imagen,
    descripcion_larga,
    duracion,
    costo,
    nivel 
  } = curso;

  console.log('DATOS SQL:', curso); // 🔥

  const [result] = await pool.query(
    `UPDATE cursos 
     SET nombre = ?, descripcion = ?, imagen = ?, 
         descripcion_larga = ?, duracion = ?, costo = ?, nivel = ?
     WHERE id = ?`,
    [nombre, descripcion, imagen, descripcion_larga, duracion, costo, nivel, id]
  );

  console.log('RESULT:', result); // 🔥

  return result;
}

async function getCursoById(id) {
  const [rows] = await pool.query(
    'SELECT * FROM cursos WHERE id = ?',
    [id]
  );

  return rows[0];
}

module.exports = {
  getAllCursos,
  createCurso,
  deleteCurso,
  updateCurso,
  getCursoById
};
