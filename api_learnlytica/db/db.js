 var mysql = require('mysql2');
let learn = function () {
   let connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sandhya_Allu123',
    database: 'api_learn',
     insecureAuth : true

    });
    return connection;
};

module.exports.localConnect = learn;