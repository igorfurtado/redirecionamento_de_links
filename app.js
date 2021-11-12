const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose'); //Mongoose trabalha mapeando objetos relacionais (conversão de objetos em memória para dados relacionais, e vice-versa)
const path = require('path');
const linkRoute = require('./routes/linkRoute');

// //Adicionando documentos ao modelo:
// let link = new Link({
//     title: "Twitter de Igor",
//     //description: "Link para rede social",
//     url: "https://twitter.com/igorfurtado_"
// });

// Chamando o método save para colocar o link no banco de dados:
// Para saber se deu tudo certo, chamamos um 'then()'
// link.save().then(doc => {
//     console.log(doc);
// }).catch(err => {
//     console.log(err);
// });

// Criando a conexão do mongoose com o banco de dados
// mongoose.connect("mongodb://localhost/newlinks", (error, db) => {
//     //Callback traz um erro e o banco de dados:
//     console.log(error);
//     console.log(db);
// });

//Outra forma de conectar o mongoose com o banco de dados (através de uma Promise):
// mongoose.connect("mongodb://localhost/links").then(db => {
//     console.log(db);
// }).catch((error) => {
//     console.log(error);
// });

//Outra forma de conexão:
mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro.") });
db.once("open", () => {
    console.log("Banco de dados carregado");
});

//Utilizando template ejs para criação do front-end:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRoute);


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})