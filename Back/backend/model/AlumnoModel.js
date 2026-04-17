const pool = require('../db/conexion');

async function getAllAlumnos() {
  const [rows] = await pool.query('SELECT * FROM alumnos');
  return rows;
}

async function createAlumno(alumno) {
  const { nombre, correo, telefono, matricula, carrera } = alumno;

  await pool.query(
    `INSERT INTO alumnos (nombre, correo, telefono, matricula, carrera)
     VALUES (?, ?, ?, ?, ?)`,
    [nombre, correo, telefono, matricula, carrera]
  );
}

async function deleteAlumno(id) {
  await pool.query('DELETE FROM alumnos WHERE id = ?', [id]);
}

module.exports = {
  getAllAlumnos,
  createAlumno,
  deleteAlumno
};
