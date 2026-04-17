const mysql = require('mysql2/promise'); // 🔥 IMPORTANTE

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'edumaster'
});

console.log('✅ Pool de MySQL listo');

module.exports = pool;