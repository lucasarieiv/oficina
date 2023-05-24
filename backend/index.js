const express = require('express');
const cors = require('cors');

const connection = require('./connection');
const server = express();

server.use(cors());
server.use(express.json());

server.get('/', async (request, response) => {
   return response.send('Olá mundo')
})

server.get('/filmes', async (request, response) => {
    const respostaFilmes = await connection.execute('SELECT * FROM filmes');

    return response.status(200).json(respostaFilmes[0])
})

server.post('/filmes', async (request, response) => {
    const dados = request.body;

    const nome = dados.nome
    const diretor = dados.diretor
    const imagem = dados.imagem
    const categoria = dados.categoria
    const ano = dados.ano
    const duracao = dados.duracao_min

    const query = 'INSERT INTO filmes(nome, imagem, diretor, categoria, ano, duracao_min) VALUES (?, ?, ?, ?, ?, ?)';
    const criar = await connection.execute(query, [nome, imagem, diretor, categoria, ano, duracao]);

    return response.status(201).json(dados)
})

server.get('/filmes/:id', async (request, response) => {
    const params = request.params;
    const respostaFilmes = await connection.execute(`SELECT * FROM filmes WHERE id = ${params.id}`)

    return response.json(respostaFilmes[0]);
})

server.put('/filmes/:id', async (request, response) => {
    const params = request.params;
    const dados = request.body;
    const query = 'UPDATE filmes SET nome = ?, diretor = ?, genero = ?, ano = ?, duracao_min = ? WHERE id = ?';
    
    const id = params.id
    const nome = dados.nome
    const diretor = dados.diretor
    const genero = dados.genero
    const ano = dados.ano
    const duracao = dados.duracao_min

    await connection.execute(query, [nome, diretor, genero, ano, duracao, id]);
    return response.status(200).send(dados);
})

server.delete('/filmes/:id', async (request, response) => {
    const params = request.params;
    const query = 'DELETE FROM filmes WHERE id = ?'
    await connection.execute(query, [params.id]);

    return response.status(200).send('OK');
})

server.listen(3000, () => {
    console.log('Server is running :)');
}) 
