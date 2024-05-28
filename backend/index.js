const express = require('express');
const app = express();

// para poder leer json en el body, verificar que siempre este antes de las rutas
app.use(express.json()); 

// Vinculamos el controlador de nuestro recurso a nuestra aplicación express   cl
const articulosfamiliasmockRouter = require("./routes/articulosfamiliasmock");
app.use(articulosfamiliasmockRouter);
    


app.get('/', (req, res) => {
    res.send('Hello World!');
    });

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

