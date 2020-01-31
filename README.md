# Desafio 1: Conceitos do NodeJS
> Se divirta criando os seus projetos.

! [] (header.png)

## Versão

<a href="https://nodejs.org/pt/"> NodeJS 12.14.1 </a>

## Instalação

`` sh
instalação de fios 
`` ``

## Iniciar uma API

`` sh
dev de fios
`` ``

## Usando a API

Adicionando um novo método de projeto do POST, chame um URL http: // localhost: 3202 / projects / Relatório de Código que o seu projeto será criado / tasks? Title = Relatório ou mais títulos selecionados por ordem de seguir o exemplo abaixo:

`` sh
http: // localhost: 3202 / projects / 1 / tasks? title = Primeiro Cadastro, Segundo tarefas
`` ``
Corpo da requisição:
`` sh
{
	"title": "Criar Novo Projeto"
}
`` ``
Ele retornou todos os projetos cadastrados e o que acabou de ser cadastrado:
`` sh
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
`` ``

Buscando todos os projetos registrados método GET, chame um URL http: // localhost: 3202 / projects /

Ele retornará todos os projetos cadastrados:
`` sh
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
`` ``
Buscando um projeto registrado de acordo com o código informado GET, chame um URL http: // localhost: 3202 / projects / Relatório de código do projeto
`` sh
http: // localhost: 3202 / projects / 1
`` ``
Ele retornará todos os projetos cadastrados:
`` sh
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
`` ``
Alterando o projeto registrado de acordo com o código informado método PUT, chame um URL http: // localhost: 3202 / projects / Relatório de código do projeto
`` sh
http: // localhost: 3202 / projects / 1
`` ``
Corpo da requisição:
`` sh
{
	"title": "Alterar Projeto"
}
`` ``
Ele retornou todos os projetos registrados, incluindo o que foi alterado:
`` sh
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
`` ``
Excluindo um projeto registrado de acordo com o código informado DELETE, chame um URL http: // localhost: 3202 / projects / Relatório de código do projeto
`` sh
http: // localhost: 3202 / projects / 1
`` ``
Ele retornou o código:
`` sh
200
`` ``