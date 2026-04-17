const express = require('express');
const router = express.Router();

const { 
  getCursos, 
  crearCurso, 
  eliminarCurso, 
  actualizarCurso, 
  getCursoById 
} = require('../controllers/cursosController');

router.get('/', getCursos);
router.post('/', crearCurso);
router.delete('/:id', eliminarCurso);
router.put('/:id', actualizarCurso);
router.get('/:id', getCursoById);
module.exports = router;