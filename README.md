
# Redirecionamento de links

Sistema criado para cadastro/descadastro de links de redirecionamento a partir das rotas de um domínio. Desenvolvido durante o curso do ProgramadorBR.

O sistema solicita três informações durante o processo de cadastro:

    - Título: será a rota acrescentada ao domínio;
    - Descrição: serve para orientar o usuário sobre os links que já estão cadastrados;
    - URL: link para redirecionamento do usuário.

Para desenvolvimento do front-end, foram criados arquivos ejs (Embedded JavaScript templating) e classes de estilos do bootstrap.
Para desenvolvimento do back-end, foram criados arquivos distintos para facilitação em eventuais processos de manutenção de código:
   
    - O arquivo *linkRoute* configura as rotas e as ações a serem tomadas em requisições de GET, POST ou DELETE;
    - O arquivo *linkController* armazena as funções de captura e listagem de dados no Mongo db e dispara funções de adicionar, editar, deletar e redirecionar links. É o coração do sistema.
    - O arquivo *Link* é responsável pelo desenvolvimento de Schemas, Models e collections por meio do mongoose. Para este projeto, um banco de dados com nome "links" foi criado.
    - O arquivo *app.js* faz a conexão do sistema com o mongoose, integra os arquivos ejs para renderização e configura a porta local para escuta.
## Installation

Clone:   git clone https://github.com/igorfurtado/redirecionamento_de_links


```bash
  npm install express
  npm install ejs
  npm install mongoose
```
    
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Tech Stack

**Client:** EJS, Bootstrap;

**Server:** Node, Express, Mongoose.

