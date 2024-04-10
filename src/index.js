const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

//arrow function(estudar)
//get>>pegar
app.get('/tuma', (req, res) => {
  res.send('Hello jaciane!');
});

//post>>submeter
//com a mesma assinatura, metódos deferentes
app.post('/', function (req, res) {
  console.log(req.body?.nome)
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
