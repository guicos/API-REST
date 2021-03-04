# API RESTful :tw-1f4da:

> CONCEITOS DE UMA API
	API - Interface de Programação de Aplicações

Se trata da comunicação entre aplicações e usuarios, de forma que você pode utilizar as funcionalidades nela estabelecidas sem que seu software tenha real conhecimento do que ocorre na aplicação a ser consumida.

**OQUE RAIOS É REST ?**
>REST - Transferência de Estado Representacional

Se trata de um conjunto de  princípios/regras/constraints que ao ser utilizados conseguimos criar uma aplicação de interface e comunicaveis Ex: as APIs.

**SOBROU FALAR OQUE É RESTful **

Nada mais que a utilização dos principios/regras/constraints na criação de sua APIs. 

Para saber mais segue [link](https://becode.com.br/o-que-e-api-rest-e-restful/ "link") com bem mais informativos realizei esse breve resumo para treinamento de meus conceitos do que realmente absorve desse mini-projeto.

##APLICAÇÃO

Crianção de uma APIs de produtos consumindo um banco de dados **postgresql** No momento ela só roda localmente, porém a intenção é a parti desse back-end desenvolver um front de visando E-commecer.

**Arquitetura de Projeto** - Utilizei um padrão de 3 camadas sendo só rotas/controllers/models onde futuramente irei transforma em MVC com a inclusão das views em React.js.

**Design Patterns** - No atual momento testeti a utilização do conceito de Factory nas minhas class, porém não sei se realizei de maneira correta (OBS: Fique a vontade para liberar sugestões e dicas no final desde README.md segue meus contatos)

**COMANDOS**

Para utilizar é necessario a criação do banco de dados Produtos, tabela produto e os atributos;

id_produto | nome | qtd | price | data;

Após a criação e conferir os dados para conexão no banco no arquivo "./databaseConfig.js" dentro das pastas "./config/database" e finalizando esses passos e já ter rodado o "*npm install*" basta colocar no cmd dentro da pasta API-REST o comando "nodemon app" que ira rodar o servidor criado pelo express e o babel.

[Linkedin](https://www.linkedin.com/in/rinaldo-guilherme-b56906158/ "Linkedin")
rinaldoguilherme2000@gmail.com
