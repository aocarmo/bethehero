const express = require('express');
const cors = require('cors');
const { errors} = require('celebrate');
const routes  = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //TEM QUE VIM ANTES DAS ROTAS.. ESPECIFICA QUE OS PARAMENTROS SÃO ENVIADOS EM JSON 
app.use(routes);
app.use(errors());

module.exports = app;