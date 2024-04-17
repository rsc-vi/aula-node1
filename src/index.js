const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//app.use(express.urlencoded()); //via form

//arrow function(estudar)
//get>>pegar
app.get('/abagaras', (req, res) => {
  res.send('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAAAAA');
});

//post>>submeter e enviar
//com a mesma assinatura, metódos deferentes
app.post('/', function (req, res) {
  let dados = req.body.dados;  
 


  res.send(`Meus dados: ${dados.nome}; ${dados.email};${dados.telefone};${dados.endereco}`);
  console.log(dados)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//c0isas para amanha
// no forme usar o >>>metodo='pst' action=http..."
//<input id='nome' nome="nome">
//form
//vc consegue!!!