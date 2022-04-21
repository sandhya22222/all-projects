var express = require('express');
var router = express.Router();

/* GET users listing. */
let dbConnection = require('./../db/db').localConnect();

router.get('/', function (req, res, next) {
  // res.send('respond with a resource');

  dbConnection.query('SELECT * FROM api_support.apisupport;', (error, results, fields) => {

    if (error) throw error;

    res.send(results)
  });

  router.post('/', (req, res, next) => {

    let {
      E_id,
      E_Name,
      issue,
      Priority,


    } = req.body

    console.log(req.body);

    var insertcommand = `INSERT INTO api_support.apisupport
    (E_id,E_Name,issue,Priority) VALUES 
    ('${E_id}','${E_Name}','${issue}','${Priority}')`;
    dbConnection.query(insertcommand, (err, result) => {

      if (err) throw err;

      res.send(result);

    });
  })
})

module.exports = router;
