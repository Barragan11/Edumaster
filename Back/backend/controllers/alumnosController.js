const AlumnoModel = require('../model/AlumnoModel');

const getAlumnos = async (req, res) => {
  try {
    const alumnos = await AlumnoModel.getAllAlumnos();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener alumnos' });
  }
};

const crearAlumno = async (req, res) => {
  try {
    await AlumnoModel.createAlumno(req.body);
    res.json({ mensaje: 'Alumno creado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear alumno' });
  }
};

const eliminarAlumno = async (req, res) => {
  try {
    const { id } = req.params;

    await AlumnoModel.deleteAlumno(id);

    res.json({ mensaje: 'Alumno eliminado' });

  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar alumno' });
  }
};

module.exports = {
  getAlumnos,
  crearAlumno,
  eliminarAlumno
};