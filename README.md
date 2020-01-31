# Desafio 1: Conceitos do NodeJS
> Se divirta criando os seus projetos.

## Versão

<a href="https://nodejs.org/pt/"> NodeJS 12.14.1 </a>

## Instalação

``
instalação de fios 
``

## Iniciar uma API

``
dev de fios
``

## Usando a API

Adicionando um novo método de projeto do POST, chame um URL http://localhost:3202/projects/ Código que o seu projeto será criado /tasks?title= iformar os tasks que quiser seguir o exemplo abaixo:

``
http://localhost:3202/projects/1/tasks?title=Primeiro Cadastro,Segundo tasks
``

Corpo da requisição:

JSON

``
{
  "title": "Criar Novo Projeto"
}
``

Ele retornou todos os projetos cadastrados e o que acabou de ser cadastrado:

JSON

````sh
{
  "1":{
    "id": "1",
    "title": "Criar Novo Projeto",
    "tarefas": [
      [
        "Primeiro Cadastro",
        "Segundo tarefas"
      ]
    ]
  }
}
````

Buscando todos os projetos registrados método GET, chame um URL http://localhost:3202/projects/

Ele retornará todos os projetos cadastrados:

JSON

``
{
  "1": {
    "id": "1",
    "title": "Criar Novo Projeto",
    "tarefas": [
      [
        "Primeiro Cadastro",
        "Segundo tarefas"
      ]
    ]
  }
  "2": {
    "id": "2",
    "title": "Projeto GoStack",
    "tarefas": [
      [
        "Segundo Cadastro"
      ]
    ]
  }
}
``
Buscando um projeto registrado de acordo com o código informado GET, chame um URL http://localhost:3202/projects/ Código do projeto

``
http://localhost:3202/projects/1
``

Ele retornará todos os projetos cadastrados:

JSON
``
{
  "1": {
    "id": "1",
    "title": "Criar Novo Projeto",
    "tarefas": [
      [
        "Primeiro Cadastro",
        "Segundo tarefas"
      ]
    ]
  }
}
``

Alterando o projeto registrado de acordo com o código informado método PUT, chame um URL http://localhost:3202/projects/ Código do projeto

``
http://localhost:3202/projects/1
`` 

Corpo da requisição:

JSON
`` 
{
	"title": "Alterar Projeto"
}
``

Ele retornou todos os projetos registrados, incluindo o que foi alterado:

JSON

``
{
  "1": {
    "id": "1",
    "title": "Alterar Projeto",
    "tarefas": [
      [
        "Primeiro Cadastro",
        "Segundo tarefas"
      ]
    ]
  }
  "2": {
    "id": "2",
    "title": "Projeto GoStack",
    "tarefas": [
      [
        "Segundo Cadastro"
      ]
    ]
  }
}
``
Excluindo um projeto registrado de acordo com o código informado DELETE, chame um URL http://localhost:3202/projects/ Código do projeto

``
http://localhost:3202/projects/1
``

Ele retornou o código:

``
200
``