
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
    
É necessário o Mongo db estar rodando para que a porta configurada seja escutada pelo navegador local.
    
## Installation

Clone:   git clone https://github.com/igorfurtado/redirecionamento_de_links


```bash
  npm install express
  npm install ejs
  npm install mongoose
```
    
## Screenshots

![Página inicial](https://user-images.githubusercontent.com/70289587/141529237-1c59dd6c-e07d-4e88-a894-c52a4d79594d.png)
![Adicionando links](https://user-images.githubusercontent.com/70289587/141529380-880a8ee6-12e5-4892-8cb0-5d27714cd8bd.png)
![Editando links](https://user-images.githubusercontent.com/70289587/141529428-204e781d-7c95-4253-b2c2-4e4ab18350a1.png)



## Tech Stack

**Client:** EJS, Bootstrap;

**Server:** Node, Express, Mongoose.

