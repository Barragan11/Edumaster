const CursoModel = require('../model/CursoModel');

const getCursos = async (req, res) => {
  try {
    const cursos = await CursoModel.getAllCursos();
     console.log('CURSOS DESDE NODE:', cursos); 
    res.json(cursos);
  } catch (error) {
  console.error("ERROR REAL:", error); 🔥
  res.status(500).json({ 
    mensaje: 'Error al obtener cursos',
    error: error.message
  });
}
};

const crearCurso = async (req, res) => {
  try {
    const { nombre, descripcion, imagen } = req.body;

    await CursoModel.createCurso({ nombre, descripcion, imagen });

    res.json({ mensaje: 'Curso creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear curso' });
  }
};

const eliminarCurso = async (req, res) => {
  try {
    const { id } = req.params;

    await CursoModel.deleteCurso(id);

    res.json({ mensaje: 'Curso eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar curso' });
  }
};

const actualizarCurso = async (req, res) => {
  try {
    const { id } = req.params;

    console.log('ID:', id); // 🔥
    console.log('BODY:', req.body); // 🔥

    await CursoModel.updateCurso(id, req.body);

    res.json({ mensaje: 'Curso actualizado correctamente' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar curso' });
  }
};

const getCursoById = async (req, res) => {
  try {
    const { id } = req.params;

    const curso = await CursoModel.getCursoById(id);

    res.json(curso);

  } catch (error) {
    res.status(500).json({ mensaje: 'Error' });
  }
};
module.exports = {
  getCursos,
  crearCurso,
  eliminarCurso, 
  actualizarCurso,
  getCursoById
};
