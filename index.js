const express = require('express');

const server = express();

server.use(express.json());

//array que vai armazenar todos os projetos
const projects = {};
let qtdReq = 0; // total de requisições
let qtdReqPost = 0; // total de requisições POST
let qtdReqGet = 0; // total de requisições GET
let qtdReqPut = 0; // total de requisições PUT
let qtdReqDelete = 0; // total de requisições Delete

//middleware global mostra no terminal a quantidade de chamadas
server.use((req, res, next) => {

  //verifica qual o metodo que está sendo chamado e faz uma contagem
  switch (req.method) {
    case 'POST':
      ++qtdReqPost;
      break;
    case 'GET':
      ++qtdReqGet;
      break;
    case 'PUT':
      ++qtdReqPut;
      break;
    case 'DELETE':
       ++qtdReqDelete;
       break;

  }

  console.log('Foram feita(s) ', ++qtdReq, ' requisiçẽos no total!');
  console.log('Requisição POST ', qtdReqPost, '!');
  console.log('Requisição GET ', qtdReqGet, '!');
  console.log('Requisição PUT ', qtdReqPut, '!');
  console.log('Requisição DELETE ', qtdReqDelete, '!');

  next();
});

//middleware que valida se o existe antes de criar um novo registro
function validIdProjects(req, res, next) {

  const { id } = req.params;
  
  if (projects[id]) {
    const error = 'Product id already registered, please inform another!';
    return res.status(400).json({error})
  }
  
  return next();
};

//middleware que valida se o id informado existe
function checkIdProjects(req, res, next) {

  const { id } = req.params;

  if (!projects[id]) {
    const error = 'The project ID entered does not exist!';
    return res.status('400').json({error});
  }

  return next();
};

// inicio das rotas

//lista todos os projetos cadastrados
server.get('/projects', (req, res) => {
  return res.json(projects);
});

//busca o projeto de acordo com o id
server.get('/projects/:id', checkIdProjects, (req, res) => {
  const { id } = req.params;

  return res.json(projects[id]);
});

//salvar novos projetos
server.post('/projects/:id/tasks', validIdProjects, (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  const tasks = req.query.title;
  
  projects[id] = {
    id,
    title,
    tasks: [tasks != undefined ? tasks.split(',') : tasks]
  }

  return res.json(projects);
});

//alterar projeto
server.put('/projects/:id', checkIdProjects, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id].title = title;

  return res.json(projects);
});

//deletar projeto de acordo com o id
server.delete('/projects/:id', checkIdProjects, (req, res) => {
  const { id } = req.params;

  //deleta a posição do array de acordo com id
  delete projects[id];

  return res.send();
});

// final das rotas

server.listen(3202);