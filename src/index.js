const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//app.use(express.urlencoded()); //via form

//arrow function(estudar)
//get>>pegar
app.get('/tuma', (req, res) => {
  res.send('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
});

//post>>submeter e enviar
//com a mesma assinatura, metódos deferentes
app.post('/', function (req, res) {
  let dados = req.body.dados;  
  let dados1 = req.body.dados;
  let dados2 = req.body.dados;
  let dados3 = req.body.dados;

  res.send(`Meus dados: ${dados1.nome}; ${dados2.email}; ${dados3.telefone}`);
  console.log(dados)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
