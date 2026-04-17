const express = require('express');
const router = express.Router();

const {
  getAlumnos,
  crearAlumno,
  eliminarAlumno
} = require('../controllers/alumnosController');

router.get('/', getAlumnos);
router.post('/', crearAlumno);
router.delete('/:id', eliminarAlumno);

module.exports = router;