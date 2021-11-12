const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

//Mostrando todos os links salvos
router.get('/', linkController.allLinks); //Importante: essa linha de código tem que vir antes da linha que chama a função redirect após buscar pelo título, pois senão esta buscaria um título chamado all e retornaria uma lista de links vazias.
//Ações a serem tomadas quando essa rota (/:title) é chamada:
router.get("/:title", linkController.redirect);
router.get('/add', (req, res) => {
    res.render('add.ejs', { error: false, body: {} });  //O que será mostrado na rota localhost:3000/
}); //error: false inserido para não apresentar mensagem de erro durante a renderização da página. A mensagem de erro (eventual) foi configurada
//via ejs.
router.get('/edit/:id', linkController.loadLink);

router.post('/', express.urlencoded({ extended: true }), linkController.addLink);
//express.urlencoded() -> permite acesso aos dados do body (capturados por meio de um formulário);
router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink);

router.delete('/:id', linkController.deleteLink);
router.delete('/', express.json(), linkController.deleteLink);

module.exports = router;