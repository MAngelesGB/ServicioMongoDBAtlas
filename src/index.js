const express = require('express'); //se importa la dependencia de express
const mongoose = require('mongoose'); // se importa la dependencia de mongoose
/* se importa la dependencia dotenv y se ejecuta con el .config() 
para accessar a variables de ambiente que hayamos creado*/
require('dotenv').config(); 

const app = express(); // se ejecuta express
/*se le pasa una variable de ambiente de node.js. Si se despliega la aplicacion en un servicio de hosting
permite tomar un puerto que da el servicio, y en caso de no estar disponible toma el que se le dio previamente*/ 
const port = process.env.PORT || 9000; // puerto por el que se va a escuchar. 

//routes --------------------------------------------

//ruta definida para verificar que el servidor este respondiendo correctamente
app.get('/', (req, res) =>{
    res.send("Welcome to my API"); //mensaje a mostrar
});

//mongdb connection --------------------------------

/*

--> Para la conexion se necesita de una URI que es una llave que proporciona la misma plataforma de mongodb atlas 
para obtener acceso a la bd creada en esa misma plataforma. 

--> Por medio de dotenv se crea una variable de ambiente customizada. Se crea un nuevo archivo donde se crea la variable
MONGODB_URI en donde se le asigna la llave para el acceso a la bd.  

--|variable de ambiente: son cadenas con informacion del entorno del sistema y del usuario que haya iniciado sesion

--> Se usa la variable que se creo para la conexion.
    -- Se muestra un mensaje en caso de que la conexion sea exitosa. 
    -- se utiliza un catch para mostrar el errror en caso de que ocurra alguno.     
*/
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Connected to MongoDB Atlas")).catch((error)=>console.error(error));

app.listen(port, () => console.log('server listening on port', port)) // puerto a la escucha 
