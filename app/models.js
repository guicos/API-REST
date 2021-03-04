const conn = require('../config/database/databaseCofig');

class Models{
    static async produtos(){
        let dados = await conn.query(`select * from produto`);
        return dados;
    }

    static async produto(id){
        let dados = await conn.query(`select * from produto WHERE id_produto = ${id}`);
        return dados;
    }

    static async produtoDelete(id){
        await conn.query(`delete from produto WHERE id_produto = ${id}`);
        return `produto do id = ${id} excluido com sucesso`;
    }

    static async produtoUpdate(id, nome, qtd, price){
        if(qtd){
            await conn.query(`update produto set qtd = ${qtd} WHERE id_produto = ${id}`);
        }

        if(nome){
            await conn.query(`update produto set nome = '${nome}' WHERE id_produto = ${id}`);
        }

        if(price){
            await conn.query(`update produto set price = '${price}' WHERE id_produto = ${id}`);
        }

        return " Atualização realizado com sucesso ";
    }

    static async produtoSave(nome, qtd, price){
        await conn.query(`insert into produto(nome, qtd, price)Values('${nome}', ${qtd}, ${price})`);
        return `Novo produto ${nome} foi adicionado com sucesso com ${qtd} quantidades valor atualizado R$${price} `;
    }

}

module.exports = Models;