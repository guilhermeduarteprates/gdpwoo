const express = require('express');
const app = express();
const gdpAtualizaProduto = require('./functions/atualizaProduto');
const gdpAtualizaImagem = require('./functions/atualizaImagem');
const gdpInativaProduto = require('./functions/inativaProduto');

// Autenticação do sistema no site interno
// Aqui você implementará a lógica de autenticação com base no seu sistema

// Rotas para executar as funções
app.get('/atualiza-produto', async (req, res) => {
  await gdpAtualizaProduto();
  res.send('Atualização de produto realizada com sucesso');
});

app.get('/atualiza-imagem', async (req, res) => {
  await gdpAtualizaImagem();
  res.send('Atualização de imagem realizada com sucesso');
});

app.get('/inativa-produto', async (req, res) => {
  await gdpInativaProduto();
  res.send('Produto inativado com sucesso');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
