
const express= require('express');
const server= express();

const lasrutas = express.Router();

var bodyParser = require('body-parser');
server.use(bodyParser.json()); // support json encoded bodies
server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



//const pg = require('pg');
//const conString= "postgress://postgress:1234@localhost/proyectoBD"

const morgan = require('morgan')//distiguir los metodos http
server.use(morgan('dev'))


//declarar el puerto
server.set('puerto', process.env.PORT || 3000);

//iniciar el server
server.listen(server.get('puerto'), ()=>{
  console.log("Servidor iniciado");
  console.log( path.join(__dirname, ".."));//ruta un nivel atras de src
});


//algunas configuraciones
const path = require('path');//modulo para rutas en otros SO

server.set('views', path.join(__dirname, '..' ,'front','htmls'));//porque busca los .ejs en /views
server.use(express.static(path.join(__dirname, '..','front')));//para usar(direccionar) todo en /web


//server.use(client);





/*/usar los / de rutas.js
lasrutas.get('/data', function(req, res){
    var client= new pg.client(conString);

    client.connect();
    var consulta= client.query("");
});*/

/*
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
})

/*pool.query('SELECT * from users', (err, res) => {
  console.log(err, res)
  pool.end()
})*/
/* JAMAS USA LAS RUTAS AQUI PUESTAS
const client= require('./postgres');

lasrutas.get('/accounts',function (req, res) {
  client.connect()
  client.query('SELECT * FROM empleados WHERE id_empleado=100')
      .then(response => {
          console.log(response.rows)
          client.end()
      })
      .catch(err => {
          client.end()
      })
});

*/


const rutas= require('./rutas');
server.use(rutas);








//
