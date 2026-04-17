const TareaModel = require('../model/TareaModel');

const getTareas = async (req, res) => {
  const tareas = await TareaModel.getTareas();
  res.json(tareas);
};

const cambiarEstado = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  await TareaModel.actualizarEstado(id, estado);

  res.json({ mensaje: 'Estado actualizado' });
};

module.exports = {
  getTareas,
  cambiarEstado
};