const express = require('express');
const cors = require('cors');
const pagoRoutes = require('./routes/pagoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/pagos', pagoRoutes);

app.get('/', (req, res) => {
  res.json({"Bienvenida": "Api rest parkapp"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
