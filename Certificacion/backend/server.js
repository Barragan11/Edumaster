const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
// 🔥 IMPORTANTE: conexión
require('./db/conexion');

// middleware
app.use(cors());
app.use(express.json());

// 🔥 IMPORTAR RUTAS
const alumnosRoutes = require('./routes/alumnosRoutes');
const authRoutes = require('./routes/authRoutes');
const cursosRoutes = require('./routes/cursosRoutes');
const tareasRoutes = require('./routes/tareasRoutes');

// 🔥 USAR RUTAS
app.use('/api/alumnos', alumnosRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/tareas', tareasRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));
// ruta prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// puerto
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});