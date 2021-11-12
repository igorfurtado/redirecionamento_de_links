const mongoose = require('mongoose');

// Construindo o molde do esquema (padronização que terá cada documento)
const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
});

//Model: aponta para a coleção, informando que ali terão vários documentos com um certo esquema. Geralmente criada com letra inicial maiúscula.
//Criando uma coleção onde todos os documentos seguem os moldes do Schema:
//A coleção é salva no mongo db como 'links', plural de Link, indicando que ali haverão vários itens desse schema.
module.exports = mongoose.model('Link', linkSchema);

//Exemplificando com o outro schema:
// const personSchema = new mongoose.Schema({
//     name: { type: String, required: true }, //Também podemos construir o esquema passando que um determinado argumento é obrigatório.
//     age: Number
// });

// const Person = mongoose.model('Person', personSchema);

// let person = new Person({
//     name: "José",
//     age: 23
// });

// person.save().then(doc => { console.log(doc) });