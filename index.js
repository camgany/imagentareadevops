const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Usa cors como middleware
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: 'mysql',
  port: '3306',
  user: 'root',
  password: 'pass123',
  database: 'formulario'
});

db.connect((error) => {
  if (error) {
    console.error('Error conectando a la base de datos:', error);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.post('/contentcreators', (req, res) => {
    const { names, channelName, subscribersCount, mostViewedVideo } = req.body;
    const query = `INSERT INTO contentcreators (names, channelName, subscribersCount, mostViewedVideo) 
                   VALUES ('${names}', '${channelName}', '${subscribersCount}', '${mostViewedVideo}')`;    

  db.query(query, (error) => {
    if (error) {
      console.error('Error insertando en la base de datos:', error);
      res.status(500).send('Error insertando en la base de datos');
      return;
    }

    res.status(200).send('Creador insertada correctamente');
  });
});

app.listen(5000, () => {
  console.log('Servidor escuchando en el puerto 5000');
});