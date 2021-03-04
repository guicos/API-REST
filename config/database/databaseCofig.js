let conn;

function connect(){
    let { Client } = require('pg');
    
    conn = new Client({
        host : 'localhost',
        database: 'Produtos',
        user: 'postgres',
        password: 'admin',
        port: 5432,
    })
    conn.connect();
}

(async () => {
    connect();
    module.exports = conn;
})();



