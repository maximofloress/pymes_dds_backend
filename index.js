const express = require('express');
const app = express();
const articulosFamiliaRouter = require("./routes/articulosFamiliaRouter");
const articulosRouter = require("./routes/articulosRouter");

app.use(express.json()); 
require("./base-orm/sqlite-init");
app.use(articulosFamiliaRouter);
app.use(articulosRouter);

app.get('/', (req, res) => {
    res.send('API backend de Pymes corriendo...');
    });

const port = 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    });

