module.exports = (app) =>{
    app.get('/produtos', async function (req, res){
        app.app.controllers.produtosDAO(req, res)
    })

    app.get('/produtos/:id', async function (req, res){
        app.app.controllers.produtoDAO(req, res)
    })

    app.delete('/produtos/:id', async function (req, res){
        app.app.controllers.deleteDAO(req, res)
    })

    app.put('/produtos/:id', async function (req, res){
        app.app.controllers.updateDAO(req, res)
    })

    app.post('/produtos', async function (req, res){
        app.app.controllers.saveDAO(req, res)
    })
}