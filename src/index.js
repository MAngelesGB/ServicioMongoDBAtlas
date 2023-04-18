const express = require('express'); //se inyecta el modulo de express
const mongoose = require('mongoose'); // se inyecta el modulo mongoose
require('dotenv').config(); // se inyecta el modulo dotenv para customizar variables de ambiente

const app = express(); // se ejecuta express
const port = process.env.PORT || 9000; // puerto por el que se escucha, se le pase una variable de ambiente, es decir toma un puerto que se da por default, en caso de no estar disponible toma el que se asigno

//routes
//ruta que muestra un mensaje
app.get('/', (req, res) =>{
    res.send("Welcome to my API"); 
});

//variable de ambiente para customizar la ruta para la conexion a la bd

// en este apartado se contecta la bd con mongoose 
//Una vez establecido la variable de ambiente con dotenv para la conexion a la base de datos, se pasa a m. 
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Connected to MongoDB Atlas")).catch((error)=>console.error(error));

app.listen(port, () => console.log('server listening on port', port)) // puerto a la escucha 
