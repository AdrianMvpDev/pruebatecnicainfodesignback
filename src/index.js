const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const morgan = require('morgan');
const { mysqlConn } = require('./database-MySQL');

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Habilita CORS para todas las rutas
app.use(cors());

// Rutas
app.use(require('./routes/routes'));

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
