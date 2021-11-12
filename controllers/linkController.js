const Link = require('../models/Link');

const redirect = async (req, res, next) => {
    let title = req.params.title; //capturando o título pela rota
    try {
        let doc = await Link.findOneAndUpdate({ title: title }, { $inc: { click: 1 } }); //Pausa a função e espera a resolução do findOne()
        if (doc) {
            res.redirect(doc.url); //Só vai ser executado quando o doc capturar o elemento pelo seu título.
        }
        else {
            next(); //tenta a próxima rota
        }
    } catch (error) {
        res.send(error);
    }
};

//Adicionando documentos
const addLink = async (req, res) => {
    let link = new Link(req.body);

    try {
        let doc = await link.save();
        res.redirect("/"); //Após adicionar um link, redirecionamento para a página que mostra todos os links
    } catch (error) {
        res.render('add.ejs', { error, body: req.body }); //req.body reenvia os dados que já haviam sido preenchidos pelo usuário, fazendo com que não sejam apagados caso haja um erro.
    };
};

//Fazendo a busca no banco de dados e listando todos os links
const allLinks = async (req, res) => {
    try {
        let docs = await Link.find({}); //Buscando no banco de dados por todos os elementos
        res.render('all.ejs', { links: docs });
    } catch (error) {
        res.send(error);
    };
};

const deleteLink = async (req, res) => {

    let id = req.params.id; //Capturando o id por meio dos params (digitado no endereço url pelo cliente);
    if (!id) {
        id = req.body.id; //Pegando o id pelo body
    }
    try {
        await Link.findByIdAndDelete(id); //Função do módulo link para apagar um id a partir de um id;
        res.send(id);
    } //res.send retorna objeto deletado
    catch (error) {
        res.status(404).send(error); //Quando um elemento(id) não é encontrado, retorna um erro 404.
    };
};

const loadLink = async (req, res) => {

    let id = req.params.id; //Capturando o id por meio dos params (digitado no endereço url pelo cliente);

    try {
        let doc = await Link.findById(id); //Função do módulo link para apagar um id a partir de um id;
        res.render('edit.ejs', { error: false, body: doc })
    } //res.send retorna objeto deletado
    catch (error) {
        res.status(404).send(error); //Quando um elemento(id) não é encontrado, retorna um erro 404.
    };
};

const editLink = async (req, res) => {
    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }

    try {
        let doc = await Link.findByIdAndUpdate(id, link); //passando o id a ser modificado e o que será modificado
        res.redirect("/"); //Após adicionar um link, redirecionamento para a página que mostra todos os links
    } catch (error) {
        res.render('edit.ejs', { error, body: req.body }); //req.body reenvia os dados que já haviam sido preenchidos pelo usuário, fazendo com que não sejam apagados caso haja um erro.
    };
};

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink };