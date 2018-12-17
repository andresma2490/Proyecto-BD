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

lasrutas.get('*', function (req, res){//para todas las demas / no configuradas
  res.end("ARCHIVO NO ENCONTRADO");

});


module.exports= lasrutas;
