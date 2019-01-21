const express = require('express');
const lasrutas = express.Router();//obj




lasrutas.get('/',function (req, res) {
  //res.send('<h1>"text"</h1>');
  res.render('index.ejs');
  res.end;
});

lasrutas.get('/login',function (req, res) {
  res.send('<h1>"login"</h1>');
  res.end;
});





///COSAS DE POSTGRES EJ ///////////
const client= require('./postgres');
client.connect();

lasrutas.get('/postgres', (req, res) =>{
  client.query('SELECT * FROM empleados')
      .then(response => {
          console.log(response.rows)
          res.send(respose.rows[0])

          //client.end()
      })
      .catch(err => {
          client.end()
      })
});


lasrutas.get('/get/json', (req, res) =>{
  //res.send("mensaje normal\n");
  res.json({msg: "msg con json", msg2:"msg2"});

});


lasrutas.get('/get/:id/:status', (req, res)=>{
  const consulta={
    text: "SELECT * FROM empleados WHERE id_empleado= $1 AND estado_empleado=$2",
    values:[req.params.id, req.params.status]
    //values:[100, 'activo']
  }

  client.query(consulta)
    .then(respose=>{
      console.log(respose.rows[0])
      res.send(respose.rows)

      //client.end() no cierres el client
    })
    .catch(err =>{
      console.error(err);
      res.send(err);
      //client.end();
    })
});



lasrutas.post('/send', (req, res)=>{
  //curl -d "id=101&estado=activo" localhost:3000/send
    console.log(req.body);

    var id= req.body.id;
    res.send(id);
});


lasrutas.post('/add', (req, res)=>{
  //curl -d "id=101&nombre=recetaSinNombre&ingredientes=bla bla bla" localhost:3000/add

  const consulta={
    text: "INSERT INTO recetas VALUES($1, $2, $3)",
    values:[req.body.id, req.body.nombre, req.body.ingredientes]
  }

  client.query(consulta)
    .then(respose=> {
      res.send('agregado :) \n');
    })
    .catch(err=>{
      res.send(err);
      console.error(err);
    })
});





/*
lasrutas.get('/postgresql', (req, res) =>{
  client.query('SELECT * FROM empleados WHERE id_empleado=100')
      .then(response => {
          console.log(response.rows)
          client.end()
      })
      .catch(err => {
          client.end()
      })
});

/*
const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
const val = ['brianc', 'brian.m.carlson@gmail.com']

lasrutas.get('/add', (req, res) =>{

const query ={
  text:
  values:[1202020,
    'SEDE1',
    'nombre',
    'apellido',
    'super administrador',
    '1234',
    'activo' ]
  },

  client.query('INSERT INTO empleados(values) RETURNING *')
      .then(response => {
          console.log(response.rows)
          client.end()
      })
      .catch(err => {
          client.end()
      })
});

*/




lasrutas.get('*', function (req, res){//para todas las demas / no configuradas
  res.end("ARCHIVO NO ENCONTRADO");

});

module.exports= lasrutas;
