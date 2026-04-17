const express = require('express');
const router = express.Router();

const {
  getTareas,
  cambiarEstado
} = require('../controllers/tareasController');

// 🔥 OBTENER TODAS LAS TAREAS
router.get('/', getTareas);

// 🔥 CAMBIAR ESTADO
router.put('/:id', cambiarEstado);

module.exports = router;