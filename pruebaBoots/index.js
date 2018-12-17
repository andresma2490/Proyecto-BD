
const express= require('express');
const server= express();

//declarar el puerto
server.set('puerto', process.env.PORT || 3000);

//iniciar el server
server.listen(server.get('puerto'), ()=>{
  console.log("Servidor iniciado");
});


//algunas configuraciones
const path = require('path');//modulo para rutas en otros SO

server.set('views', path.join(__dirname, 'web','htmls'));//porque busca los .ejs en /views

server.use(express.static(path.join(__dirname, 'web')));//para usar(direccionar) todo en /web


//usar los / de rutas.js
const rutas= require('./rutas');
server.use(rutas);
