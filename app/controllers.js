const Models = require('./models');

module.exports.produtosDAO = async function(req, res,app){
    let {rows} = await Models.produtos()
    res.json(rows)
}

module.exports.produtoDAO = async function(req, res,app){
    let id = req.params.id
    let {rows} = await Models.produto(id)
    res.json(rows)
}

module.exports.deleteDAO = async function(req, res,app){
    let id = req.params.id
    let resul = await Models.produtoDelete(id)
    res.json(resul)
}

module.exports.updateDAO = async function(req, res,app){
    let id = req.params.id
    let { nome, qtd, price} = req.body;
    let resul = await Models.produtoUpdate(id, nome, qtd, price)
    res.json(resul)
}

module.exports.saveDAO = async function(req, res,app){
    let { nome, qtd, price} = req.body;
    let resul = await Models.produtoSave(nome, qtd, price)
    res.json(resul)
}

